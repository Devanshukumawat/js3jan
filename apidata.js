// fetch("https://dummyjson.com/products").then((result)=>{
//     return result.json()
// }).then((data)=>{
//     console.log(data)
// })


async function apiData(){
    let result = await fetch("https://dummyjson.com/products")
    let data = await result.json()
    console.log(data)
}

apiData()