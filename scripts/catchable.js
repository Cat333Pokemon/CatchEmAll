var pokemonlist = ["","Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie",
"Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok",
"Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix",
"Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio",
"Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam",
"Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash",
"Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly",
"Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee",
"Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu",
"Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon",
"Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair",
"Dragonite","Mewtwo","Mew","Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion","Totodile","Croconaw","Feraligatr","Sentret",
"Furret","Hoothoot","Noctowl","Ledyba","Ledian","Spinarak","Ariados","Crobat","Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi",
"Togetic","Natu","Xatu","Mareep","Flaaffy","Ampharos","Bellossom","Marill","Azumarill","Sudowoodo","Politoed","Hoppip","Skiploom","Jumpluff",
"Aipom","Sunkern","Sunflora","Yanma","Wooper","Quagsire","Espeon","Umbreon","Murkrow","Slowking","Misdreavus","Unown","Wobbuffet","Girafarig",
"Pineco","Forretress","Dunsparce","Gligar","Steelix","Snubbull","Granbull","Qwilfish","Scizor","Shuckle","Heracross","Sneasel","Teddiursa",
"Ursaring","Slugma","Magcargo","Swinub","Piloswine","Corsola","Remoraid","Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom",
"Kingdra","Phanpy","Donphan","Porygon2","Stantler","Smeargle","Tyrogue","Hitmontop","Smoochum","Elekid","Magby","Miltank","Blissey","Raikou",
"Entei","Suicune","Larvitar","Pupitar","Tyranitar","Lugia","Ho-Oh","Celebi","Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken",
"Mudkip","Marshtomp","Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre",
"Ludicolo","Seedot","Nuzleaf","Shiftry","Taillow","Swellow","Wingull","Pelipper","Ralts","Kirlia","Gardevoir","Surskit","Masquerain","Shroomish",
"Breloom","Slakoth","Vigoroth","Slaking","Nincada","Ninjask","Shedinja","Whismur","Loudred","Exploud","Makuhita","Hariyama","Azurill","Nosepass",
"Skitty","Delcatty","Sableye","Mawile","Aron","Lairon","Aggron","Meditite","Medicham","Electrike","Manectric","Plusle","Minun","Volbeat",
"Illumise","Roselia","Gulpin","Swalot","Carvanha","Sharpedo","Wailmer","Wailord","Numel","Camerupt","Torkoal","Spoink","Grumpig","Spinda",
"Trapinch","Vibrava","Flygon","Cacnea","Cacturne","Swablu","Altaria","Zangoose","Seviper","Lunatone","Solrock","Barboach","Whiscash","Corphish",
"Crawdaunt","Baltoy","Claydol","Lileep","Cradily","Anorith","Armaldo","Feebas","Milotic","Castform","Kecleon","Shuppet","Banette","Duskull",
"Dusclops","Tropius","Chimecho","Absol","Wynaut","Snorunt","Glalie","Spheal","Sealeo","Walrein","Clamperl","Huntail","Gorebyss","Relicanth",
"Luvdisc","Bagon","Shelgon","Salamence","Beldum","Metang","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon",
"Rayquaza","Jirachi","Deoxys","Turtwig","Grotle","Torterra","Chimchar","Monferno","Infernape","Piplup","Prinplup","Empoleon","Starly","Staravia",
"Staraptor","Bidoof","Bibarel","Kricketot","Kricketune","Shinx","Luxio","Luxray","Budew","Roserade","Cranidos","Rampardos","Shieldon","Bastiodon",
"Burmy","Wormadam","Mothim","Combee","Vespiquen","Pachirisu","Buizel","Floatzel","Cherubi","Cherrim","Shellos","Gastrodon","Ambipom","Drifloon",
"Drifblim","Buneary","Lopunny","Mismagius","Honchkrow","Glameow","Purugly","Chingling","Stunky","Skuntank","Bronzor","Bronzong","Bonsly",
"Mime Jr.","Happiny","Chatot","Spiritomb","Gible","Gabite","Garchomp","Munchlax","Riolu","Lucario","Hippopotas","Hippowdon","Skorupi","Drapion",
"Croagunk","Toxicroak","Carnivine","Finneon","Lumineon","Mantyke","Snover","Abomasnow","Weavile","Magnezone","Lickilicky","Rhyperior","Tangrowth",
"Electivire","Magmortar","Togekiss","Yanmega","Leafeon","Glaceon","Gliscor","Mamoswine","Porygon-Z","Gallade","Probopass","Dusknoir","Froslass",
"Rotom","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran","Regigigas","Giratina","Cresselia","Phione","Manaphy","Darkrai","Shaymin","Arceus",
"Victini","Snivy","Servine","Serperior","Tepig","Pignite","Emboar","Oshawott","Dewott","Samurott","Patrat","Watchog","Lillipup","Herdier",
"Stoutland","Purrloin","Liepard","Pansage","Simisage","Pansear","Simisear","Panpour","Simipour","Munna","Musharna","Pidove","Tranquill",
"Unfezant","Blitzle","Zebstrika","Roggenrola","Boldore","Gigalith","Woobat","Swoobat","Drilbur","Excadrill","Audino","Timburr","Gurdurr",
"Conkeldurr","Tympole","Palpitoad","Seismitoad","Throh","Sawk","Sewaddle","Swadloon","Leavanny","Venipede","Whirlipede","Scolipede","Cottonee",
"Whimsicott","Petilil","Lilligant","Basculin","Sandile","Krokorok","Krookodile","Darumaka","Darmanitan","Maractus","Dwebble","Crustle","Scraggy",
"Scrafty","Sigilyph","Yamask","Cofagrigus","Tirtouga","Carracosta","Archen","Archeops","Trubbish","Garbodor","Zorua","Zoroark","Minccino",
"Cinccino","Gothita","Gothorita","Gothitelle","Solosis","Duosion","Reuniclus","Ducklett","Swanna","Vanillite","Vanillish","Vanilluxe","Deerling",
"Sawsbuck","Emolga","Karrablast","Escavalier","Foongus","Amoonguss","Frillish","Jellicent","Alomomola","Joltik","Galvantula","Ferroseed",
"Ferrothorn","Klink","Klang","Klinklang","Tynamo","Eelektrik","Eelektross","Elgyem","Beheeyem","Litwick","Lampent","Chandelure","Axew","Fraxure",
"Haxorus","Cubchoo","Beartic","Cryogonal","Shelmet","Accelgor","Stunfisk","Mienfoo","Mienshao","Druddigon","Golett","Golurk","Pawniard",
"Bisharp","Bouffalant","Rufflet","Braviary","Vullaby","Mandibuzz","Heatmor","Durant","Deino","Zweilous","Hydreigon","Larvesta","Volcarona",
"Cobalion","Terrakion","Virizion","Tornadus","Thundurus","Reshiram","Zekrom","Landorus","Kyurem","Keldeo","Meloetta","Genesect","Chespin",
"Quilladin","Chesnaught","Fennekin","Braixen","Delphox","Froakie","Frogadier","Greninja","Bunnelby","Diggersby","Fletchling","Fletchinder",
"Talonflame","Scatterbug","Spewpa","Vivillon","Litleo","Pyroar","Flabébé","Floette","Florges","Skiddo","Gogoat","Pancham","Pangoro","Furfrou",
"Espurr","Meowstic","Honedge","Doublade","Aegislash","Spritzee","Aromatisse","Swirlix","Slurpuff","Inkay","Malamar","Binacle","Barbaracle",
"Skrelp","Dragalge","Clauncher","Clawitzer","Helioptile","Heliolisk","Tyrunt","Tyrantrum","Amaura","Aurorus","Sylveon","Hawlucha","Dedenne",
"Carbink","Goomy","Sliggoo","Goodra","Klefki","Phantump","Trevenant","Pumpkaboo","Gourgeist","Bergmite","Avalugg","Noibat","Noivern","Xerneas",
"Yveltal","Zygarde","Diancie","Hoopa","Volcanion","Rowlet","Dartrix","Decidueye","Litten","Torracat","Incineroar","Popplio","Brionne",
"Primarina","Pikipek","Trumbeak","Toucannon","Yungoos","Gumshoos","Grubbin","Charjabug","Vikavolt","Crabrawler","Crabominable","Oricorio",
"Cutiefly","Ribombee","Rockruff","Lycanroc","Wishiwashi","Mareanie","Toxapex","Mudbray","Mudsdale","Dewpider","Araquanid","Fomantis","Lurantis",
"Morelull","Shiinotic","Salandit","Salazzle","Stufful","Bewear","Bounsweet","Steenee","Tsareena","Comfey","Oranguru","Passimian","Wimpod",
"Golisopod","Sandygast","Palossand","Pyukumuku","Type: Null","Silvally","Minior","Komala","Turtonator","Togedemaru","Mimikyu","Bruxish","Drampa",
"Dhelmise","Jangmo-o","Hakamo-o","Kommo-o","Tapu Koko","Tapu Lele","Tapu Bulu","Tapu Fini","Cosmog","Cosmoem","Solgaleo","Lunala","Nihilego",
"Buzzwole","Pheromosa","Xurkitree","Celesteela","Kartana","Guzzlord","Necrozma","Magearna","Marshadow","Poipole","Naganadel","Stakataka",
"Blacephalon","Zeraora","Meltan","Melmetal","Grookey","Thwackey","Rillaboom","Scorbunny","Raboot","Cinderace","Sobble","Drizzile","Inteleon",
"Skwovet","Greedent","Rookidee","Corvisquire","Corviknight","Blipbug","Dottler","Orbeetle","Nickit","Thievul","Gossifleur","Eldegoss","Wooloo",
"Dubwool","Chewtle","Drednaw","Yamper","Boltund","Rolycoly","Carkol","Coalossal","Applin","Flapple","Appletun","Silicobra","Sandaconda",
"Cramorant","Arrokuda","Barraskewda","Toxel","Toxtricity","Sizzlipede","Centiskorch","Clobbopus","Grapploct","Sinistea","Polteageist","Hatenna",
"Hattrem","Hatterene","Impidimp","Morgrem","Grimmsnarl","Obstagoon","Perrserker","Cursola","Sirfetch'd","Mr. Rime","Runerigus","Milcery",
"Alcremie","Falinks","Pincurchin","Snom","Frosmoth","Stonjourner","Eiscue","Indeedee","Morpeko","Cufant","Copperajah","Dracozolt","Arctozolt",
"Dracovish","Arctovish","Duraludon","Dreepy","Drakloak","Dragapult","Zacian","Zamazenta","Eternatus","Kubfu","Urshifu","Zarude","Regieleki",
"Regidrago","Glastrier","Spectrier","Calyrex","Wyrdeer","Kleavor","Ursaluna","Basculegion","Sneasler","Overqwil","Enamorus","Sprigatito",
"Floragato","Meowscarada","Fuecoco","Crocalor","Skeledirge","Quaxly","Quaxwell","Quaquaval","Lechonk","Oinkologne","Tarountula","Spidops",
"Nymble","Lokix","Pawmi","Pawmo","Pawmot","Tandemaus","Maushold","Fidough","Dachsbun","Smoliv","Dolliv","Arboliva","Squawkabilly","Nacli",
"Naclstack","Garganacl","Charcadet","Armarouge","Ceruledge","Tadbulb","Bellibolt","Wattrel","Kilowattrel","Maschiff","Mabosstiff","Shroodle",
"Grafaiai","Bramblin","Brambleghast","Toedscool","Toedscruel","Klawf","Capsakid","Scovillain","Rellor","Rabsca","Flittle","Espathra","Tinkatink",
"Tinkatuff","Tinkaton","Wiglett","Wugtrio","Bombirdier","Finizen","Palafin","Varoom","Revavroom","Cyclizar","Orthworm","Glimmet","Glimmora",
"Greavard","Houndstone","Flamigo","Cetoddle","Cetitan","Veluza","Dondozo","Tatsugiri","Annihilape","Clodsire","Farigiraf","Dudunsparce",
"Kingambit","Great Tusk","Scream Tail","Brute Bonnet","Flutter Mane","Slither Wing","Sandy Shocks","Iron Treads","Iron Bundle","Iron Hands",
"Iron Jugulis","Iron Moth","Iron Thorns","Frigibax","Arctibax","Baxcalibur","Gimmighoul","Gholdengo","Wo-Chien","Chien-Pao","Ting-Lu","Chi-Yu",
"Roaring Moon","Iron Valiant","Koraidon","Miraidon","Walking Wake","Iron Leaves"];

