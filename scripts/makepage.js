let m = document.getElementById("monsters");
let g = 0;
for (let i = 1; i < 152; i++){
//for (let i = 1; i < pokemonlist.length; i++){
    if (i > generations[g]){
        let nh = document.createElement("h2");
        nh.className = "genhead";
        nh.innerHTML = "Generation " + (g + 1);
        m.appendChild(nh);
        g++;
    }

    let ne = document.createElement("div");
    let ni = document.createElement("img");
    ne.className = "mon"
    ni.src = "images/" + i + ".png";
    ni.alt = pokemonlist[i];
    ne.innerHTML = pokemonlist[i] + "<br />";
    ne.appendChild(ni);
    ne.innerHTML += '<br /><span dt="' + i + '" class="num">' + i + '</span>';
    m.appendChild(ne);
}