const addButton = document.querySelector('.addButton');

var inputValue = document.querySelector('.input')

const container = document.querySelector('.container')

class item{
    constructor(itemName){
        this.createDiv(itemName)

    }

createDiv(itemName){
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('item_input');
    input.type = "text";

    

    let editButton = document.createElement('button');
    editButton.classList.add('editButton');

    let removeButton = document.createElement('button');
    removeButton.classList.add('removeButton')


}

}