// new structure for future usage
var pokemon = [
    {},
    /*0001*/ {name: "Bulbasaur", evolve: {2: {level: 16}}, breed: {1: null}},
    /*0002*/ {name: "Ivysaur", evolve: {3: {level: 32}}, breed: {1: null}},
    /*0003*/ {name: "Venusaur", breed: {1: null}},
    /*0004*/ {name: "Charmander", evolve: {5: {level: 16}}, breed: {4: null}},
    /*0005*/ {name: "Charmeleon", evolve: {6: {level: 36}}, breed: {4: null}},
    /*0006*/ {name: "Charizard", breed: {4: null}},
    /*0007*/ {name: "Squirtle", evolve: {8: {level: 16}}, breed: {7: null}},
    /*0008*/ {name: "Wartortle", evolve: {9: {level: 36}}, breed: {7: null}},
    /*0009*/ {name: "Blastoise", breed: {7: null}},
    /*0010*/ {name: "Caterpie", evolve: {11: {level: 7}}, breed: {10: null}},
    /*0011*/ {name: "Metapod", evolve: {12: {level: 10}}, breed: {10: null}},
    /*0012*/ {name: "Butterfree", breed: {10: null}},
    /* ... */
    /*0133*/ /*{name: "Eevee", evolve: {
        134: {item: "water-stone"},
        135: {item: "thunder-stone"},
        136: {item: "fire-stone"},
        196: {friendship: "day"},
        197: {friendship: "night"},
        470: {location: "moss-rock",},
        471: {location: "ice-rock",},
        700: "affection"
    }, breed: 133},
    134: {name: "Vaporeon", breed: 133},
    135: {name: "Jolteon", breed: 133},
    136: {name: "Flareon", breed: 133},
    196: {name: "Espeon", breed: 133},
    197: {name: "Umbreon", breed: 133},
    470: {name: "Leafeon", breed: 133},
    471: {name: "Glaceon", breed: 133},
    700: {name: "Sylveon", breed: 133},*/
]

