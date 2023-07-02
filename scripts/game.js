let engames = []; //enabled game list
let itemcounter = {}; //item counter for this game
var pagetitle = "Catch 'em All: ";

// inline debugger
function dbg(msg){
    if (msg === null){ //clear it instead
        document.getElementById("debugbox").style.display = 'none';
        document.getElementById("debug").innerHTML = "";
    }else{
        document.getElementById("debugbox").style.display = '';
        document.getElementById("debug").innerHTML += "<br />" + msg;
        console.log(msg);
    }
}

//using evolutions `evo`, highlight item in `mons` with the specified class `cls`, plus item list and size of generation
function highlightEvolutions(thismon, mons, cls, items, total){
    if (evolutions[thismon].length > 0){
        for (let i = 0; i < evolutions[thismon].length; i++){
            //Skip Pokémon past this generation, and any with more classes that should've already been iterated
            if (evolutions[thismon][i].evolution <= total && mons[evolutions[thismon][i].evolution - 1].classList.length == 1){ 
                if (evolutions[thismon][i].onegame === true){ //can evolve in one game
                    for (let w = 0; w < evolutions[thismon][i].methods.length; w++){
                        let k = Object.keys(evolutions[thismon][i].methods[w])[0];
                        if (["level"].includes(k)){ //doable unlimited in all games
                            mons[evolutions[thismon][i].evolution - 1].classList.add(cls);
                            mons[evolutions[thismon][i].evolution - 1].querySelector(".num").innerHTML = "Requires Evolution";
                            //iterate by checking next evolution
                            highlightEvolutions(evolutions[thismon][i].evolution, mons, cls, items, total);
                            break; //don't check other methods
                        }else if (k == "item"){
                            let uitem = evolutions[thismon][i].methods[w][k];
                            console.log(items);
                            /*if (!(uitem in itemcounter)) //how many of each item are needed
                                itemcounter[uitem] = 1;
                            else
                                itemcounter[uitem]++;*/
                            mons[evolutions[thismon][i].evolution - 1].setAttribute("itemNeeded", uitem);

                            if (uitem in items){
                                //This could potentially be moved to the item checking at the bottom of game()
                                mons[evolutions[thismon][i].evolution - 1].classList.add("sLimited");
                                mons[evolutions[thismon][i].evolution - 1].querySelector(".num").innerHTML =
                                    "Only " + items[uitem] + " " + uitem;
                                //iterate by checking next evolution
                                highlightEvolutions(evolutions[thismon][i].evolution, mons, "sLimited", items, total);
                            }else{
                                mons[evolutions[thismon][i].evolution - 1].classList.add(cls);
                                mons[evolutions[thismon][i].evolution - 1].querySelector(".num").innerHTML =
                                    "Unlimited " + uitem;
                                //iterate by checking next evolution
                                highlightEvolutions(evolutions[thismon][i].evolution, mons, cls, items, total);
                            }
                        }
                    }
                    
                    //ulc++; //unlimited
                }else{ //mark as "trade" for now
                    mons[evolutions[thismon][i].evolution - 1].classList.add("sTrade");
                    mons[evolutions[thismon][i].evolution - 1].querySelector(".num").innerHTML = "Requires Trading";
                
                    //iterate by checking next evolution
                    highlightEvolutions(evolutions[thismon][i].evolution, mons, "sTrade", items, total);
                    //trc++; //trade
                }
            }else{
                if (evolutions[thismon][i].evolution > total){
                    dbg("Pokédex number too high: #" + (evolutions[thismon][i].evolution));
                }else if (mons[evolutions[thismon][i].evolution - 1].classList.contains("sUnlimitedEvolution")){
                    dbg("Removing evolution requirement: #" + (evolutions[thismon][i].evolution - 1));
                }else{
                    dbg("Already iterated: #" + (evolutions[thismon][i].evolution));
                }
            }
            
        }
    }
}

