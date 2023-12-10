const url = "https://striveschool-api.herokuapp.com/api/product/"
const headerAuth = {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczMTljMGZlMDMxZTAwMTliYTE2NGIiLCJpYXQiOjE3MDIwNDIwNDgsImV4cCI6MTcwMzI1MTY0OH0.Fo8pAQnd-n2q_WrtOM5Rq4qVZCfudbKpJbs5F7BYybg", "Content-Type" : "application/json"}
const showModify = document.querySelector("#show-modify") 
const showNew = document.querySelector("#show-new") 
const buttonModify = document.querySelector("#modify-object") 
const buttonDelete = document.querySelector("#delete-object") 
const buttonSubmit = document.querySelector("#create-obj-btn") 
const formModify = document.querySelector("#modify-container")
const formCreate = document.querySelector("#create-container")
const resetButton = document.querySelector(".reset-button")

resetButton.addEventListener("click", confirmReset)

//FUNCTIONS
function confirmReset(){
  let conferma = confirm("Sei sicuro di voler continuare?")

  if(conferma){
    alert("Reset confermato")
  } else {
    alert("reset annullato")
  }
}


function toggleModify(){
  if(formModify.style.display === "none"){
    formModify.style.display = "block"
  } else {
    formModify.style.display = "none"
  }
}

function toggleCreate(){
  if(formCreate.style.display === "none"){
    formCreate.style.display = "block"
  } else {
    formCreate.style.display = "none"
  }
}


function createObject() {
    let prodName = document.querySelector("#name-input").value
    let prodDescription = document.querySelector("#description-input").value
    let prodBrand = document.querySelector("#brand-input").value
    let prodImg = document.querySelector("#imageUrl-input").value
    let prodPrice = parseFloat(document.querySelector("#price-input").value)
  if(prodName && prodDescription && prodBrand && prodImg && prodPrice){
    let formObj = {
      name: prodName,
      description: prodDescription,
      brand: prodBrand,
      imageUrl: prodImg,
      price: prodPrice
    } 
    console.log(formObj)
    fetch(url,{
      method: "POST",
      headers: headerAuth,
      body: JSON.stringify(formObj)
    })
    .then(response => response.json())
    .then(data => console.log(data))
  } else alert("Tutti i campi sono obbligatori per creare un nuovo oggetto")

}

function modifyObj(){
  let prodName = document.querySelector("#name-mod").value
  let prodDescription = document.querySelector("#description-mod").value
  let prodBrand = document.querySelector("#brand-mod").value
  let prodImg = document.querySelector("#imageUrl-mod").value
  let prodPrice = parseFloat(document.querySelector("#price-mod").value)
  let prodId = document.querySelector("#obj-id").value
  if(prodName && prodDescription && prodBrand && prodImg && prodPrice && prodId){

  let objModified = {
    name: prodName,
    description: prodDescription,
    brand: prodBrand,
    imageUrl: prodImg,
    price: prodPrice
  }
  console.log(objModified)
  console.log(prodId)
  fetch(url+prodId, {
    method: "PUT",
    headers: headerAuth,
    body: JSON.stringify(objModified)
  })
} else alert("Compila tutti i campi per procedere")
}

function deleteObj(){
  let prodId = document.querySelector("#obj-id").value
  let conferma = confirm("Vuoi davvero cancellare questo elemento?")
  if(conferma){
  if(prodId){
  console.log(prodId) 
  fetch(url+prodId,{
    method: "DELETE",
    headers: headerAuth
  })
  } else alert("L'id del prodotto è necessario per l'eliminazione")
}
}

//BUTTONS EVENT
showModify.addEventListener("click", toggleModify)
showNew.addEventListener("click", toggleCreate)
buttonModify.addEventListener("click", modifyObj)
buttonDelete.addEventListener("click", deleteObj)
buttonSubmit.addEventListener("click", createObject)