//All Pokémon are assumed to be breedable except these
var neverBreedable = [30,31,144,145,146,150,151,201,243,244,245,249,250,251,377,378,379,380,381,382,383,384,385,386,
    480,481,482,483,484,485,486,487,488,491,492,493,494,638,639,640,641,642,643,644,645,646,647,648,649,
    716,717,718,719,720,721,772,773,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,
    805,806,807,808,809,880,881,882,883,888,889,890,891,892,893,894,895,896,897,898,905,
    984,985,986,987,988,989,990,991,992,993,994,995,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010];

//These Pokémon can breed if they evolve
var babies = [172,173,174,175,236,238,239,240,298,360,406,433,438,439,440,446,447,458,848];

//Manaphy is special because it can breed and produce Phione, but Phione cannot evolve into Manaphy


var generations = [0, 151, 251, 386, 493, 649, 721, 809, 905, 1010];

var red = {
    total: 151,
    breeding: false,
    choices: {"Starter":[[1,2,3],[4,5,6],[7,8,9]],"Hitmon":[[106],[107]],"Eeveelution":[[134],[135],[136]],"Fossil":[[138,139],[140,141]]},
    unlimited: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29,30,32,33,35,39,41,42,43,44,45,46,47,48,49,50,51,
        54,55,56,57,58,59,60,61,62,63,64,66,67,72,73,74,75,77,78,79,80,81,82,84,85,86,87,88,89,90,91,92,93,95,96,97,98,99,
        100,101,102,103,104,105,109,110,111,112,113,114,115,116,117,118,119,120,121,123,125,128,129,130,132,137,147,148,149],
    limited: {31:"Five Moon Stones",34:"Five Moon Stones",36:"Five Moon Stones",40:"Five Moon Stones",83:"In-game Trade",
        108:"In-game Trade",122:"In-game Trade",124:"In-game Trade",131:"Only One",133:"Only One",142:"Only One",143:"Only Two",
        144:"Only One",145:"Only One",146:"Only One",150:"Only One"},
    limitedBreedable: [],
    choicesBreedable: {},
    trade: [65,68,76,94]
};

