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
const formHeading= document.querySelectorAll('.formHeading, .formHeadingLast')
const formUnderline=document.querySelectorAll('.formUnderline')

  const urlParams = new URLSearchParams(window.location.search);
  const greetingValue = urlParams.get('value');
  let currentActive=parseInt(greetingValue)
  console.log(currentActive)

next.addEventListener('click',()=>{
	currentActive++
	 window.location.href=`/Lease1/Lease1.html?value=${currentActive}`
	localStorage.setItem('value',currentActive)
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
	const GSTN= document.querySelectorAll('#btnColor')
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
			  styles=e.currentTarget.innerText
			  console.log(styles)	  
		   })
		})
  


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
		if (e.currentTarget.innerText!==undefined) {
			x.style.display = "block";
		  } else {
			x.style.display = "none";
		  }  
	   })
	})

  // -----------------------------------------------------------------------
