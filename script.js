"use strict"

function hidePamels(){
    let pamels=document.getElementsByClassName("panel")
    for(let i=0;Panels.length;i++){
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