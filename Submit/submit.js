
const prev= document.getElementById('prev')
const next= document.getElementById('next')
const circles= document.querySelectorAll('.formCircle')


var value=parseInt(sessionStorage.getItem('value'))

currentActive=value

// let currentActive=0

next.addEventListener('click',()=>{
	++currentActive
	 sessionStorage.setItem('value',currentActive)
    //  localStorage.clear()
	 
	if(currentActive>circles.length){
		currentActive=circles.length
	}
    update()
})

prev.addEventListener('click',()=>{
	window.location.href='/occupants/occupants.html'

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

// --------------------------------------------------------------------
