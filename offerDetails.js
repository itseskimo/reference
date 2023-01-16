//Dynamic Dropdown functionality

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
//Dynamic Navbar functionality

const prev= document.getElementById('prev')
const next= document.getElementById('next')
const circles= document.querySelectorAll('.formCircle')
const formHeading= document.querySelectorAll('.formHeading, .formHeadingLast')
const formUnderline=document.querySelectorAll('.formUnderline')
let currentActive=0

next.addEventListener('click',()=>{
	++currentActive
    window.location.href=`/Requests/request.html?value=${currentActive}`
	
	if(currentActive>circles.length){
		currentActive=circles.length
	}
})

prev.addEventListener('click',()=>{
	currentActive--
	if(currentActive < 0){
		currentActive = 0
	}
})

window.addEventListener('DOMContentLoaded',()=>{
	update()
	titleUpdate()
	underlineUpdate()
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
	})
}

function titleUpdate(){
	formHeading.forEach((title,idx)=>{
     if(idx===currentActive){
		title.classList.add('activeWord')
    }else{
		title.classList.remove('activeWord')
	}
	})
}

function underlineUpdate(){
	formUnderline.forEach((line,idx)=>{
     if(idx===currentActive){
		line.classList.add('active')
    }else{
		line.classList.remove('active')
	}
	})
}
// --------------------------------------------------------------------


const inputAmountCalculator= document.getElementById('inputAmountCalculator')
const inputAmountSetter= document.getElementById('inputAmountSetter')

inputAmountCalculator.addEventListener('input',()=>{
inputAmountSetter.value= `₹${inputAmountCalculator.value}` 
})

// --------------------------------------------------------------------

const secondCalculator= document.querySelector('.secondDiv-Calculator')
secondCalculator.style.display='none'

// // --------------------------------------------------------------------

const hideBoxes= document.querySelectorAll('.option')
const firstCalculator= document.getElementById('firstDiv-Calculator')

const rentCalculatorTitle= document.getElementById('rentCalculator-title')
const rentCalculatorFade= document.getElementById('rentCalculator-fade')
const rentCalculatorInputLength= document.getElementById('rentCalculator-inputLength')

let output;
  hideBoxes.forEach((id)=>{
	id.addEventListener('click',(e)=>{
		if( firstCalculator.style.display ==='none'){
			//firstCalculator.style.display='block'
			//secondCalculator.style.display='none'

		}else{
			firstCalculator.style.display='none'
			secondCalculator.style.display='block'
		}
		output=`${e.currentTarget.innerText[0]} ${e.currentTarget.innerText[7]}`

		yeartoMonths()
	   })
	})

// --------------------------------------------------------------------

    function yeartoMonths(){
    let ans1;
	let time2;
	
	if(output.includes('6')){

		ans1=parseInt(output) *12 +  parseInt(output[2])
		rentCalculatorTitle.textContent=`${ Math.floor(ans1/12)}`
		rentCalculatorFade.textContent=`Month (${ans1-6}-${ans1+6})`

		//console.log( parseInt(output) *12 +  parseInt(output[2]) )

	}else{
		time2=parseInt(output) *12 ;
		console.log(time2)
		rentCalculatorTitle.textContent=`${parseInt(output) *12/12}`
		rentCalculatorFade.textContent=`Month (${time2-6}-${time2})`

		//console.log( parseInt(output) *12 )
	}
		
	}


	inputAmountCalculator.addEventListener('input',()=>{
		rentCalculatorInputLength.value= `${parseInt(inputAmountCalculator.value) +10000}` 
		})



			
  



