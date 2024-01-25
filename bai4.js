function Sum(){
    var input1 = parseFloat(document.getElementById('input1').value) || 0;
    var input2 = parseFloat(document.getElementById('input2').value) || 0;
    document.getElementById('sum').value = input1 + input2;
}  