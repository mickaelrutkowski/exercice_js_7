
function exo7(){
var Pointure = document.getElementById('Pointure').value;
var naissance = document.getElementById('naissance').value;
if(isNaN(Pointure) && isNaN(naissance)){
  alert('entrer des valeurs valides');
}
else{
var calcule = (Pointure) * 2;
calcule += 5;
calcule *= 50;
calcule -= (naissance);
calcule += 1768;
alert(calcule);
}
}
