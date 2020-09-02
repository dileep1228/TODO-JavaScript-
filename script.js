const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let itemCount = 0
let uncheckedCount = 0

function updateItemCount(diff) {
  itemCount += diff
  itemCountSpan.innerHTML = itemCount
}

function updateUncheckedCount(diff) {
  uncheckedCount += diff
  uncheckedCountSpan.innerHTML = uncheckedCount
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const contentText = prompt('enter TODO')
  if(contentText){
    const todo = createTodo(contentText)
    list.appendChild(todo)
    updateItemCount(1)
    updateUncheckedCount(1)
  }
}

function createTodo(contentText){

  const deletebutton = document.createAttribute('button')
  deletebutton.innerHTML = 'X'
  deletebutton.className = classNames.TODO_DELETE
  deletebutton.onclick = removeTodo 

  const checkbox = document.createAttribute('input')
  checkbox.className = classNames.TODO_CHECKBOX
  checkbox.type = 'checkbox'
  checkbox.onchange = checkboxListener

  const span = document.createAttribute('span')
  span.className = classNames.TODO_TEXT
  span.textContent = contentText
  span.contentEditable = true

  const li = document.createAttribute('li')
  li.className = classNames.TODO_ITEM
  li.appendChild(deleteButton)
  li.appendChild(checkbox)
  li.appendChild(span)


  return li
}

function checkboxListener(){
  if(this.checked){
    updateUncheckedCount(-1)
  }
  else{
    updateUncheckedCount(1)
  }
}

function removeTodo(){
  const todo = this.parentNode
  updateItemCount(-1)
  if (!todo.children[1].checked) { 
    updateUncheckedCount(-1) 
  }
  list.removeChild(todo) 
}