//Japanese Green/International Blue
var green = {
    total: 151,
    breeding: false,
    choices: {"Starter":[[1,2,3],[4,5,6],[7,8,9]],"Hitmon":[[106],[107]],"Eeveelution":[[134],[135],[136]],"Fossil":[[138,139],[140,141]]},
    unlimited: [10,11,12,13,14,15,16,17,18,19,20,21,22,25,26,27,28,29,30,32,33,35,37,38,39,41,42,46,47,48,49,50,51,52,53,
        54,55,60,61,62,63,64,66,67,69,70,71,72,73,74,75,77,78,79,80,81,82,84,85,86,87,88,89,90,91,92,93,95,96,97,98,99,
        100,101,102,103,104,105,109,110,111,112,113,114,115,116,117,118,119,120,121,126,127,128,129,130,132,137,147,148,149],
    limited: {31:"Five Moon Stones",34:"Five Moon Stones",36:"Five Moon Stones",40:"Five Moon Stones",83:"In-game Trade",
        108:"In-game Trade",122:"In-game Trade",124:"In-game Trade",131:"Only One",133:"Only One",142:"Only One",143:"Only Two",
        144:"Only One",145:"Only One",146:"Only One",150:"Only One"},
    limitedBreedable: [],
    choicesBreedable: {},
    trade: [65,68,76,94]
};

