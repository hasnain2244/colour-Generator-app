
let colorName = ("0123456789ABCDEF")



let platlate1 = document.querySelector("#platlate-1")
let platlate2 = document.querySelector("#platlate-2")
let platlate3 = document.querySelector("#platlate-3")
let platlate4 = document.querySelector("#platlate-4")
let platlate5 = document.querySelector("#platlate-5")

let code1 = document.querySelector ("#code-1")
let code2 = document.querySelector ("#code-2")
let code3 = document.querySelector ("#code-3")
let code4 = document.querySelector ("#code-4")
let code5 = document.querySelector ("#code-5")


function generateColor() {
    
    let store1 = "#"
    let store2 = "#"
    let store3 = "#"
    let store4 = "#"
    let store5 = "#"
  


   
    for (let i = 0; i < 6; i++) {
        let generateColor = Math.floor(Math.random() * colorName.length);
        store1 += (colorName[generateColor]);
    }
    if (store1) {
        platlate1.style.backgroundColor = store1
    }
    console.log(store1);
    code1.innerHTML = store1

    for (let i = 0; i < 6; i++) {
        let generateColor = Math.floor(Math.random() * colorName.length);
        store2 += (colorName[generateColor]);
    }
    if (store2) {
        platlate2.style.backgroundColor = store2
    }
    console.log(store2);
    code2.innerHTML = store2
 

    for (let i = 0; i < 6; i++) {
        let generateColor = Math.floor(Math.random() * colorName.length);
        store3 += (colorName[generateColor]);
    }
    if (store3) {
        platlate3.style.backgroundColor = store3
    }
    console.log(store3);
    code3.innerHTML = store3
    
    for (let i = 0; i < 6; i++) {
        let generateColor = Math.floor(Math.random() * colorName.length);
        store4 += (colorName[generateColor]);
    }
    if (store4) {
        platlate4.style.backgroundColor = store4
    }
    code4.innerHTML = store4
    console.log(store4);
    
    for (let i = 0; i < 6; i++) {
        let generateColor = Math.floor(Math.random() * colorName.length);
        store5 += (colorName[generateColor]);
    }
    if (store5) {
        platlate5.style.backgroundColor = store5
    }
    code5.innerHTML = store5
    console.log(store5);
}

    
