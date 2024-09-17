function calculation()
{
    let a = eval(document.getElementById("a").value)
    let b = eval(document.getElementById("b").value)
    let c = (a*a)+(2*a*b)+(b*b)
    document.getElementById("res").innerHTML=c
}