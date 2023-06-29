/* This must be run from an HTTP server. To run it locally, you can use something like Python:
    python3 -m http.server
*/
async function parse_locations() {
    let notUnlimited = ["gift", "gift-egg", "only-one"]; //methods that don't give an unlimited number
    let x = {}, w;
    for (let ir = 1; ir <= 721; ir++){
        //to execute this on the API instead, uncomment the next line and comment the one for the local file
        //const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+ir+"/encounters");
        const response = await fetch("./cache/encounters/"+ir+".json");        
        const jsonData = await response.json();
        console.log({[ir]: jsonData});
        for (let i = 0; i < jsonData.length; i++){
            for (let j = 0; j < jsonData[i].version_details.length; j++){
                w = jsonData[i].version_details[j];
                if (!(w.version.name in x))
                    x[w.version.name] = {unlimited: [], limited: {}};
                for (let k = 0; k < w.encounter_details.length; k++){
                    if (!notUnlimited.includes(w.encounter_details[k].method.name)){
                        //check if this Pokémon is already in the unlimited list
                        if (!(x[w.version.name].unlimited.includes(ir)))
                            x[w.version.name].unlimited.push(ir); // = ["walk"];

                        //check if this Pokémon is in the limited list and remove it
                        if (ir in x[w.version.name].limited)
                            delete x[w.version.name].limited[ir];

                    }else if (!(x[w.version.name].unlimited.includes(ir))){ //else: if not in unlimited list, add to limited list
                        if (!(ir in x[w.version.name].limited))
                            x[w.version.name].limited[ir] = [];
                        if (!x[w.version.name].limited[ir].includes(w.encounter_details[k].method.name))
                            x[w.version.name].limited[ir].push(w.encounter_details[k].method.name);
                    }
                    //x[w.version.name][ir].push(w.encounter_details[k].method.name);


                    /*if (!(w.encounter_details[k].method.name in x[w.version.name]))
                        x[w.version.name][w.encounter_details[k].method.name] = [];
                    if (!x[w.version.name][w.encounter_details[k].method.name].includes(ir))
                        x[w.version.name][w.encounter_details[k].method.name].push(ir);*/
                    
                }
            }
        }
    }
    console.log({Games: x});
    document.getElementById("x").innerHTML = JSON.stringify(x);
}

async function parse_evolutions() {
    let notUnlimited = ["gift", "gift-egg", "only-one"]; //methods that don't give an unlimited number
    let x = {}, w;
    for (let ir = 1; ir <= 538; ir++){ //538
        const response = await fetch("./cache/evolution/"+ir+".json");
        if (response.status === 200){
            const jsonData = await response.json();
            //console.log(doevo(jsonData.chain));
            w = doevo(jsonData.chain);
            x[Object.keys(w)[0]] = w[Object.keys(w)[0]];
        }
    }
    document.getElementById("x").innerHTML = JSON.stringify(x, null, 4);
}

