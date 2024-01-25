document.getElementById('addButton').addEventListener('click', function() {
    var item = document.getElementById('itemInput').value;
    var itemList = document.getElementById('itemList');
    itemList.innerHTML += '<p>' + item + '</p>';
    document.getElementById('itemInput').value = '';
});  