//Japanese Blue
var blue = {
    total: 151,
    breeding: false,
    choices: {"Starter":[[1,2,3],[4,5,6],[7,8,9]],"Hitmon":[[106],[107]],"Eeveelution":[[134],[135],[136]],"Fossil":[[138,139],[140,141]]},
    unlimited: [10,11,12,13,14,15,16,17,18,19,20,21,22,25,26,27,28,29,30,32,33,35,39,41,42,43,44,45,46,47,48,49,50,51,52,53,
        54,55,58,59,60,61,62,63,64,66,67,72,73,74,75,77,78,79,80,81,82,84,85,86,87,88,89,90,91,92,93,95,96,97,98,99,
        100,101,102,103,104,105,108,109,110,111,112,113,114,116,117,118,119,120,121,123,124,127,129,130,132,137,147,148,149],
    limited: {31:"Five Moon Stones",34:"Five Moon Stones",36:"Five Moon Stones",40:"Five Moon Stones",76:"In-game Trade",
        83:"In-game Trade",94:"In-game Trade",115:"In-game Trade",
        122:"In-game Trade",128:"In-game Trade",131:"Only One",133:"Only One",142:"Only One",143:"Only Two",
        144:"Only One",145:"Only One",146:"Only One",150:"Only One"},
    limitedBreedable: [],
    choicesBreedable: {},
    trade: [65,68]
};

var yellow = {
    total: 151,
    breeding: false,
    choices: {"Hitmon":[[106],[107]],"Eeveelution":[[134],[135],[136]],"Fossil":[[138,139],[140,141]]},
    unlimited: [10,11,12,16,17,18,19,20,21,22,27,28,29,30,32,33,35,37,38,39,41,42,43,44,45,46,47,48,49,50,51,
        54,55,56,57,58,59,60,61,62,63,64,66,67,69,70,71,72,73,74,75,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,95,96,97,98,99,
        100,101,102,103,104,105,108,111,112,113,114,115,116,117,118,119,120,121,123,127,128,129,130,132,137,147,148,149],
    limited: {1:"Only One",2:"Only One",3:"Only One",4:"Only One",5:"Only One",6:"Only One",7:"Only One",8:"Only One",9:"Only One",
        25:"Starter",31:"Five Moon Stones",34:"Five Moon Stones",36:"Five Moon Stones",40:"Five Moon Stones",68:"In-game Trade",
        122:"In-game Trade",131:"Only One",133:"Only One",142:"Only One",143:"Only Two",
        144:"Only One",145:"Only One",146:"Only One",150:"Only One"},
    limitedBreedable: [],
    choicesBreedable: {},
    trade: [65,76,94]
};

/*
var gold = {
    total: 251,
    breeding: true,
    choices: {"Starter":[[152,153,154],[155,156,157],[158,159,160]]},
    unlimited: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,28,29,30,31,32,33,34,35,36,39,40,41,42,43,44,46,47,48,49,50,51,54,55,60,61,
        63,64,66,67,69,70,72,73,74,75,77,78,79,80,81,82,83,84,85,86,87,88,89,90,92,93,95,96,97,98,99,100,101,102,104,105,108,109,110,
        111,112,113,114,115,116,117,118,119,120,122,123,124,125,126,127,128,129,130,131,132,137,147,148,149,
        161,162,163,164,169,170,171,172,173,174,177,178,182,183,184,187,188,189,190,191,192,193,194,195,198,200,201,202,204,205,206,209,210,
        211,213,214,215,218,219,220,221,222,228,229,234,235,238,239,240,241,242,246,247,248],
    limited: {243:"Only One",244:"Only One",245:"Only One",249:"Only One",250:"Only One"},
    limitedBreedable: [133,142,185,143,175,176,236],
    choicesBreedable: {"Hitmon":[[106],[107],[237]], "Eeveelution":[[196],[197]]},
    trade: [65,68,76,94,186,199,208,212,230,233]
}*/
var gold = {
    total: 251,
    breeding: true,
    choices: {"Starter":[[152,153,154],[155,156,157],[158,159,160]],
        "Fire Stone":[[59],[136]],"Water Stone":[[62],[91],[134],[121]],"Thunder Stone":[[26],[135]],"Leaf Stone":[[45],[71],[103]]},
    unlimited: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,28,29,30,31,32,33,34,35,36,39,40,41,42,43,44,46,47,48,49,50,51,54,55,56,57,58,60,61,
        63,64,66,67,69,70,72,73,74,75,77,78,79,80,81,82,83,84,85,86,87,88,89,90,92,93,95,96,97,98,99,100,101,102,104,105,106,107,108,109,110,
        111,112,113,114,115,116,117,118,119,120,122,123,124,125,126,127,128,129,130,131,132,133,137,142,143,147,148,149,
        161,162,163,164,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,187,188,189,190,191,192,193,194,195,196,197,198,
        200,201,202,203,204,205,206,207,209,210,
        211,213,214,215,216,217,218,219,220,221,222,223,224,226,228,229,234,235,236,237,238,239,240,241,242,246,247,248],
    limited: {243:"Only One",244:"Only One",245:"Only One",249:"Only One",250:"Only One"},
    trade: [65,68,76,94,186,199,208,212,230,233]
}