// iterative helper function for parse_evolutions()
function doevo(evo){
    let w = [], keylength, onegame = false;
    console.log(evo);
    //document.getElementById("x").innerHTML += evo.species.name + "\n";
    if ("evolves_to" in evo){
        for (let i = 0; i < evo.evolves_to.length; i++){
            w.push(doevo(evo.evolves_to[i]));
        }
    }
    if (evo.evolution_details.length > 0){
        onegame = true; //doable with one game
        for (let i = 0; i < evo.evolution_details.length; i++){
            //remove all nulls from evolution methods
            evo.evolution_details[i] = Object.fromEntries(Object.entries(evo.evolution_details[i]).filter(([_, v]) =>
                v !== null && v !== false && !(typeof v == "string" && v.length == 0)));
            keylength = Object.keys(evo.evolution_details[i]).length;
            switch (evo.evolution_details[i].trigger.name){
                case "level-up": //several sub-methods on this one
                    if (onegame === false) //mix of true and false
                        onegame = "variable";
                    
                    if (keylength == 2 && "min_level" in evo.evolution_details[i]) //regular level-up
                        evo.evolution_details[i] = {level: evo.evolution_details[i].min_level};
                    else if (keylength == 3 && "min_level" in evo.evolution_details[i] && "time_of_day" in evo.evolution_details[i]){ //time-based level-up
                        evo.evolution_details[i] = {level_time: evo.evolution_details[i].min_level};
                        /*if (evo.evolution_details[i].time_of_day == "day")
                            evo.evolution_details[i] = {level_day: evo.evolution_details[i].min_level};
                        else if (evo.evolution_details[i].time_of_day == "night")
                            evo.evolution_details[i] = {level_night: evo.evolution_details[i].min_level};
                        else //don't think there are any yet
                            onegame = "unknown";
                            //leaving this part commented out in case getting the actual time matters
                        */
                    }else if (keylength == 3 && "min_level" in evo.evolution_details[i] && "gender" in evo.evolution_details[i]) //specific gender level-up
                        evo.evolution_details[i] = {level_gender: evo.evolution_details[i].min_level};
                        //gender not shown
                    else if (keylength == 3 && "min_level" in evo.evolution_details[i] && "relative_physical_stats" in evo.evolution_details[i]) //level-up with stats check
                        evo.evolution_details[i] = {level_stats: evo.evolution_details[i].min_level};
                        //more logic needed if you care about the actual stats check
                    else if (keylength == 2 && "min_happiness" in evo.evolution_details[i]) //happiness level-up
                        evo.evolution_details[i] = {level_happiness: evo.evolution_details[i].min_happiness};
                        else if (keylength == 3 && "min_happiness" in evo.evolution_details[i] && "time_of_day" in evo.evolution_details[i]) //time-based happiness level-up
                        evo.evolution_details[i] = {level_happiness_time: evo.evolution_details[i].min_happiness};
                        //time of day not shown
                    else if (keylength == 3 && "min_happiness" in evo.evolution_details[i] && "known_move_type" in evo.evolution_details[i]) //happiness level-up with move type
                        evo.evolution_details[i] = {level_happiness_move_type: evo.evolution_details[i].known_move_type.name};
                        //happiness level not shown
                    else if (keylength == 3 && "min_affection" in evo.evolution_details[i] && "known_move_type" in evo.evolution_details[i]) //affection level-up with move type
                        evo.evolution_details[i] = {level_affection_move_type: evo.evolution_details[i].known_move_type.name};
                        //affection level not shown
                    else if (keylength == 2 && "held_item" in evo.evolution_details[i]) //currently unused; level up while holding item
                        evo.evolution_details[i] = {level_item: evo.evolution_details[i].held_item.name};
                    else if (keylength == 3 && "held_item" in evo.evolution_details[i] && "time_of_day" in evo.evolution_details[i]) //time-based level-up while holding item
                        evo.evolution_details[i] = {level_item_time: evo.evolution_details[i].held_item.name};
                        //time of day not shown
                    else if (keylength == 2 && "min_beauty" in evo.evolution_details[i]) //level up with high beauty
                        evo.evolution_details[i] = {level_beauty: evo.evolution_details[i].min_beauty};
                        //time of day not shown
                    else if (keylength == 2 && "known_move" in evo.evolution_details[i]) //level up while knowing move
                        evo.evolution_details[i] = {level_move: evo.evolution_details[i].known_move.name};
                    else if (keylength == 2 && "location" in evo.evolution_details[i]) //level up in a location
                        evo.evolution_details[i] = {level_location: evo.evolution_details[i].location.name};
                    else
                        onegame = "unknown";
                    break;
                case "use-item":
                    if (onegame === false) //mix of true and false
                        onegame = "variable";
                    
                    if (keylength == 2 && "item" in evo.evolution_details[i]) //use an item
                        evo.evolution_details[i] = {item: evo.evolution_details[i].item.name};
                    else if (keylength == 3 && "item" in evo.evolution_details[i] && "time_of_day" in evo.evolution_details[i]) //use an item
                        evo.evolution_details[i] = {item_time: evo.evolution_details[i].item.name};
                        //time of day not shown
                    else
                        onegame = "unknown";
                    break;
                case "trade":
                    if (onegame === true && i == 0) //not unknown and evaluating 1st method
                        onegame = false;
                    else if (onegame === true) //evaluating 2nd+ method
                        onegame = "variable";
                    
                    if (keylength == 1) //trade evolution without item
                        evo.evolution_details[i] = {trade: true};
                    else if (keylength == 2 && "held_item" in evo.evolution_details[i]) //trade evolution with item
                        evo.evolution_details[i] = {trade_with_item: evo.evolution_details[i].held_item.name};
                    else if (keylength == 2 && "trade_species" in evo.evolution_details[i]) //trade for another Pokémon
                        evo.evolution_details[i] = {trade_for: evo.evolution_details[i].trade_species.name};
                    break;
                case "recoil-damage":
                case "take-damage":
                case "three-critical-hits":
                    if (onegame === false) //mix of true and false
                        onegame = "variable";
                    evo.evolution_details[i] = {battle: evo.evolution_details[i].trigger.name};
                    break;
                default:
                    onegame = "unknown";
            }
        }
        return {[evo.species.url.split("pokemon-species/")[1].split("/")[0]]: w, method: evo.evolution_details, onegame: onegame}; //just get Pokédex number
            // (evo.evolution_details.length == 1 ? onegame : "unknown")
    }else
        return {[evo.species.url.split("pokemon-species/")[1].split("/")[0]]: w}; //just get Pokédex number
}

//parse_locations();

parse_evolutions();