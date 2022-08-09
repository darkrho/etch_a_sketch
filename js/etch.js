"use strict"
// initial values
let per = 16
const body = document.querySelector("body");
let container = document.querySelector(".container");
// create the layout
function layout(){
    let num_divs = per * per;
    for (let i=0; i<num_divs; i++){
        container.appendChild(document.createElement("div"));
    };
}

// change color of the divs
function change_color(event){
    let div_to_change = event.target;
    div_to_change.classList.add("color");
}
container.addEventListener("mouseover", change_color);


// change layout definition
function set_definition(){
    const but = document.querySelector("button");
    // prompt the user and obtain the results
    function get_pixels(){
        let pixels = prompt("please enter the number of pixels");
        if ( +pixels > 0 && +pixels < 101){
            per = +pixels;
            let container_childs = document.querySelectorAll(".container div");
            for( let child of container_childs){
                container.removeChild(child);
            }
            document.documentElement.style.setProperty("--rec", per);
            layout();
        }
}
    but.addEventListener("click", get_pixels.bind(get_pixels));
    
    }
    
layout();
set_definition();



