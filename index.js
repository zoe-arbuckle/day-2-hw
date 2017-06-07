const submitForm = document.querySelector('#submitForm')
const listInfo = document.querySelector('#listInfo')

function deleteItem(e){
  console.log('delete')
}

function promote(e){

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