var silver = {
    total: 251,
    breeding: true,
    choices: {"Starter":[[152,153,154],[155,156,157],[158,159,160]],
        "Fire Stone":[[38],[136]],"Water Stone":[[62],[91],[134],[121]],"Thunder Stone":[[26],[135]],"Leaf Stone":[[45],[71],[103]]},
    unlimited: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,28,29,30,31,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48,49,50,51,52,53,54,55,60,61,
        63,64,66,67,69,70,72,73,74,75,77,78,79,80,81,82,83,84,85,86,87,88,89,90,92,93,95,96,97,98,99,100,101,102,104,105,106,107,108,109,110,
        111,112,113,114,115,116,117,118,119,120,122,123,124,125,126,127,128,129,130,131,132,133,137,142,143,147,148,149,
        161,162,163,164,165,166,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,187,188,189,190,191,192,193,194,195,196,197,198,
        200,201,202,203,204,205,206,209,210,
        211,213,214,215,218,219,220,221,222,223,224,225,227,228,229,231,232,234,235,236,237,238,239,240,241,242,246,247,248],
    limited: {243:"Only One",244:"Only One",245:"Only One",249:"Only One",250:"Only One"},
    trade: [65,68,76,94,186,199,208,212,230,233]
}

var crystal = {
    total: 251,
    breeding: true,
    choices: {"Starter":[[152,153,154],[155,156,157],[158,159,160]]},
    unlimited: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,58,59,60,61,
        62,63,64,66,67,69,70,71,72,73,74,75,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,
        111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,142,143,147,148,149,
        161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,182,183,184,185,187,188,189,190,191,192,193,194,195,196,197,198,200,
        201,202,204,205,206,207,209,210,
        211,213,214,215,216,217,218,219,220,221,222,225,226,227,228,229,231,232,234,235,236,237,238,239,240,241,242,246,247,248],
    limited: {243:"Only One",244:"Only One",245:"Only One",249:"Only One",250:"Only One",251:"Only One (Virtual Console)"},
    trade: [65,68,76,94,186,199,208,212,230,233]
}

