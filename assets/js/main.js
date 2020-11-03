
document.getElementById('clickButton').onclick=showAlert;
function showAlert(){
    var shoeSize = document.getElementById('shoeSize').value;
    var birth = document.getElementById('birth').value;
    var u = shoeSize * 2;
    var v = u + 5;
    var w = v * 50;
    var x = w - birth;
    var result = x + 1769;
alert(result);
}
