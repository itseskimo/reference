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

  // -----------------------------------------------------------------------
  function removeFunction() {
	const element = document.getElementById("removeComponent");
	element.remove();
  }

  // -----------------------------------------------------------------------

    let counter=1
	const tenantPlus = document.getElementById("new-tenant");
	const tenantList = document.querySelector("#addComponent");

	
	tenantPlus.addEventListener('click',()=>{
		const lessGap = document.createElement('div');
		lessGap.classList.add('lessGap');
	
		const addTenant = document.createElement('h6');
		addTenant.classList.add('addTenant');
		addTenant.innerText=`Tenant ${++counter}`
		lessGap.appendChild(addTenant)
	
		const deleteIcon = document.createElement('h6');
		deleteIcon.classList.add('deleteIcon')
		deleteIcon.innerText='Clear'
		lessGap.appendChild(deleteIcon)
	
		tenantList.appendChild(lessGap)
		// ----------------------------------------------------

		const leaseBackground=document.createElement('div');
		leaseBackground.classList.add('leaseBackground');
		tenantList.appendChild(leaseBackground)

		const moreGap=document.createElement('div');
		moreGap.classList.add('more-Gap');
        leaseBackground.appendChild(moreGap)

		const h5 = document.createElement('h5');
		h5.innerText='Personal Details'
		moreGap.appendChild(h5)

		let firstDiv=document.createElement('div');
		firstDiv.classList.add('firstDiv');
        moreGap.appendChild(firstDiv)

		let firstTitle = document.createElement('h6');
		firstTitle.classList.add('firstTitle');
		firstTitle.innerText='First Name*'
		firstDiv.appendChild(firstTitle)

		let inputWidth = document.createElement('input');
		inputWidth.classList.add('inputWidth');
		inputWidth.placeholder='Enter First Name'
		firstDiv.appendChild(inputWidth)

		// ------------------------
		let secondDiv=document.createElement('div');
		secondDiv.classList.add('secondDiv');
        moreGap.appendChild(secondDiv)

		 firstTitle = document.createElement('h6');
		firstTitle.classList.add('firstTitle');
		firstTitle.innerText='Last Name*'
		secondDiv.appendChild(firstTitle)

		 inputWidth = document.createElement('input');
		inputWidth.classList.add('inputWidth');
		inputWidth.placeholder='Enter Last Name'
		secondDiv.appendChild(inputWidth)

		// ------------------------

		const secondrowAbsolute=document.createElement('div');
		secondrowAbsolute.classList.add('secondrowAbsolute');
        moreGap.appendChild(secondrowAbsolute)


		 firstDiv=document.createElement('div');
		 firstDiv.classList.add('firstDiv');
         secondrowAbsolute.appendChild(firstDiv)

	    firstTitle = document.createElement('h6');
		firstTitle.classList.add('firstTitle');
		firstTitle.innerText='Email ID*'
		firstDiv.appendChild(firstTitle)

		 inputWidth = document.createElement('input');
		inputWidth.classList.add('inputWidth');
		inputWidth.placeholder='Enter Email ID'
		firstDiv.appendChild(inputWidth)

		// ------------------------
		 secondDiv=document.createElement('div');
		secondDiv.classList.add('secondDiv');
        secondrowAbsolute.appendChild(secondDiv)

		 firstTitle = document.createElement('h6');
		firstTitle.classList.add('firstTitle');
		firstTitle.innerText='Phone Number*'
		secondDiv.appendChild(firstTitle)

		 inputWidth = document.createElement('input');
		inputWidth.classList.add('inputWidth');
		inputWidth.placeholder='Enter Phone Number' 
		secondDiv.appendChild(inputWidth)
// ------------------------

        const thirdrowAbsolute=document.createElement('div');
        thirdrowAbsolute.classList.add('thirdrowAbsolute');
        moreGap.appendChild(thirdrowAbsolute)


		firstDiv=document.createElement('div');
		firstDiv.classList.add('firstDiv');
		thirdrowAbsolute.appendChild(firstDiv)

	   firstTitle = document.createElement('h6');
	   firstTitle.classList.add('firstTitle');
	   firstTitle.innerText='Marital Status*'
	   firstDiv.appendChild(firstTitle)

	   const selectLength = document.createElement('select');
	   selectLength.classList.add('selectLength');
	   firstDiv.appendChild(selectLength)

	   const option=document.createElement('option');
	   option.innerText='Select'
	   selectLength.appendChild(option)
	})
	
  