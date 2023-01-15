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
// -----------------------------------------------------------------------

//Dynamic Navbar functionality

const prev= document.getElementById('prev')
const next= document.getElementById('next')
const circles= document.querySelectorAll('.formCircle')
const formHeading= document.querySelectorAll('.formHeading, .formHeadingLast')
const formUnderline=document.querySelectorAll('.formUnderline')

  const urlParams = new URLSearchParams(window.location.search);
  const greetingValue = urlParams.get('value');
  let currentActive=parseInt(greetingValue)
  console.log(currentActive)

next.addEventListener('click',()=>{
	currentActive++

	window.location.href=`/Lease1/Lease1.html?value=${currentActive}`
	if(currentActive>circles.length){
		currentActive=circles.length
	}
    update()
})

prev.addEventListener('click',()=>{
	--currentActive
	window.location.href=`/Requests/request.html?value=${currentActive}`

	if(currentActive < 0){
		currentActive = 0
	}
	update()
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

// -----------------------------------------------------------------------
//Dynamic Colour Changing functionality on clicking button

const buttons= document.querySelectorAll('#btnColor')

buttons.forEach(button=>{
button.addEventListener('click',()=>{
buttons.forEach((btn)=>{
	btn.classList.remove('buttonActive')
	btn.classList.add('buttonInactive')
});
button.classList.add('buttonActive');
})
})


// -----------------------------------------------------------------------

//Dynamic GSTN Number width toggling functionality on clicking button
//Dynamic Enter GST Number width Hide functionality on clicking button

	const GSTN = document.querySelectorAll('#btnColor')
	var GSTNWrapper = document.getElementById("myDIV");
	var element = document.getElementById("backgroundHeight");

    GSTN.forEach((item)=>{
		item.addEventListener('click',(e)=>{
			if (e.currentTarget.innerText==='Yes') {
				GSTNWrapper.style.display = "block";
	            element.style.height = "200px";
			  } else{
				GSTNWrapper.style.display = "none";
				element.style.height = "100px";
			  }	  
		   })
		})
  


  // -----------------------------------------------------------------------
//Hide max no. of components when the page loads.
//Set the margin-top for the underline and buttons as 280 when the page loads.

  window.addEventListener('DOMContentLoaded',()=>{
	var x = document.getElementById("DIV");
	let initialMargin=document.getElementById("initialMargin");

	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	  initialMargin.style.marginTop='280px'
	}
  }
)

  // -----------------------------------------------------------------------
//Dynamic margin adjusting functionality on clicking button
//Dynamically showing all the components on selecting a value in button


  var x = document.getElementById("DIV");
  const select= document.querySelectorAll('.option')
  
  select.forEach((id)=>{
	id.addEventListener('click',(e)=>{
		if (e.currentTarget.innerText!==undefined) {
			x.style.display = "block";
			initialMargin.style.marginTop='40px'
		  } else {
			x.style.display = "none";
		  }  
	   })
	})

  // -----------------------------------------------------------------------
