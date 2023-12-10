const url = "https://striveschool-api.herokuapp.com/api/product/"
const headerAuth = {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczMTljMGZlMDMxZTAwMTliYTE2NGIiLCJpYXQiOjE3MDIwNDIwNDgsImV4cCI6MTcwMzI1MTY0OH0.Fo8pAQnd-n2q_WrtOM5Rq4qVZCfudbKpJbs5F7BYybg", "Content-Type" : "application/json"}
let param = new URLSearchParams(document.location.search)
let cardId = param.get("cardId")

fetch(url + cardId, {
    headers: headerAuth
})
.then(response => response.json())
.then(data => {
    console.log(data)
    const productName = data.name
    const productDescription = data.description
    const productBrand = data.brand
    const productPrice = data.price
    const templateDetails = `
    <div class="text-center mb-4">
    <h1 class="display-5">${productName}</h1>
    <ul class="list-group">
        <li class="list-group-item">Description: ${productDescription}</li>
        <li class="list-group-item">Brand: ${productBrand}</li>
        <li class="list-group-item">Price: ${productPrice}&euro;</li>
    </ul>
</div>`
    document.querySelector("#details-container").innerHTML = templateDetails
    
})




