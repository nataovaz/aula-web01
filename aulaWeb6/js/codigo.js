function soma(){
    let num1, num2, total;
    num1 = parseFloat(document.getElementById("num1").value)
    num2 = parseFloat(document.getElementById("num2").value)

    total = num1+num2
    document.getElementById("resposta").innerText = "Total: " + total
}