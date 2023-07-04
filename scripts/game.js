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
        //console.log(msg);
    }
}

function variableEvolutions(thismon, game){
    //check ones like Pikachu in Yellow, Feebas by version, Eevee by version, etc.
    //checks for Gen 7 should be added in the future

    //Time not in FireRed/LeafGreen
    //Breeding requires special rules in Ruby/Sapphire when not including one of the other GBA games
    //Some move-based evolutions may not be possible in some games?
    switch (parseInt(thismon)){
        case 26: //Raichu (not available in Yellow)
            if (game == "yellow")
                return false;
            break;
        case 226: //Mantine (requires Remoraid in party)

            break;
        case 350: //Milotic (beauty or Prism Scale) -- level_beauty not added in highlightEvolutions()
            if (["firered","leafgreen","colosseum","xd"].includes(game))
                return false;
            break;
        case 470: //Leafeon (by location)
        case 471: //Glaceon
            if (game == "heartgold" || game == "soulsilver")
                return false;
            break;
        default:
    }
    return true;
}

/*  Breeding helper
    Let's not bother with the choices list; is Ditto ever a choice?
    This code isn't perfect because it also assumes every female of a single instance has a breeding partner
    in the same egg group. However, to account for that would require introducing the entire egg group system,
    and that is just outside of the scope of this project. Those will be defined in variableEvolutions() above
    if they ever come up.
*/
function hasDitto(game){
    if (132 in games[game].limited || games[game].unlimited.includes(132))
        return true;
    else
        return false;
}

