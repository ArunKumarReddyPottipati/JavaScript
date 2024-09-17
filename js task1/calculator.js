function addition()
{
    let n1 = eval(document.getElementById("n1").value)
    let n2 = eval(document.getElementById("n2").value)
    let n3=n1+n2
    let res = "Addition of "+n1+" and "+n2+" = "+n3
    document.getElementById("res").innerHTML=res
}
function subtraction()
{
    let n1 = eval(document.getElementById("n1").value)
    let n2 = eval(document.getElementById("n2").value)
    let n3=n1-n2
    let res = "Subtraction of "+n1+" and "+n2+" = "+n3
    document.getElementById("res").innerHTML=res
}
function multiplication()
{
    let n1 = eval(document.getElementById("n1").value)
    let n2 = eval(document.getElementById("n2").value)
    let n3=n1*n2
    let res = "Multiplication of "+n1+" and "+n2+" = "+n3
    document.getElementById("res").innerHTML=res
}
function division()
{
    let n1 = eval(document.getElementById("n1").value)
    let n2 = eval(document.getElementById("n2").value)
    let n3=n1/n2
    let res = "Division of "+n1+" and "+n2+" = "+n3
    document.getElementById("res").innerHTML=res
}
function modularDivision()
{
    let n1 = eval(document.getElementById("n1").value)
    let n2 = eval(document.getElementById("n2").value)
    let n3=n1%n2
    let res = "Modular Division of "+n1+" and "+n2+" = "+n3
    document.getElementById("res").innerHTML=res
}