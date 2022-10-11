

let main=()=>{
    let val = document.getElementById('val').value
    let op = document.getElementById('op').value
    let result = document.getElementById('result')
    let ic = document.getElementById('ic')

    let re

    let FtoC=(chr)=>{
        let c = Math.round((chr-32)*5/9)
        if(c <= 10){
            result.innerHTML=(`<span>&#129398;</span> Result = ${c}°celsius <span>&#129398;</span>`) 
            ic.src = "./img/images.jfif.png"
        }else if(c >= 40){
            result.innerHTML =(`<span>&#129397;</span> Result = ${c}°celsius <span>&#129397;</span>`) 
            ic.src = "./img/hot.png"
        }else{
            result.innerHTML=(`<span>&#128519;</span> Result = ${c}°celsius <span>&#128519;</span>`)
            ic.src = "./img/normal.png"
        }
    }

    let CtoF=(fhr)=>{
        let f = Math.round((fhr*9/5)+32)
        if(f <= 50){
            result.innerHTML=(`<span>&#129398;</span> Result = ${f}°fahrenheit <span>&#129398;</span>`) 
            ic.src = "./img/images.jfif.png"
        }else if(f >= 104){
            result.innerHTML =(`<span>&#129397;</span> Result = ${f}°fahrenheit <span>&#129397;</span>`) 
            ic.src = "./img/hot.png"
        }else{
            result.innerHTML=(`<span>&#128519;</span> Result = ${f}°fahrenheit <span>&#128519;</span>`)
            ic.src = "./img/normal.png"
        }
    }

    if(op=="celsius"){
        re = FtoC(val)
        return re
    }else{
        re= CtoF(val)
        return re
    }
}