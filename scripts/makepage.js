let m = document.getElementById("monsters");
let g = 0;
document.getElementById("cTotal").innerHTML = pokemonlist.length - 1;
//for (let i = 1; i < 252; i++){
for (let i = 1; i < pokemonlist.length; i++){
    if (i > generations[g]){
        let nh = document.createElement("h2");
        nh.className = "genhead";
        nh.id = "genhead" + (g + 1);
        nh.innerHTML = "Generation " + (g + 1);
        m.appendChild(nh);
        g++;
    }

    let ne = document.createElement("div");
    let ni = document.createElement("img");
    ne.className = "mon"
    ni.src = "images/pkm/" + i + ".png";
    ni.alt = pokemonlist[i];
    ne.innerHTML = '<div class="check">&#10004;</div>' + pokemonlist[i] + "<br />";
    ne.appendChild(ni);
    ne.innerHTML += '<br /><span dt="' + i + '" class="num">' + i + '</span>';
    ne.addEventListener("click", function(){
        //add or remove from capture list
        //This is just for show for now. It'll be expanded to a proper Pokédex tracker once combining games is a feature
        if (this.classList.contains("sCaptured")){
            this.classList.remove("sCaptured");
            this.getElementsByClassName("check")[0].style.display = "none";
        }else{
            this.classList.add("sCaptured");
            this.getElementsByClassName("check")[0].style.display = "block";
        }
    });
    ne.addEventListener("contextmenu", function(e){
        alert("Right-clicking or long-pressing will show catching details when this is finished.");
        e.preventDefault();
    });
    m.appendChild(ne);
}

//game("firered");