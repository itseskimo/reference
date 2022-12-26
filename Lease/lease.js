let index = 1;

const on = (listener, query, fn) => {
	document.querySelectorAll(query).forEach(item => {
		item.addEventListener(listener, el => {
			fn(el);
		})
	})
}

on('click', '.selectBtn', item => {
	const next = item.target.nextElementSibling;
	next.classList.toggle('toggle');
	next.style.zIndex = index++;
});
on('click', '.option', item => {
	item.target.parentElement.classList.remove('toggle');

	const parent = item.target.closest('.select').children[0];
	parent.setAttribute('data-type', item.target.getAttribute('data-type'));
	parent.innerText = item.target.innerText;
})
// -----------------------------------------------------------------------
const prev= document.getElementById('prev')
const next= document.getElementById('next')
const circles= document.querySelectorAll('.formCircle')

document.addEventListener('DOMContentLoaded',()=>{
	
})

let value=parseInt(localStorage.getItem('value'))
var currentActive=value

console.log(currentActive)

next.addEventListener('click',()=>{
	currentActive++
	// window.location.href='/Lease1/Lease1.html'
	localStorage.setItem('value',currentActive)
	if(currentActive>circles.length){
		currentActive=circles.length
	}
    update()
})

prev.addEventListener('click',()=>{
	currentActive--
	if(currentActive < 0){
		currentActive = 0
	}
	update()
})

function update(){
	circles.forEach((circle,idx)=>{
	
    if(idx<currentActive){
    	circle.classList.add('greenCircle')
		circle.classList.remove('activeCircle')
    }else if(idx===currentActive){
		circle.classList.add('activeCircle')
		circle.classList.remove('greenCircle')
    }else{
		circle.classList.remove('activeCircle')
	}
// const actives=document.querySelectorAll('.greenCircle')
// console.log(currentActive,actives.length,circles.length)
	})
}