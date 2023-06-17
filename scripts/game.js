let engames = []; //enabled game list

function game(g){
    if (!!window[g]){

        engames = [g];
        let x = document.querySelectorAll(".btndown");
        for (let w = 0; w < x.length; w++){
            x[w].classList.remove("btndown");
        }
        document.getElementById("btn" + g).classList.add("btndown");
        //uncomment this logic when allowing multiple games
        /*if (engames.includes(g)){
            engames.splice(engames.indexOf(g),1);
            document.getElementById("btn" + g).classList.remove("btndown");
        }else{
            engames.push(g);
            document.getElementById("btn" + g).classList.add("btndown");
        }*/


    //if (g.indexOf("_") > -1 && !!window[g.split("_")[0]]){
        let m = document.getElementById("monsters").querySelectorAll(".mon");
        let i,mu;
        let ulc = 0, trc = 0, lic = 0, chyes = 0, chno = 0, chldex, unc = 0; //counts for top
        //remove all classes and reset number
        for (i = 0; i < m.length; i++){
            m[i].setAttribute("class", "mon");
            mu = m[i].querySelector('.num');
            mu.innerHTML = mu.getAttribute("dt");
        }

        /*let gm = window[g.split("_")[0]];
        let ver = window[g.split("_")[1]];

        for (let k in gm){
            if (typeof gm[k] == "string")
                m[k - 1].classList.add("sUnlimited");
            else
                m[k - 1].classList.add("sTrade");
        }*/

        let gm = window[g];
        for (i = 0; i < gm.unlimited.length; i++){
            m[gm.unlimited[i] - 1].classList.add("sUnlimited");
            ulc++;
        }

        //Limited Pokémon that can be bred, without choices
        //commented out because this will only be for Gen 1, and I haven't added that part yet
        /*
        for (i = 0; i < gm.limitedBreedable.length; i++){
            if (gm.breeding){
                m[gm.limitedBreedable[i] - 1].classList.add("sUnlimited");
                m[gm.limitedBreedable[i] - 1].querySelector(".num").innerHTML = "Breedable";
                ulc++;
            }else{
                m[gm.limitedBreedable[i] - 1].classList.add("sLimited");
                m[gm.limitedBreedable[i] - 1].querySelector(".num").innerHTML = "Only One";
                lic++;
            }
        }*/

        //Limited Pokémon that can be bred, but requires a choice if not
        //commented out because this will only be for Gen 1, and I haven't added that part yet
        //Might be needed for Ruby and Sapphire too
        /*
        for (let c in gm.choicesBreedable){
            for (let j = 0; j < gm.choicesBreedable[c].length; j++){
                for (i = 0; i < gm.choicesBreedable[c][j].length; i++){
                    if (gm.breeding){
                        m[gm.choicesBreedable[c][j][i] - 1].classList.add("sUnlimited");
                        m[gm.choicesBreedable[c][j][i] - 1].querySelector(".num").innerHTML = "Breedable";
                        ulc++;
                    }else{
                        m[gm.choicesBreedable[c][j][i] - 1].classList.add("sChoice");
                        if (i > 0)
                            m[gm.choicesBreedable[c][j][i] - 1].querySelector(".num").innerHTML = "Evolves from<br />" + c;
                        else
                            m[gm.choicesBreedable[c][j][i] - 1].querySelector(".num").innerHTML = "Choose 1<br />" + c;

                        //This logic breaks if some of the choices give you more Pokémon than others
                        if (j > 0) //only can pick one of a choice in a run
                            chno++;
                        else
                            chyes++;
                    }
                }
            }
        }*/

        for (i = 0; i < gm.trade.length; i++){
            m[gm.trade[i] - 1].classList.add("sTrade");
            m[gm.trade[i] - 1].querySelector(".num").innerHTML = "Trade Evolution";
            trc++;
        }
        if (!!gm.special){
            for (i = 0; i < gm.special.length; i++){
                m[gm.special[i] - 1].classList.add("sTrade");
                m[gm.special[i] - 1].querySelector(".num").innerHTML = "Special Acquisition";
                trc++;
            }
        }
        for (let c in gm.limited){
            m[c - 1].classList.add("sLimited");
            m[c - 1].querySelector(".num") . innerHTML = gm.limited[c];
            lic++;
        }
        for (let c in gm.choices){
            for (let j = 0; j < gm.choices[c].length; j++){
                for (i = 0; i < gm.choices[c][j].length; i++){
                    m[gm.choices[c][j][i] - 1].classList.add("sChoice");
                    if (i > 0) //evolution of choice
                        m[gm.choices[c][j][i] - 1].querySelector(".num").innerHTML = "Evolves from<br />" + c;
                    else //choice itself
                        m[gm.choices[c][j][i] - 1].querySelector(".num").innerHTML = "Choose 1<br />" + c;
                    
                    //This logic breaks if some of the choices give you more Pokémon than others
                    if (j > 0) //only can pick one of a choice in a run
                        chno++;
                    else
                        chyes++;

                    if (j == 0 && i == 0)
                        chldex++; //Living Dex, only applicable without breeding
                }
            }
        }
        
            

        /*let unav = [].concat(gm.choices, gm.unlimited, Object.keys(gm.limited), gm.trade);
        for (i = 0; i < gm.total; i++)
            if (!unav.includes(i + 1)){
                m[i].classList.add("sUnavailable");
                m[i].querySelector(".num").innerHTML = "Unavailable";
            }*/

        for (i = 0; i < m.length; i++){
            if (m[i].getAttribute("class") === "mon" && i < gm.total){ //has not been changed
                m[i].classList.add("sUnavailable");
                //m[i].querySelector(".num").innerHTML = "Unavailable";
                unc++;
            }else if (i >= gm.total){
                m[i].classList.add("sFuture");
            }
        }

        document.getElementById("cUnlimited").innerHTML = ulc;
        document.getElementById("cLimited").innerHTML = lic;
        document.getElementById("cChoice").innerHTML = chyes + "/" + (chno + chyes);
        document.getElementById("cTrade").innerHTML = trc;
        document.getElementById("cUnavailable").innerHTML = unc;
        let tot = ulc + lic + chyes + (engames.length > 1 ? trc : 0); //logic must be more complex for trades
        document.getElementById("cTotal").innerHTML = gm.total;
        document.getElementById("cAvailable").innerHTML = tot;
        document.getElementById("cTotalUnavailable").innerHTML = gm.total - tot;
                
    }else
        alert("Not added yet: " + g);
}