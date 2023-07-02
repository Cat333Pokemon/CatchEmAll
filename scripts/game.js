let engames = []; //enabled game list
var pagetitle = "Catch 'em All: ";

//using evolutions `evo`, highlight item in `mons` with the specified class `cls`
function highlightEvolutions(thismon, mons, cls){
    for (let i = 0; i < evolutions[thismon].length; i++){
        console.log(evolutions[thismon][i]);
        if (evolutions[thismon][i].onegame === true){ //can evolve in one game
            if (mons[evolutions[thismon][i].evolution - 1].classList.length == 1)
                mons[evolutions[thismon][i].evolution - 1].classList.add(cls);
        
            //iterate by checking next evolution
            if (evolutions[evolutions[thismon][i].evolution].length > 0)
                highlightEvolutions(evolutions[thismon][i].evolution, mons, cls);
            //ulc++; //unlimited
        }else{ //mark as "trade" for now
            if (mons[evolutions[thismon][i].evolution - 1].classList.length == 1)
                mons[evolutions[thismon][i].evolution - 1].classList.add("sTrade");
        
            //iterate by checking next evolution
            if (evolutions[evolutions[thismon][i].evolution].length > 0)
                highlightEvolutions(evolutions[thismon][i].evolution, mons, "sTrade");
            //trc++; //trade
        }
    }
}

function game(g){
    if (!!games[g]){
    //if (!!window[g]){

        engames = [g];
        let x = document.querySelectorAll(".btndown");
        for (let w = 0; w < x.length; w++){
            x[w].classList.remove("btndown");
        }
        document.getElementById("btn" + g).classList.add("btndown");
        document.title = document.getElementById("pagetitle").innerHTML = pagetitle + document.getElementById("btn" + g).title;
        
        //uncomment this logic when allowing multiple games
        /*if (engames.includes(g)){
            engames.splice(engames.indexOf(g),1);
            document.getElementById("btn" + g).classList.remove("btndown");
        }else{
            engames.push(g);
            document.getElementById("btn" + g).classList.add("btndown");
        }*/


    //if (g.indexOf("_") > -1 && !!window[g.split("_")[0]]){
        let ulc = 0, trc = 0, lic = 0, chyes = 0, chno = 0, chldex, unc = 0; //counts for top
        let m = document.getElementById("monsters").querySelectorAll(".mon");
        let i,mu;
        //remove all classes and reset number
        for (i = 0; i < m.length; i++){
            m[i].setAttribute("class", "mon");
            mu = m[i].getElementsByClassName('num')[0];
            mu.innerHTML = mu.getAttribute("dt");
            mu = m[i].getElementsByClassName('check')[0]; //remove checkmark
            mu.style.display = "none";
        }

        /*let gm = window[g.split("_")[0]];
        let ver = window[g.split("_")[1]];

        for (let k in gm){
            if (typeof gm[k] == "string")
                m[k - 1].classList.add("sUnlimited");
            else
                m[k - 1].classList.add("sTrade");
        }*/

        //let gm = window[g];
        let gm = games[g];
        for (i = 0; i < gm.unlimited.length; i++){
            m[gm.unlimited[i] - 1].classList.remove("sUnlimitedEvolution"); //remove evolution class if set earlier
            m[gm.unlimited[i] - 1].classList.add("sUnlimited");
            highlightEvolutions(gm.unlimited[i], m, "sUnlimitedEvolution");
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


        if (!!gm.limited){ //order is these are important for classes
            for (let c in gm.limited){
                m[c - 1].classList.add("sLimited");
                m[c - 1].querySelector(".num") . innerHTML = gm.limited[c];
                highlightEvolutions(c, m, "sLimitedEvolution");
                lic++;
            }
        }
        if (!!gm.trade){
            for (i = 0; i < gm.trade.length; i++){
                m[gm.trade[i] - 1].classList.add("sTrade");
                m[gm.trade[i] - 1].querySelector(".num").innerHTML = "Trade Evolution";
                trc++;
            }
        }
        if (!!gm.special){
            for (i = 0; i < gm.special.length; i++){
                m[gm.special[i] - 1].classList.add("sTrade");
                m[gm.special[i] - 1].querySelector(".num").innerHTML = "Special Acquisition";
                trc++;
            }
        }
        
        if (!!gm.evolvesFromLimited){
            for (i = 0; i < gm.evolvesFromLimited.length; i++){
                m[gm.evolvesFromLimited[i] - 1].classList.add("sLimitedEvolution");
                m[gm.evolvesFromLimited[i] - 1].querySelector(".num").innerHTML = "Evolves from Limited";
                lic++;
            }
        }
        if (!!gm.choices){
            for (let c in gm.choices){
                for (let j = 0; j < gm.choices[c].length; j++){
                    for (i = 0; i < gm.choices[c][j].length; i++){
                        if (i > 0){ //evolution of choice
                            m[gm.choices[c][j][i] - 1].classList.add("sChoiceEvolution");
                            m[gm.choices[c][j][i] - 1].querySelector(".num").innerHTML = "Evolves from<br />" + c;
                        }else{ //choice itself
                            m[gm.choices[c][j][i] - 1].classList.add("sChoice");
                            m[gm.choices[c][j][i] - 1].querySelector(".num").innerHTML = "Choose 1<br />" + c;
                        }
                        
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
                m[i].classList.add("sFuture"); //hide later Pokémon
            }
        }

        //hide later generation headers
        for (i = 1; i < generations.length; i++){
            if (i > gm.generation)
                document.getElementById("genhead" + i).style.display = "none";
            else
                document.getElementById("genhead" + i).style.display = "";
        }

        document.getElementById("cUnlimited").innerHTML =
            document.querySelectorAll(".mon.sUnlimited").length + " + " +
            document.querySelectorAll(".mon.sUnlimitedEvolution:not(.sFuture)").length;
        document.getElementById("cLimited").innerHTML =
            document.querySelectorAll(".mon.sLimited").length + " + " +
            document.querySelectorAll(".mon.sLimitedEvolution:not(.sFuture)").length;
        document.getElementById("cChoice").innerHTML = chyes + "/" + (chno + chyes);
        document.getElementById("cTrade").innerHTML =
            document.querySelectorAll(".mon.sTrade:not(.sFuture)").length;
        document.getElementById("cUnavailable").innerHTML =
            document.querySelectorAll(".mon.sUnavailable").length;
        let tot = ulc + lic + chyes + (engames.length > 1 ? trc : 0); //logic must be more complex for trades
        document.getElementById("cTotal").innerHTML = gm.total;
        document.getElementById("cAvailable").innerHTML = tot;
        document.getElementById("cTotalUnavailable").innerHTML = gm.total - tot;
                
    }else
        alert("Not added yet: " + g);
}