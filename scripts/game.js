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
        for (i = 0; i < gm.trade.length; i++){
            m[gm.trade[i] - 1].classList.add("sTrade");
            m[gm.trade[i] - 1].querySelector(".num").innerHTML = "External Trade";
            trc++;
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
            if (m[i].getAttribute("class") === "mon"){ //has not been changed
                m[i].classList.add("sUnavailable");
                m[i].querySelector(".num").innerHTML = "Unavailable";
                unc++;
            }
        }

        document.getElementById("cUnlimited").innerHTML = ulc;
        document.getElementById("cLimited").innerHTML = lic;
        document.getElementById("cChoice").innerHTML = chyes + "/" + (chno + chyes);
        document.getElementById("cTrade").innerHTML = trc;
        document.getElementById("cUnavailable").innerHTML = unc;
        
        document.getElementById("cAvailable").innerHTML = ulc + lic + chyes + (engames.length > 1 ? trc : 0); //logic must be more complex for trades
        document.getElementById("cTotalUnavailable").innerHTML = unc + chno + (engames.length > 1 ? 0 : trc);
                
    }else
        alert("Not added yet.");
}