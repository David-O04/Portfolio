"use strict"

function hidePanels(){
    let panels=document.getElementsByClassName("panel")
    for(let i=0;i<panels.length;i++){
        panels[i].style.display="none"
    }
}


function showPanel(pid){

    hidePanels()
    let panel = document.getElementById(pid)
    panel.style.display="block"

}

hidePanels()
showPanel("panel1")