var ruby = {
    total: 386,
    breeding: false, /* No Ditto, so starters, the fossil, and Castform require females to get more */
    choices: {"Starter":[[252,253,254],[255,256,257],[258,259,260]],"Fossil":[[345,346],[347,348]],"Moon Stone":[[40],[301]]},
    unlimited: [25,26,27,28,37,38,39,41,42,43,44,45,54,55,63,64,66,67,72,73,74,75,81,82,84,85,88,89,100,101,109,110,111,112,116,117,118,119,120,121,127,129,130,
        169,170,171,172,174,177,178,182,183,184,202,203,214,218,219,222,227,231,232,
        261,262,263,264,265,266,267,268,269,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,303,
        304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,338,339,340,341,342,343,
        344,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,369,370,371,372,373,374,375,376],
    limited: {374:"Only One (No Breeding)",377:"Only One",378:"Only One",
        379:"Only One",381:"Only One",383:"Only One",384:"Only One"},
    evolvesFromLimited: [375,376],
    trade: [65,68,76,367,368]
}
var sapphire = {
    total: 386,
    breeding: false, /* No Ditto, so starters, the fossil, and Castform require females to get more */
    choices: {"Starter":[[252,253,254],[255,256,257],[258,259,260]],"Fossil":[[345,346],[347,348]]},
    unlimited: [25,26,27,28,37,38,39,40,41,42,43,44,45,54,55,63,64,66,67,72,73,74,75,81,82,84,85,88,89,100,101,109,110,111,112,116,117,118,119,120,121,127,129,130,
        169,170,171,172,174,177,178,183,184,202,203,214,218,219,222,227,231,232,
        261,262,263,264,265,266,267,268,269,270,271,272,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,
        304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,336,337,339,340,341,342,343,
        344,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,369,370,371,372,373,374,375,376],
    limited: {182:"One Sun Stone",374:"Only One (No Breeding)",377:"Only One",378:"Only One",
        379:"Only One",380:"Only One",382:"Only One",384:"Only One"},
    evolvesFromLimited: [375,376],
    trade: [65,68,76,367,368]
}
var emerald = {
    total: 386,
    breeding: true,
    choices: {"Starter":[[252,253,254],[255,256,257],[258,259,260]],"Eon Duo":[[380],[381]],"Moon Stone":[[40],[301]]},
    unlimited: [25,26,27,28,37,38,39,41,42,43,44,45,52,53,54,55,63,64,66,67,72,73,74,75,81,82,84,85,88,89,100,101,109,110,111,112,116,117,118,119,120,121,127,
        129,130,132,
        163,164,165,166,167,168,169,170,171,172,174,177,178,179,180,181,182,183,184,185,190,191,192,194,195,202,203,204,205,207,209,210,213,214,216,217,218,219,
        222,223,224,227,228,229,231,232,234,235,241,
        261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,
        302,303,304,305,306,309,310,311,312,313,314,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,336,338,339,340,341,342,343,344,
        345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,369,370,371,372,373,374,375,376],
    limited: {377:"Only One",378:"Only One",379:"Only One",382:"Only One",383:"Only One",384:"Only One"},
    trade: [65,68,76,367,368],
    special: [152,153,154,155,156,157,158,159,160]
}
var firered = {
    total: 386,
    breeding: true,
    choices: {"Starter":[[1,2,3],[4,5,6],[7,8,9]],"Fossil":[[138,139],[140,141]],"Legendary Beast":[[243],[244],[245]]},
    unlimited: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29,30,31,32,33,34,35,36,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,
        62,63,64,66,67,72,73,74,75,77,78,81,82,83,84,85,86,87,88,89,90,91,92,93,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,
        116,117,118,119,122,123,124,125,128,129,130,131,132,133,134,135,136,137,142,143,147,148,149,
        161,162,165,166,167,168,169,172,173,174,175,176,177,178,182,187,188,189,193,194,195,198,201,202,206,211,214,218,219,220,221,225,227,231,232,236,237,238,
        239,242,246,247,248,
        360],
    limited: {144:"Only One",145:"Only One",146:"Only One",150:"Only One",},
    trade: [65,68,76,94,186,208,212,230,233],
    special: [196,197]
}
var leafgreen = {
    total: 386,
    breeding: true,
    choices: {"Starter":[[1,2,3],[4,5,6],[7,8,9]],"Fossil":[[138,139],[140,141]],"Legendary Beast":[[243],[244],[245]]},
    unlimited: [10,11,12,13,14,15,16,17,18,19,20,21,22,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,46,47,48,49,50,51,52,53,56,57,60,61,62,63,64,66,67,
        69,70,71,72,73,74,75,77,78,79,80,81,82,83,84,85,86,87,88,89,92,93,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,
        117,118,119,120,121,122,124,126,127,128,129,130,131,132,133,134,135,136,137,142,143,147,148,149,
        161,162,165,166,167,168,169,172,173,174,175,176,177,178,183,184,187,188,189,193,200,201,202,206,214,215,218,219,220,221,223,224,226,231,232,236,237,238,
        240,242,246,247,248,
        298,360],
    limited: {144:"Only One",145:"Only One",146:"Only One",150:"Only One",},
    trade: [65,68,76,94,186,199,208,230,233],
    special: [196,197]
}

var colosseum = {
    total: 386,
    breeding: false,
    choices: {},
    unlimited: [],
    limited: {153:"Only One (No Breeding)",156:"Only One (No Breeding)",159:"Only One (No Breeding)",
        162:"Only One (No Breeding)",164:"Only One (No Breeding)",166:"Only One (No Breeding)",168:"Only One (No Breeding)",
        176:"Only One (No Breeding)",180:"Only One (No Breeding)",185:"Only One (No Breeding)",188:"Only One (No Breeding)",
        190:"Only One (No Breeding)",192:"Only One (No Breeding)",193:"Only One (No Breeding)",195:"Only One (No Breeding)",
        196:"Starter",197:"Starter",198:"Only One (No Breeding)",200:"Only One (No Breeding)",205:"Only One (No Breeding)",
        206:"Only One (No Breeding)",207:"Only One (No Breeding)",210:"Only One (No Breeding)",211:"Only One (No Breeding)",213:"Only One (No Breeding)",
        214:"Only One (No Breeding)",215:"Only One (No Breeding)",217:"Only One (No Breeding)",218:"Only One (No Breeding)",
        221:"Only One (No Breeding)",224:"Only One (No Breeding)",226:"Only One (No Breeding)",227:"Only One (No Breeding)",229:"Only One (No Breeding)",
        234:"Only One (No Breeding)",235:"Only One (No Breeding)",237:"Only One (No Breeding)",241:"Only One (No Breeding)",243:"Only One",244:"Only One",
        245:"Only One",248:"Only One (No Breeding)",250:"Only One",296:"Only One (No Breeding)",307:"Only One (No Breeding)",311:"Only One (No Breeding)",
        329:"Only One (No Breeding)",333:"Only One (No Breeding)",357:"Only One (No Breeding)",359:"Only One (No Breeding)",376:"Only One (No Breeding)"},
    evolvesFromLimited: [154,157,160,181,189,219,225,297,308,330,334],
    trade: [],
    special: [25,251,385]
}

