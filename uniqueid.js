function uniqueId(length){
    let charectar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"

    let randomId = ""

    for(let i = 0; i<length; i++){
        let myId = Math.floor(Math.random()*charecter.length)
        randomId += charecter.charAt(myId)
    }

    return randomId

}

let id = uniqueId(10)
console.log(id)