function game(g){
    if (!!games[g]){
    //if (!!window[g]){

        dbg(null); //clear debugger
        engames = [g];
        //itemcounter = {};
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

        //remove all items needed
        let itNeeded = document.querySelectorAll(".mon[itemNeeded]");
        for (let j = 0; j < itNeeded.length; j++){
            itNeeded[j].removeAttribute("itemNeeded");
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

        //Unlimited MUST be first!
        let gm = games[g];
        for (i = 0; i < gm.unlimited.length; i++){
            if (m[gm.unlimited[i] - 1].classList.contains("sLimited"))
                dbg("Removing limited class: #" + gm.unlimited[i]);
            m[gm.unlimited[i] - 1].setAttribute("class", "mon sUnlimited"); //remove other classes if set earlier
            m[gm.unlimited[i] - 1].removeAttribute("itemNeeded"); //no item needed if available in unlimited quantity
            //m[gm.unlimited[i] - 1].classList.remove("sUnlimitedEvolution"); //remove evolution class if set earlier
            //m[gm.unlimited[i] - 1].classList.remove("sTrade"); //remove trade class if set earlier
            //m[gm.unlimited[i] - 1].classList.add("sUnlimited");
            highlightEvolutions(gm.unlimited[i], m, "sUnlimitedEvolution", ("items" in gm ? gm.items : {}), gm.total);
            m[gm.unlimited[i] - 1].querySelector(".num").innerHTML = "Unlimited";
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
                if (m[c - 1].classList.length == 1){ //not already on unlimited list
                    m[c - 1].classList.add("sLimited");
                    m[c - 1].querySelector(".num") . innerHTML = gm.limited[c];
                    highlightEvolutions(c, m, "sLimitedEvolution", ("items" in gm ? gm.items : {}), gm.total);
                    lic++;
                }else{
                    dbg("Extraneous unlimited (also in limited list) - this is OK: #" + c);
                    m[c - 1].querySelector(".num") . innerHTML = "Unlimited Via Evolution";
                    //This is OK because an unlimited number are available via evolution, but a limited number can be caught directly
                }
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
                        //This should not be populated for evolutions of unlimited, but may be for limited
                        m[gm.choices[c][j][i] - 1].classList.remove("sLimitedEvolution");

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

        //set unavailable, and set footers instead of Pokédex number
        for (i = 0; i < m.length; i++){
            if (i >= gm.total){
                m[i].classList.add("sFuture"); //hide later Pokémon regardless of what happens below
            }else if (m[i].classList.length == 1 && m[i].getAttribute("class") === "mon" && i < gm.total){ //has not been changed
                m[i].classList.add("sUnavailable");
                m[i].querySelector(".num").innerHTML = "Unavailable";
                unc++;
            }else if(m[i].classList.length > 2){ //too many classes on this mon
                console.log(m[i].classList);
                dbg("Too many classes: #" + (i + 1) + " (" + m[i].classList.toString() + ")");
            }
        }

        //hide later generation headers
        for (i = 1; i < generations.length; i++){
            if (i > gm.generation)
                document.getElementById("genhead" + i).style.display = "none";
            else
                document.getElementById("genhead" + i).style.display = "";
        }

        //counters
        ulc = document.querySelectorAll(".mon.sUnlimited").length +
            document.querySelectorAll(".mon.sUnlimitedEvolution:not(.sFuture)").length
        uli = document.querySelectorAll(".mon.sLimited").length +
            document.querySelectorAll(".mon.sLimitedEvolution:not(.sFuture)").length;

        //console.log(`limited: ${uli}, chyes: ${chyes}, chno: ${chno}`);


        //Item checking should be handled here
        itemcounter = {};
        itNeeded = document.querySelectorAll(".mon[itemNeeded]");
        for (let j = 0; j < itNeeded.length; j++){
            if (itNeeded[j].getAttribute("itemNeeded") in itemcounter)
                itemcounter[itNeeded[j].getAttribute("itemNeeded")]++;
            else
                itemcounter[itNeeded[j].getAttribute("itemNeeded")] = 1;
        }
        document.getElementById("itemsNeeded").innerHTML = "";
        let ics = Object.keys(itemcounter).sort();
        let avl;
        let gt = ("items" in gm ? gm.items : {});
        for (let k of ics){
            document.getElementById("itemsNeeded").innerHTML += `<br /><b>${k}:</b> ${itemcounter[k]} needed (${(k in gt ? gt[k] : "unlimited")} available)`;
            if (k in gt && itemcounter[k] > gt[k]){
                dbg(`Not enough items: ${k}. ${gt[k]} available but ${itemcounter[k]} needed.`);
                
                //not enough items, so change these to choices instead of fully available
                itNeeded = document.querySelectorAll('.mon[itemNeeded="'+k+'"]');
                uli -= itNeeded.length;
                chyes += gt[k];
                chno += (itemcounter[k] - gt[k]);
                for (let p = 0; p < itNeeded.length; p++){
                    itNeeded[p].setAttribute("class", "mon sChoice");
                }
            }
        }
        
        //console.log(`limited: ${uli}, chyes: ${chyes}, chno: ${chno}`);

        //display counters on screen
        document.getElementById("cUnlimited").innerHTML = ulc;
        document.getElementById("cLimited").innerHTML = uli;
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