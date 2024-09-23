function pitags() {
    let opost1 = Number(document.getElementById("opost1").value)
    let adj1 = Number(document.getElementById("adj1").value)    
    let hipoten = (opost1**2 + adj1**2) ** 0.5
    let senu = opost1/hipoten
    let coss = adj1/hipoten
    let tang = opost1/adj1

    document.getElementById("pitags").innerHTML 
    ="<br>" + "valor da Hipotenusa = " + hipoten + "<br>" 
    + "valor do Seno = " + senu + "<br>" 
    + "valor do Cosseno = " + coss + "<br>" 
    + "valor do Tangente= " + tang

}







// function triang() {
//     let b2 = Number(document.getElementById("b2").value)
//     let a2 = Number(document.getElementById("a2").value)    
//     let triang = ((b2 * a2) / 2)
//     document.getElementById("triang").innerText = triang
// }

// function Losang() {
//     let dm1 = Number(document.getElementById("dm1").value)
//     let dm2 = Number(document.getElementById("dm2").value)    
//     let Losang = ((dm1 * dm2) / 2)
//     document.getElementById("Losang").innerText = Losang
// }

// function pitags() {
//     let opost1 = Number(document.getElementById("opost1").value)
//     let adj1 = Number(document.getElementById("adj1").value)    
//     let hipoten = (opost1**2 + adj1**2) ** 0.5
//     document.getElementById("pitags").innerText = hipoten
// }