var xd = {
    total: 386,
    breeding: false,
    choices: {"Eeveelution":[[134],[135],[136],[196],[197]],"Fire Stone":[[38],[59]],"Leaf Stone":[[71],[275]]},
        /* You can get both Growlithe and Arcanine if you choose the Fire Stone at the start of the game and then don't use it on Eevee. */
    unlimited: [27,28,41,42,169,187,188,189,194,195,207,231,232,283,284,304,305,306,328,329,330],
    limited: {12:"Only One (No Breeding)",15:"Only One (No Breeding)",17:"Only One (No Breeding)",
        20:"Only One (No Breeding)",21:"Only One (No Breeding)",24:"Only One (No Breeding)",
        37:"Only One (No Breeding)",46:"Only One (No Breeding)",49:"Only One (No Breeding)",51:"Only One (No Breeding)",52:"Only One (No Breeding)",
        55:"Only One (No Breeding)",57:"Only One (No Breeding)",
        58:"Only One (No Breeding)",62:"Only One (No Breeding)",70:"Only One (No Breeding)",78:"Only One (No Breeding)",82:"Only One (No Breeding)",
        83:"Only One (No Breeding)",85:"Only One (No Breeding)",86:"Only One (No Breeding)",
        88:"Only One (No Breeding)",90:"Only One (No Breeding)",91:"In-game Trade",97:"Only One (No Breeding)",
        100:"Only One (No Breeding)",103:"Only One (No Breeding)",105:"Only One (No Breeding)",106:"Only One (No Breeding)",107:"Only One (No Breeding)",
        108:"Only One (No Breeding)",112:"Only One (No Breeding)",113:"Only One (No Breeding)",
        114:"Only One (No Breeding)",115:"Only One (No Breeding)",121:"Only One (No Breeding)",122:"Only One (No Breeding)",123:"Only One (No Breeding)",
        125:"Only One (No Breeding)",126:"Only One (No Breeding)",127:"Only One (No Breeding)",128:"Only One (No Breeding)",131:"Only One (No Breeding)",
        133:"Starter",143:"Only One (No Breeding)",144:"Only One",145:"Only One",146:"Only One",149:"Only One (No Breeding)",
        152:"Only One (No Breeding)",155:"Only One (No Breeding)",158:"Only One (No Breeding)",165:"Only One (No Breeding)",
        167:"Only One (No Breeding)",175:"Only One (No Breeding)",177:"Only One (No Breeding)",179:"Only One (No Breeding)",
        204:"Only One (No Breeding)",213:"In-game Trade",216:"Only One (No Breeding)",
        219:"Only One (No Breeding)",220:"Only One (No Breeding)",228:"Only One (No Breeding)",246:"In-game Trade",249:"Only One",261:"Only One (No Breeding)",
        273:"Only One (No Breeding)",277:"Only One (No Breeding)",280:"Only One (No Breeding)",
        285:"Only One (No Breeding)",296:"Only One (No Breeding)",299:"Only One (No Breeding)",
        301:"Only One (No Breeding)",302:"Only One (No Breeding)",303:"Only One (No Breeding)",307:"In-game Trade",310:"Only One (No Breeding)",
        315:"Only One (No Breeding)",316:"Only One (No Breeding)",318:"Only One (No Breeding)",322:"Only One (No Breeding)",
        334:"Only One (No Breeding)",335:"Only One (No Breeding)",337:"Only One (No Breeding)",338:"Only One (No Breeding)",
        343:"Only One (No Breeding)",354:"Only One (No Breeding)",355:"Only One (No Breeding)",361:"Only One (No Breeding)",363:"Only One (No Breeding)",
        373:"Only One (No Breeding)",},
    evolvesFromLimited: [18,22,47,53,87,89,101,153,154,156,157,159,160,166,168,176,178,180,181,205,217,221,229,239,242,247,248,262,274,286,297,308,
        317,319,323,344,356,362,364,365,281,282],
    trade: [212]
}