let product = JSON.parse(localStorage.getItem("data")) || []
document.getElementById("Product").addEventListener("submit", (e)=>{
    e.preventDefault()
    let object ={
        title : document.getElementById("Title").ariaValueMax,
        price : document.getElementById("Price").value,
        imgUrl : document.getElementById("ImgURL").value,
    }
    product.push(object)
    localStorage.setItem("data", JSON.stringify(product))
    document.getElementById("Title").value = ""
    document.getElementById("Price").value = ""
    document.getElementById("ImgURL").value = ""
})

document.querySelector("#data").innerHTML = view(product)
function view(product){
    return product.map((el)=>{
        return `<div>
                <div>
                    <img src= "${el.img}" alt="${el.title}"/>
                </div>
                <div>
                    <p> ${el.title} -- ${el.price}</p>
                </div>
            </div>`
    })
}