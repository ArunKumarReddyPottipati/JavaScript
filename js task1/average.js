function average()
{
    let s1 = eval(document.getElementById("s1").value)
    let s2 = eval(document.getElementById("s2").value)
    let s3 = eval(document.getElementById("s3").value)
    let s4 = eval(document.getElementById("s4").value)
    let s5 = eval(document.getElementById("s5").value)
    let s6 = eval(document.getElementById("s6").value)
    let avg = (s1+s2+s3+s4+s5+s6)/6
    let res = "Average = "+avg
    document.getElementById("res").innerHTML=res
}