//using Pokémon ID `thismon`, highlight item in `mons` with the specified class `cls`, plus item list and size of generation
//Iteration count used when switching between evolutions and breeding
function highlightEvolutions(thismon, mons, cls, items, game, itr){
    thismon = parseInt(thismon);
    //if (thismon == 175)
    //    debugger;
    //if (itr > 0)
    //    console.log("evolution: " + thismon);
    if (itr < 4 && evolutions[thismon].length > 0){
        for (let i = 0; i < evolutions[thismon].length; i++){
            //Skip Pokémon past this generation, and any with more classes that should've already been iterated
            if (variableEvolutions(evolutions[thismon][i].evolution, game) &&
                    evolutions[thismon][i].evolution <= games[game].total &&
                    (mons[evolutions[thismon][i].evolution - 1].classList.length == 1 ||
                        mons[evolutions[thismon][i].evolution - 1].classList.contains("sLimited") ||
                        mons[evolutions[thismon][i].evolution - 1].classList.contains("sLimitedEvolution"))){
                let k = Object.keys(evolutions[thismon][i].method)[0];
                if (evolutions[thismon][i].onegame === true){ //can evolve in one game
                    if (["level", "level_gender", "level_time", "level_happiness", "level_happiness_time", "level_beauty",
                            "level_upside_down", "level_rain", "level_affection_move_type", "level_party_type",
                            "interact", "defeat", "level_location", "level_party", "level_stats", "level_move",
                            "move_special", "battle", "battle_level", "spin", "shed", "walking"].includes(k)){ //doable unlimited in all games
                        if (evolutions[thismon][i].evolution in games[game].limited)
                            mons[evolutions[thismon][i].evolution - 1].querySelector(".num").innerHTML = "Unlimited Via Breeding";
                        else
                            mons[evolutions[thismon][i].evolution - 1].querySelector(".num").innerHTML = "Requires Evolution";
                        mons[evolutions[thismon][i].evolution - 1].classList.remove("sLimited","sLimitedEvolution");
                        mons[evolutions[thismon][i].evolution - 1].classList.add(cls);
                        //iterate by checking next evolution
                        highlightEvolutions(evolutions[thismon][i].evolution, mons, cls, items, game, itr);
                        highlightBreeding(evolutions[thismon][i].evolution, mons, items, game, itr + 1);
                    }else if (["item","item_gender","item_time","level_item_time"].includes(k)){
                        let uitem = evolutions[thismon][i].method[k];
                        if (typeof uitem === "object") //object that contains multiple elements, including the item
                            uitem = uitem.item;
                        mons[evolutions[thismon][i].evolution - 1].setAttribute("itemNeeded", uitem);

                        if (uitem in items){
                            //This could potentially be moved to the item checking at the bottom of game()
                            if (!mons[evolutions[thismon][i].evolution - 1].classList.contains("sLimited")){
                                mons[evolutions[thismon][i].evolution - 1].classList.add("sLimited");
                                mons[evolutions[thismon][i].evolution - 1].querySelector(".num").innerHTML =
                                    (items[uitem] > 0 ? uitem + "<br />(Only " + items[uitem] + ")" : "No " + uitem + " Available");
                            }else if (evolutions[thismon][i].evolution in games[game].limited){ //in limited list
                                if (items[uitem] > 0) //item can get more
                                    mons[evolutions[thismon][i].evolution - 1].querySelector(".num").innerHTML += " / " +
                                        uitem;
                                mons[evolutions[thismon][i].evolution - 1].removeAttribute("itemNeeded");
                                    //Item not needed to get ONE, so don't evaluate it
                            }
                            
                            
                            //iterate by checking next evolution
                            highlightEvolutions(evolutions[thismon][i].evolution, mons, "sLimited", items, game, itr);
                            highlightBreeding(evolutions[thismon][i].evolution, mons, items, game, itr + 1);
                        }else{
                            mons[evolutions[thismon][i].evolution - 1].classList.remove("sLimited","sLimitedEvolution");
                            mons[evolutions[thismon][i].evolution - 1].classList.add(cls);
                            mons[evolutions[thismon][i].evolution - 1].querySelector(".num").innerHTML =
                                uitem + "<br />(Unlimited)";
                            //iterate by checking next evolution
                            highlightEvolutions(evolutions[thismon][i].evolution, mons, cls, items, game, itr);
                            highlightBreeding(evolutions[thismon][i].evolution, mons, items, game, itr + 1);
                        }
                    }
                }else if (!mons[evolutions[thismon][i].evolution - 1].classList.contains("sLimited")){ //mark as "trade" for now
                    // types: "trade", "trade_for", "trade_with_item", "union_level"
                    mons[evolutions[thismon][i].evolution - 1].classList.add("sTrade");
                    mons[evolutions[thismon][i].evolution - 1].querySelector(".num").innerHTML = "Requires Trading";

                    if (k == "trade_with_item"){
                        mons[evolutions[thismon][i].evolution - 1].setAttribute("itemNeeded", evolutions[thismon][i].method[k]);
                    }
                
                    //iterate by checking next evolution
                    highlightEvolutions(evolutions[thismon][i].evolution, mons, "sTrade", items, game, itr);
                    highlightBreeding(evolutions[thismon][i].evolution, mons, items, game, itr + 1);
                }
            }else{
                if (evolutions[thismon][i].evolution > games[game].total){
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

//Breeding is ALWAYS available in unlimited numbers, with iteration count
function highlightBreeding(thismon, mons, items, game, itr){
    thismon = parseInt(thismon);
    //if (itr > 0)
    //    console.log("breeding: " + thismon);
    if (itr < 4 && games[game].breeding && (hasDitto(game) || !noFemales.includes(thismon))){
        if (breeding[thismon] !== null){
            if (typeof breeding[thismon] === "object"){ //multiple children
                for (let x in breeding[thismon]){
                    if (x <= games[game].total){ // within Pokédex
                        let titem = breeding[thismon][x]
                        if (titem === null || !(titem in items) || (titem in items && items[titem] > 0)){ //no item required, or item available
                            mons[x - 1].setAttribute("breedable", "true");
                            if (titem !== null)
                                mons[x - 1].setAttribute("itemNeededUnlimited", titem);

                            if (!mons[x - 1].classList.contains("sUnlimited") && !mons[x - 1].classList.contains("sUnlimitedEvolution") ){
                                //not unlimited in wild (already evaluated with evolutions)
                                if (mons[x - 1].classList.contains("sLimited") || mons[x - 1].classList.contains("sLimitedEvolution")){
                                    //remove limited
                                    mons[x - 1].classList.remove("sLimited","sLimitedEvolution");
                                    mons[x - 1].querySelector(".num").innerHTML = "Unlimited Via Breeding" +
                                        (titem === null ? "" : "<br />(" + titem + ")");
                                    dbg("Removing limited due to breeding (multiple offspring choices): #" + x);
                                }else{
                                    mons[x - 1].querySelector(".num").innerHTML = "Requires Breeding" +
                                        (titem === null ? "" : "<br />(" + titem + ")");
                                }
                                mons[x - 1].classList.add("sUnlimitedEvolution");
                                highlightEvolutions(x, mons, "sUnlimitedEvolution", items, game, itr + 1);
                            }
                        }else{ //item required but not available
                            mons[x - 1].classList.add("sUnavailable");
                            mons[x - 1].querySelector(".num").innerHTML = "No " + breeding[thismon][x] + " Available";
                            mons[x - 1].setAttribute("itemNeededUnlimited", titem);
                        }
                    }
                }
            }else if (breeding[thismon] <= games[game].total){ //one child within Pokédex
                mons[breeding[thismon] - 1].setAttribute("breedable", "true");
                if (!mons[breeding[thismon] - 1].classList.contains("sUnlimited") && !mons[breeding[thismon] - 1].classList.contains("sUnlimitedEvolution")){
                    //not unlimited in wild (already evaluated with evolutions)
                    if (mons[breeding[thismon] - 1].classList.contains("sLimited") || mons[breeding[thismon] - 1].classList.contains("sLimitedEvolution")){
                        //remove limited
                        mons[breeding[thismon] - 1].classList.remove("sLimited","sLimitedEvolution");
                        mons[breeding[thismon] - 1].querySelector(".num").innerHTML = "Unlimited Via Breeding";
                        dbg("Removing limited due to breeding (1 offspring choice): #" + breeding[thismon]);
                    }else{
                        mons[breeding[thismon] - 1].querySelector(".num").innerHTML = "Requires Breeding";
                    }
                    mons[breeding[thismon] - 1].classList.add("sUnlimitedEvolution");
                    highlightEvolutions(breeding[thismon], mons, "sUnlimitedEvolution", items, game, itr + 1);
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
        itNeeded = document.querySelectorAll(".mon[itemNeededUnlimited]");
        for (let j = 0; j < itNeeded.length; j++){
            itNeeded[j].removeAttribute("itemNeededUnlimited");
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
            m[gm.unlimited[i] - 1].removeAttribute("itemNeededUnlimited"); //no item needed if available in unlimited quantity
            //m[gm.unlimited[i] - 1].classList.remove("sUnlimitedEvolution"); //remove evolution class if set earlier
            //m[gm.unlimited[i] - 1].classList.remove("sTrade"); //remove trade class if set earlier
            //m[gm.unlimited[i] - 1].classList.add("sUnlimited");
            highlightEvolutions(gm.unlimited[i], m, "sUnlimitedEvolution", ("items" in gm ? gm.items : {}), g, 0);
            highlightBreeding(gm.unlimited[i], m, ("items" in gm ? gm.items : {}), g, 0);
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
                    highlightEvolutions(c, m, "sLimitedEvolution", ("items" in gm ? gm.items : {}), g, 0);
                    highlightBreeding(c, m, ("items" in gm ? gm.items : {}), g, 0);
                    lic++;
                }else if (m[c - 1].classList.contains("sTrade")){ //available trade evolution
                    m[c - 1].classList.remove("sTrade");
                    m[c - 1].classList.add("sLimited");
                    m[c - 1].querySelector(".num") . innerHTML = gm.limited[c];
                    highlightEvolutions(c, m, "sLimitedEvolution", ("items" in gm ? gm.items : {}), g, 0);
                    highlightBreeding(c, m, ("items" in gm ? gm.items : {}), g, 0);
                }else{
                    dbg("Extraneous unlimited (also in limited list) - this may or may not be OK: #" + c);
                    if (!m[c - 1].hasAttribute("breedable"))
                        m[c - 1].querySelector(".num") . innerHTML = "Unlimited Via Evolution";
                    else
                        m[c - 1].querySelector(".num") . innerHTML = "Unlimited Via Breeding";
                    //This is OK because an unlimited number are available via evolution, but a limited number can be caught directly
                }
            }
        }
        /*if (!!gm.trade){
            for (i = 0; i < gm.trade.length; i++){
                m[gm.trade[i] - 1].classList.add("sTrade");
                m[gm.trade[i] - 1].querySelector(".num").innerHTML = "Trade Evolution";
                trc++;
            }
        }*/
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
                m[i].querySelector(".num").innerHTML = "Not Available";
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
        for (let j = 0; j < itNeeded.length; j++){ //count how many of each item are needed
            if (itNeeded[j].getAttribute("itemNeeded") in itemcounter)
                itemcounter[itNeeded[j].getAttribute("itemNeeded")]++;
            else
                itemcounter[itNeeded[j].getAttribute("itemNeeded")] = 1;
        }
        document.getElementById("itemsNeeded").innerHTML = "";
        let ics = Object.keys(itemcounter).sort();
        let k;
        let gt = ("items" in gm ? gm.items : {});
        for (k of ics){ //For each item, check if there are enough to go around
            document.getElementById("itemsNeeded").innerHTML += `<b>${k}:</b> ${itemcounter[k]} needed (${(k in gt ? gt[k] : "unlimited")} available)<br />`;
            if (k in gt && itemcounter[k] > gt[k]){
                dbg(`Not enough items: ${k}. ${gt[k]} available but ${itemcounter[k]} needed.`);
                itNeeded = document.querySelectorAll('.mon[itemNeeded="'+k+'"]');
                uli -= itNeeded.length;
                
                if (gt[k] == 0){ //no items available
                    
                    for (let p = 0; p < itNeeded.length; p++){
                        itNeeded[p].setAttribute("class", "mon sUnavailable");
                    }
                }else{ //some but not enough available
                    //not enough items, so change these to choices instead of fully available
                    chyes += gt[k];
                    chno += (itemcounter[k] - gt[k]);
                    for (let p = 0; p < itNeeded.length; p++){
                        itNeeded[p].setAttribute("class", "mon sChoice");
                    }
                } 
            }
        }
        //Only one needed because it's not consumed, and these should already have been handled in the breeding section
        itNeeded = document.querySelectorAll(".mon[itemNeededUnlimited]");
        for (let j = 0; j < itNeeded.length; j++){
            k = itNeeded[j].getAttribute("itemNeededUnlimited");
            if (!(k in itemcounter)){
                //We're done with the item counter, this next line is just to prevent displaying this twice
                itemcounter[k] = 1;
                document.getElementById("itemsNeeded").innerHTML +=
                    `<b>${k}:</b> 1 needed (${(k in gt ? gt[k] : "unlimited")} available)<br />`;
            }
        }
        
        console.log(`unlimited: ${ulc}, limited: ${uli}, chyes: ${chyes}, chno: ${chno}`);

        //display counters on screen
        document.getElementById("cUnlimited").innerHTML = ulc;
        document.getElementById("cLimited").innerHTML = uli;
        document.getElementById("cChoice").innerHTML = chyes + "/" + (chno + chyes);
        document.getElementById("cTrade").innerHTML =
            document.querySelectorAll(".mon.sTrade:not(.sFuture)").length;
        document.getElementById("cUnavailable").innerHTML =
            document.querySelectorAll(".mon.sUnavailable").length;
        
        let tot = ulc + uli + chyes + (engames.length > 1 ? trc : 0); //logic must be more complex for trades

        document.getElementById("cTotal").innerHTML = gm.total;
        document.getElementById("cAvailable").innerHTML = tot;
        document.getElementById("cTotalUnavailable").innerHTML = gm.total - tot;

        //Show breeding notes
        if (games[g].breeding){
            document.getElementById("nobreeding").style.display = 'none';
            document.getElementById("noditto").style.display = (hasDitto(g) ? 'none' : 'inline-block');
        }else{
            document.getElementById("nobreeding").style.display = 'inline-block';
            document.getElementById("noditto").style.display = 'none';
        }
                
    }else
        alert("Not added yet: " + g);
}