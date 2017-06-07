const submitForm = document.querySelector('#submitForm')
const listInfo = document.querySelector('#listInfo')

function deleteItem(e){
    e.preventDefault()
    $(this).parent.remove()
}

function renderDeleteButton(){
    const delButton = document.createElement('button')
    delButton.textContent = 'X'

    return delButton.outerHTML
}

function renderPromoteButton(){
    const promote = document.createElement('button')
    promote.textContent = '+'

    return promote.outerHTML
}

function renderListItem(value){
    const item = document.createElement('li')
    const del = renderDeleteButton()
    const promote = renderPromoteButton()
    item.innerHTML = `${value}    ${promote} ${del}`
    listInfo.prepend(item)
}

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target
  const val = f.animals.value.toUpperCase()
  renderListItem(val)
}

submitForm.addEventListener('submit', handleSubmit)