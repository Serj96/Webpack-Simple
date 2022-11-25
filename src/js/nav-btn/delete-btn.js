const removeButton = document.getElementById("remove");

removeButton.addEventListener("click", removeItem);

function removeItem() {
    const list=document.getElementById("list");
    const listItems = list.getElementsByTagName("li");

    const last=listItems[listItems.length-1];
    list.removeChild(last);
}