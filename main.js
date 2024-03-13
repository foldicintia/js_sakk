window.addEventListener("load", function () {
    sakktabla();
    szinezes();
    babu();
})

function sakktabla() {
    const taroloELEM = document.querySelector("#tabla");
    let tablazat = "<table>";
    for (let i = 0; i < 8; i++) {
        let sorok = "<tr>";
        for (let j = 0; j < 8; j++) {
            sorok += "<td>&nbsp;</td>";
        }
        sorok += "</tr>";
        tablazat += sorok;
    }
    tablazat += "</table>";
    taroloELEM.innerHTML = tablazat;
}
function szinezes(){
    const paratlanszurkeELEMEK = document.querySelectorAll("tr:nth-child(odd)  td:nth-child(even)")
    for (let index = 0; index < paratlanszurkeELEMEK.length; index++) {
        paratlanszurkeELEMEK[index].style.backgroundColor="lightgrey"
    }
    const parosszurkeELEMEK = document.querySelectorAll("tr:nth-child(even) td:nth-child(odd)")
    for (let index = 0; index < parosszurkeELEMEK.length; index++) {
        parosszurkeELEMEK[index].style.backgroundColor="lightgrey"
    }
}
function babu(){
    const mezoELEMEK = document.querySelectorAll("#tabla td")
    for (let index = 0; index < mezoELEMEK.length; index++) {
        mezoELEMEK[index].addEventListener("click", function(){
            if (this.querySelector("img")){
                this.innerHTML="";
            }
            else {
                this.innerHTML =`<img src="kep/sakk.jpg" alt="kep">`;
        }})  
    }

}


