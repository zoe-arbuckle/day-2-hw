const submitForm = document.querySelector('#submitForm')
const listInfo = document.querySelector('#listInfo')

function deleteItem(e){
  e.target.parentNode.remove()
}

function promote(e){
  e.target.parentNode.style.border = '1px solid darkslateblue'
  e.target.parentNode.style.backgroundColor = 'lightgoldenrodyellow'
  e.target.parentNode.style.color = 'darkviolet'
}

function renderDeleteButton(){
    const delButton = document.createElement('button')
    delButton.textContent = 'X'
    delButton.type = 'button'

    return delButton
}

function renderPromoteButton(){
    const promButton = document.createElement('button')
    promButton.textContent = '+'
    promButton.type = 'button'

    return promButton
}

function renderListItem(value){
    const item = document.createElement('li')
    const del = renderDeleteButton()
    const prom = renderPromoteButton()
    item.innerHTML = `${value}`
    item.appendChild(prom)
    item.appendChild(del)
    listInfo.prepend(item)
    prom.addEventListener('click', promote)
    del.addEventListener('click', deleteItem)
}

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target
  const val = f.animals.value.toUpperCase()
  renderListItem(val)
}

submitForm.addEventListener('submit', handleSubmit)