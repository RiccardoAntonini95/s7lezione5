const url = "https://striveschool-api.herokuapp.com/api/product/"
const headerAuth = {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczMTljMGZlMDMxZTAwMTliYTE2NGIiLCJpYXQiOjE3MDIwNDIwNDgsImV4cCI6MTcwMzI1MTY0OH0.Fo8pAQnd-n2q_WrtOM5Rq4qVZCfudbKpJbs5F7BYybg", "Content-Type" : "application/json"}


fetch(url, {
    headers: headerAuth
})
.then(response => response.json())
.then(data => {
        console.log(data)
        data.forEach(product => { 
            const productName = product.name
            const productDescription = product.description
            const productBrand = product.brand
            const productImage = product.imageUrl
            const productPrice = product.price
            const productId = product._id
            const templateCard = `
            <div class="col-4">
            <div class="card">
                <img src="${productImage}" class="card-img-top" alt="card-img">
                <div class="card-body">
                  <h5 class="card-title">${productName}</h5>
                  <a href="./detailsPage.html?cardId=${productId}" class="btn btn-primary">Scopri di più</a> 
                  <a href="./formPrecompilato.html?name=${productName}&description=${productDescription}&brand=${productBrand}&urlImg=${productImage}&price=${productPrice}&id=${productId}" class="btn btn-warning">Modifica</a>
                </div>
              </div>
        </div>` 
            document.querySelector("#card-container").innerHTML += templateCard
        })
    })
.catch(error => console.log(error))







