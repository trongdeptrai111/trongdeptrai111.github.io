var cho = document.querySelector(".cho")
var dcho = document.querySelector(".dcho")
var bm = document.querySelector(".bm")
var h4t = document.querySelector(".h4-text")
console.log(cho, dcho)

function randomNumberY(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomNumberX(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var tmp = 1;
var temp = 2;
var dau = 0;
dcho.addEventListener('click', () => {
    if(tmp === 4){
        bm.style.display = "inherit"
    }
    if(tmp === 5){
        dcho.style.display = "none"
        h4t.textContent = "SUC VAT"

    }
    if(temp >= 5){
        temp = 5;
    }
    if(dau%2 === 0){
        dau = 1;
    }
    else{
        dau = -1;
    }
    dcho.style.transform = "translate(" + randomNumberX(50,100)*tmp*dau + "px" + ", " + randomNumberY(40,100)*tmp*dau + "px)"
    cho.style.transform = "scale(" + temp/2 + ")"
    console.log(tmp)
    tmp +=1;
    temp +=1;
});
cho.addEventListener('click', () => {
    h4t.textContent = "Cảm ơn bạn nhé hehe!"
})