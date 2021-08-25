const ul_list = document.getElementsByClassName('list__todo')[0];
const form = document.getElementsByTagName('form')[0];
const field = document.getElementsByClassName('input')[0];

let todos;

function saveItem() {
    todos = ul_list.innerHTML;
    localStorage.setItem('todos', todos);
}

function handleRemoveClick() {
    this.parentNode.remove();
    saveItem();
}

function createListItem(value) {
    const li_list = document.createElement('li');
    li_list.textContent = value;
    li_list.classList.add('list__li');

    const btnX = document.createElement('button');
    li_list.append(btnX);
    btnX.classList.add('btnRemove');
    btnX.textContent = 'X';

    const editor = document.createElement('button');
    li_list.append(editor);
    editor.classList.add('btnEditor');
    editor.textContent = '🖊';
    
    btnX.addEventListener('click', handleRemoveClick)

    saveItem();
    return li_list;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = field.value;
    field.value = '';
    const valueItem = createListItem(text)
    ul_list.append(valueItem)
    saveItem();
})

if (localStorage.getItem('todos')) {
    ul_list.innerHTML = localStorage.getItem('todos');
  
    for (let index = 0; index < ul_list.children.length; index++) {
        const element = ul_list.children[index];
        element.getElementsByClassName('btnRemove')[0].addEventListener('click', handleRemoveClick)
    }
}