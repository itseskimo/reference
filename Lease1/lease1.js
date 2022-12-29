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

//---------------------------------------------------------------------

const prev= document.getElementById('prev')
const next= document.getElementById('next')
const circles= document.querySelectorAll('.formCircle')
// const {currentActive} = require('../OfferDetails/offerDetails');
// window.addEventListener('DOMContentLoaded',()=>{

// })

 let value=parseInt(localStorage.getItem('value'))
 currentActive=value


next.addEventListener('click',()=>{
	window.location.href='/occupants/occupants.html'

	 currentActive++
	 localStorage.setItem('value',currentActive)
	if(currentActive>circles.length){
		currentActive=circles.length
	}
    update()
})

prev.addEventListener('click',()=>{
	window.location.href='/Lease/lease.html'

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


 window.addEventListener('DOMContentLoaded',()=>{
	var x = document.getElementById("LeaseHide");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
)

  // -----------------------------------------------------------------------
  
  var toggleHide = document.getElementById("LeaseHide");
  const dynamicBtns= document.querySelectorAll('.button-Off')
  
  dynamicBtns.forEach((id)=>{
	id.addEventListener('click',(e)=>{
		console.log( e.currentTarget.innerText)
		if (e.currentTarget.innerText==='Multiple') {
			toggleHide.style.display = "block";
		  } else {
			toggleHide.style.display = "none";
		  }  
	   })
	})


  // -----------------------------------------------------------------------


const leaseButtons= document.querySelectorAll('.button-Off')
 

leaseButtons.forEach(button=>{
button.addEventListener('click',()=>{
leaseButtons.forEach(btn=>btn.classList.remove('button-On'));
button.classList.add('button-On');
})
})