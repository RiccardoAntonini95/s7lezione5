const url = "https://striveschool-api.herokuapp.com/api/product/"
const headerAuth = {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczMTljMGZlMDMxZTAwMTliYTE2NGIiLCJpYXQiOjE3MDIwNDIwNDgsImV4cCI6MTcwMzI1MTY0OH0.Fo8pAQnd-n2q_WrtOM5Rq4qVZCfudbKpJbs5F7BYybg", "Content-Type" : "application/json"}
const applyButton = document.querySelector("#user-modify-object")
let param = new URLSearchParams(document.location.search)
let cardId = param.get("id")
let cardName = param.get("name")
let cardDescription = param.get("description")
let cardBrand = param.get("brand")
let cardUrlImg = param.get("urlImg")
let cardPrice = param.get("price")

document.querySelector("#user-obj-id").value = cardId
document.querySelector("#user-name-mod").value = cardName
document.querySelector("#user-description-mod").value = cardDescription
document.querySelector("#user-brand-mod").value = cardBrand
document.querySelector("#user-imageUrl-mod").value = cardUrlImg
document.querySelector("#user-price-mod").value = cardPrice

applyButton.addEventListener("click", modifyObj)


function modifyObj(){
    let prodName = document.querySelector("#user-name-mod").value
    let prodDescription = document.querySelector("#user-description-mod").value
    let prodBrand = document.querySelector("#user-brand-mod").value
    let prodImg = document.querySelector("#user-imageUrl-mod").value
    let prodPrice = parseFloat(document.querySelector("#user-price-mod").value)
    let prodId = document.querySelector("#user-obj-id").value
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