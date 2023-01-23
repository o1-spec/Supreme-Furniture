const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

const link = [...document.querySelectorAll('#nav-link')]

link.forEach(function(link){
    link.addEventListener('click',function(e){
        menu.classList.add('hidden')
        btn.classList.remove('open')
    })
})

const btnLeft1 = document.getElementById('btn-left1');
const btnRight1 = document.getElementById('btn-right1');
const btnLeft2 = document.getElementById('btn-left2');
const btnRight2 = document.getElementById('btn-right2');
const btnLeft3 = document.getElementById('btn-left3');
const btnRight3 = document.getElementById('btn-right3');
const btnLeft4 = document.getElementById('btn-left4');
const btnRight4 = document.getElementById('btn-right4');
const btnLeft5 = document.getElementById('btn-left5');
const btnRight5 = document.getElementById('btn-right5');

//FIRST BUTTONS
btnRight1.addEventListener('click',function(){
    let item = document.getElementById('item-1')
    item.style.display = 'none'
    let item2 = document.getElementById('item-2')
    item2.style.display = 'flex'
})
btnLeft1.addEventListener('click',function(){
    let item = document.getElementById('item-1')
    item.style.display = 'none'
    let item2 = document.getElementById('item-5')
    item2.style.display = 'flex'
})

//SECOND BUTTONS
btnLeft2.addEventListener('click',function(){
    let item = document.getElementById('item-2')
    item.style.display = 'none'
    let item2 = document.getElementById('item-1')
    item2.style.display = 'flex'
})
btnRight2.addEventListener('click',function(){
    let item = document.getElementById('item-2')
    item.style.display = 'none'
    let item2 = document.getElementById('item-3')
    item2.style.display = 'flex'
})

//THIRD BUTTONS
btnLeft3.addEventListener('click',function(){
    let item = document.getElementById('item-3')
    item.style.display = 'none'
    let item2 = document.getElementById('item-2')
    item2.style.display = 'flex'
})
btnRight3.addEventListener('click',function(){
    let item = document.getElementById('item-3')
    item.style.display = 'none'
    let item2 = document.getElementById('item-4')
    item2.style.display = 'flex'
})

//FOURTH BUTTONS
btnLeft4.addEventListener('click',function(){
    let item = document.getElementById('item-4')
    item.style.display = 'none'
    let item2 = document.getElementById('item-3')
    item2.style.display = 'flex'
})
btnRight4.addEventListener('click',function(){
    let item = document.getElementById('item-4')
    item.style.display = 'none'
    let item2 = document.getElementById('item-5')
    item2.style.display = 'flex'
})

//FIFTH BUTTONS
btnLeft5.addEventListener('click',function(){
    let item = document.getElementById('item-5')
    item.style.display = 'none'
    let item2 = document.getElementById('item-4')
    item2.style.display = 'flex'
})
btnRight5.addEventListener('click',function(){
    let item = document.getElementById('item-5')
    item.style.display = 'none'
    let item2 = document.getElementById('item-1')
    item2.style.display = 'flex'
})
