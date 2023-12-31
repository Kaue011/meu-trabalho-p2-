document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearform;

function tempConvert(){
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

    if(isNaN(fahrenheit) || isNaN(celsius)){
        alert("Digite um valor valido!");
        return
    }else if(fahrenheit === ''){
        fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    }else if(celsius === ''){
        celsius = (parseFloat(fahrenheit) - 32) * 5/9;
    }

    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById("celsius").value = parseFloat(celsius).toFixed(1);
}

function clearform(){
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
}