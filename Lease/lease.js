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

window.addEventListener('DOMContentLoaded',()=>{

})
const value=parseInt(localStorage.getItem('value'))
var currentActive=value;


next.addEventListener('click',()=>{
	currentActive++
	 window.location.href='/Lease1/Lease1.html'
	localStorage.setItem('value',currentActive)
	if(currentActive>circles.length){
		currentActive=circles.length
	}
    update()
})

prev.addEventListener('click',()=>{
	window.location.href='/Requests/request.html'

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
	})
}

// -----------------------------------------------------------------------
//  const inActiveBtn= document.querySelector('.buttonInactive')
//  const activeBtn= document.querySelector('.buttonInactive')
 



// activeBtn.addEventListener('click',(e)=>{
// 	 let styles=e.currentTarget.innerText
// 	 digit=e.currentTarget.id
// 	 console.log(activeBtn.classList.value)
// 	 btn.classList.add('buttonActive')	
// })
// btn.addEventListener('click',(e)=>{
// 	let styles=e.currentTarget.innerText
// 	 digit=e.currentTarget.id
// 	btn.classList.add('buttonActive')	
// })
const buttons= document.querySelectorAll('.buttonInactive')
 

buttons.forEach(button=>{
button.addEventListener('click',()=>{
buttons.forEach(btn=>btn.classList.remove('buttonActive'));
button.classList.add('buttonActive');
})
})





// -----------------------------------------------------------------------
function myFunction() {
	var x = document.getElementById("myDIV");
	
	var element = document.getElementById("backgroundHeight");
       
	if (x.style.display === "none") {
	  x.style.display = "block";
	  element.style.height = "200px";
	} else {
	  x.style.display = "none";
	  element.style.height = "85px";
	}
  }


  // -----------------------------------------------------------------------


  window.addEventListener('DOMContentLoaded',()=>{
	var x = document.getElementById("DIV");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
)

  // -----------------------------------------------------------------------


  var x = document.getElementById("DIV");
  const select= document.querySelectorAll('.option')
  
  select.forEach((id)=>{
	id.addEventListener('click',(e)=>{
		console.log( e.currentTarget.innerText)
		if (e.currentTarget.innerText!==undefined) {
			x.style.display = "block";
		  } else {
			x.style.display = "none";
		  }
		  styles=e.currentTarget.innerText
		console.log(x)	  
	   })
	})

  // -----------------------------------------------------------------------
