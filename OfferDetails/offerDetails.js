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


// --------------------------------------------------------------------
const progress= document.getElementById('progress')
const prev= document.getElementById('prev')
const next= document.getElementById('next')
const circles= document.querySelectorAll('.formCircle')
let currentActive=0

next.addEventListener('click',()=>{
	currentActive++
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
		
		if(idx===currentActive){
			 position='activeCircle'
		}
		if(idx<currentActive){
			position='greenCircle'
		}

	
    if(idx<currentActive){
    	circle.classList.add(position)
    }else if(idx===currentActive){
		circle.classList.add(position)
    }else{
		circle.classList.remove(position)
	}
const actives=document.querySelectorAll('.greenCircle')
console.log(actives.length,circles.length)

	})
}