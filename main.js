const ul_list = document.getElementsByClassName('list__todo')[0];
const form = document.getElementsByTagName('form')[0];
const field = document.getElementsByClassName('input')[0];

function handleRemoveClick(){
this.parentNode.remove();
}

function createListItem(value) {
    const li_list = document.createElement('li');
    li_list.textContent = value;
    li_list.classList.add('list__li');
    const btnX = document.createElement('button');
    li_list.append(btnX);
    btnX.classList.add('btnRemove');
    btnX.textContent = 'X';

    btnX.addEventListener('click', handleRemoveClick)

    return li_list
}

// createListItem('');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = field.value;
    field.value = '';
    const valueItem = createListItem(text)
    ul_list.append(valueItem)
})