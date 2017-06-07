const submitForm = document.querySelector('#submitForm')
const listInfo = document.querySelector('#listInfo')

function deleteItem(){

}

function renderListItem(value){
    const item = document.createElement('li')
    item.innerHTML = `${value}`
    listInfo.appendChild(item) //work out how to prepend
}

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target
  renderListItem(f.animals.value)
}

submitForm.addEventListener('submit', handleSubmit)