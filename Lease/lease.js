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

next.addEventListener('click',()=>{
	currentActive++
	 window.location.href=`/occupants/occupants.html?occupantReplicate=${counter}&value=${currentActive}`
	 //currentActive value is for Navbar
	 //counter value is for the number of components we need to replicate in the next page.
	if(currentActive>circles.length){
		currentActive=circles.length
	}
    
})

prev.addEventListener('click',()=>{
	--currentActive
	window.location.href=`/Lease/lease.html?value=${currentActive}`
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
//Dynamic margin adjusting functionality on clicking button in Company Page
//Dynamically showing all the components on selecting a value in button

  var toggleHide = document.getElementById("LeaseHide");
  var x = document.getElementById("DIV");
  const select= document.querySelectorAll('.option')
  
  select.forEach((id)=>{
	id.addEventListener('click',(e)=>{
		if (e.currentTarget.innerText==='Company') {
			x.style.display = "block";
			initialMargin.style.marginTop='40px'
			toggleHide.style.display = "none";
		  } else {
			x.style.display = "none";
		  }  
		if (e.currentTarget.innerText==='Personal') {
			tenantAccount.style.display = "flex";
			toggleHide.style.display = "block";
			initialMargin.style.marginTop='40px'
		  } else {
			tenantAccount.style.display = "none";
		  }  
	   })
	})

  // -----------------------------------------------------------------------

  // Hiding the number of tenants btns when  the page loads
	var tenantAccount = document.getElementById("tenantAccount");
    tenantAccount.style.display = "none";

  // -----------------------------------------------------------------------

//Hide max no. of components when the page loads.
//Set the margin-top for the underline and buttons as 190 when the page loads.

 window.addEventListener('DOMContentLoaded',()=>{
	var x = document.getElementById("LeaseHide");
	var initialGap = document.getElementById("initialGap");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	  initialGap.style.marginTop='190px'
	}
  }
)

// -----------------------------------------------------------------------
  
//Dynamically showing all the components on selecting Multiple button
//Dynamic margin adjusting functionality on clicking button

  const dynamicBtns= document.querySelectorAll('#tenantCount')
  let tenantPlus = document.getElementById("new-tenant");

  tenantPlus.style.display="none"
  dynamicBtns.forEach((id)=>{
	id.addEventListener('click',(e)=>{
		console.log( e.currentTarget.innerText)
		if (e.currentTarget.innerText==='Multiple') {
			tenantPlus.style.display="block"
			initialGap.style.marginTop='40px'
		  } else {
			tenantPlus.style.display="none"
			initialGap.style.marginTop='190px'
		  }  
	   })
	})

// -----------------------------------------------------------------------


//Dynamic Colour Changing functionality on clicking button

const leaseButtons= document.querySelectorAll('#tenantCount')

leaseButtons.forEach(button=>{
button.addEventListener('click',()=>{
leaseButtons.forEach((btn)=>{
	btn.classList.remove('button-On')
	btn.classList.add('button-Off')
});
button.classList.add('button-On');
})
})

// -----------------------------------------------------------------------

// Deleting Tenant1 on clicking Clear Button

  function removeFunction() {
	const element = document.getElementById("removeComponent");
	element.remove();
  }

// -----------------------------------------------------------------------

//Clear Hidden when the page loads.
  
	var deleteLogo = document.querySelector(".deleteIcon");
	let num=0
	if (num === 0) {
	  deleteLogo.style.display = "none";
	} 
 

// -----------------------------------------------------------------------

// Max 4 Tenants can be generated on Clicking Add another Tenant

    let counter=1;
    let idSetter=0;
    
	//let tenantPlus = document.getElementById("new-tenant");
	const tenantList = document.querySelector("#addComponent");
    
	
	tenantPlus.addEventListener('click',()=>{
    if(counter<4){
		deleteLogo.style.display = "flex";
		const underLine = document.createElement('div');
		underLine.classList.add('row-underLinemid');
		underLine.setAttribute('id', `cancel${++idSetter}`)
		tenantList.appendChild(underLine)
		
		const lessGap = document.createElement('div');
		lessGap.classList.add('lessGap');
		lessGap.setAttribute('id', `cancel${idSetter}`)
		// ----------------------------------------------------

		const addTenant = document.createElement('h6');
		addTenant.classList.add('addTenant');
		addTenant.innerText=`Tenant ${++counter}`
		lessGap.appendChild(addTenant)
	
		const deleteIcon = document.createElement('h6');
		deleteIcon.classList.add('deleteIcon')
		deleteIcon.innerText='Clear'

		deleteIcon.onclick= function removeFunctionDyamic() {
			const deletedElem = document.querySelectorAll('.lessGap');
			--counter
			console.log(deletedElem)
			deletedElem.forEach((del)=>{
				del.addEventListener('click',(e)=>{
					const elem = document.querySelectorAll(`#${e.currentTarget.id}`);
					elem.forEach((ele)=>{ele.remove()})
					console.log(e.currentTarget.id)
				})
			})
		  }


		lessGap.appendChild(deleteIcon)
		tenantList.appendChild(lessGap)
		// ----------------------------------------------------

		const leaseBackground=document.createElement('div');
		leaseBackground.classList.add('leaseBackground');
		leaseBackground.setAttribute('id', `cancel${idSetter}`)
		tenantList.appendChild(leaseBackground)

		const moreGap=document.createElement('div');
		moreGap.classList.add('more-Gap');
        leaseBackground.appendChild(moreGap)

		let h5 = document.createElement('h5');
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

		let secondrowAbsolute=document.createElement('div');
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

	   let option=document.createElement('option');
	   option.innerText='Select'
	   selectLength.appendChild(option)

       // ------------------------
	   
	    const leaseBackground2=document.createElement('div');
		leaseBackground2.classList.add('leaseBackground2');
		leaseBackground2.setAttribute('id', `cancel${idSetter}`)
		tenantList.appendChild(leaseBackground2)
        console.log(underLine,leaseBackground,lessGap,leaseBackground2)

		const rowGap=document.createElement('div');
		rowGap.classList.add('row-Gap');
        leaseBackground2.appendChild(rowGap)

	    h5 = document.createElement('h5');
		h5.innerText='Occupation'
		rowGap.appendChild(h5)

	    firstDiv=document.createElement('div');
		firstDiv.classList.add('firstDiv');
        rowGap.appendChild(firstDiv)

	    firstTitle = document.createElement('h6');
		firstTitle.classList.add('firstTitle');
		firstTitle.innerText='Employment Status *'
		firstDiv.appendChild(firstTitle)

		let selector=document.createElement('div');
		selector.classList.add('selector');
        firstDiv.appendChild(selector)

		let select=document.createElement('div');
		select.classList.add('select');


		 select.onclick= function toggleSelect(params) {
		
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
        }

        selector.appendChild(select)
        

		let selectBtn=document.createElement('div');
		selectBtn.classList.add('selectBtn');
		selectBtn.innerText='Select'
		selectBtn.dataset.type='firstOption'
        select.appendChild(selectBtn)

		let selectDropdown=document.createElement('div');
		selectDropdown.classList.add('selectDropdown');
        select.appendChild(selectDropdown)

		 let optionn=document.createElement('div');
		 optionn.classList.add('option');
		 optionn.innerText='Employed'
		 optionn.dataset.type='firstOption'
         selectDropdown.appendChild(optionn)

		 optionn=document.createElement('div');
		 optionn.classList.add('option');
		 optionn.innerText='Self-Employed'
		 optionn.dataset.type='secondOption'
         selectDropdown.appendChild(optionn)

		 optionn=document.createElement('div');
		 optionn.classList.add('option');
		 optionn.innerText='Student'
		 optionn.dataset.type='thirdOption'
         selectDropdown.appendChild(optionn)

		 optionn=document.createElement('div');
		 optionn.classList.add('option');
		 optionn.innerText='Housewife'
		 optionn.dataset.type='thirdOption'
         selectDropdown.appendChild(optionn)

		 optionn=document.createElement('div');
		 optionn.classList.add('option');
		 optionn.innerText='Retired'
		 optionn.dataset.type='thirdOption'
         selectDropdown.appendChild(optionn)

		 optionn=document.createElement('div');
		 optionn.classList.add('option');
		 optionn.innerText='Other'
		 optionn.dataset.type='thirdOption'
         selectDropdown.appendChild(optionn)


		//  ------------------------------------
		 secondDiv=document.createElement('div');
		 secondDiv.classList.add('secondDiv');
		 rowGap.appendChild(secondDiv)
 
		  firstTitle = document.createElement('h6');
		 firstTitle.classList.add('firstTitle');
		 firstTitle.innerText='LinkedIn*'
		 secondDiv.appendChild(firstTitle)
 
		  inputWidth = document.createElement('input');
		 inputWidth.classList.add('inputWidth');
		 inputWidth.placeholder='Enter URL' 
		 secondDiv.appendChild(inputWidth)
		
		 // ------------------------

	    secondrowAbsolute=document.createElement('div');
		secondrowAbsolute.classList.add('secondrowAbsolute');
        rowGap.appendChild(secondrowAbsolute)


		 firstDiv=document.createElement('div');
		 firstDiv.classList.add('firstDiv');
         secondrowAbsolute.appendChild(firstDiv)

	    firstTitle = document.createElement('h6');
		firstTitle.classList.add('firstTitle');
		firstTitle.innerText='Company Name*'
		firstDiv.appendChild(firstTitle)

		 inputWidth = document.createElement('input');
		inputWidth.classList.add('inputWidth');
		inputWidth.placeholder='Enter Company Name'
		firstDiv.appendChild(inputWidth)



		 secondDiv=document.createElement('div');
		 secondDiv.classList.add('secondDiv');
		 secondrowAbsolute.appendChild(secondDiv)
 
		  firstTitle = document.createElement('h6');
		 firstTitle.classList.add('firstTitle');
		 firstTitle.innerText='Company Type*'
		 secondDiv.appendChild(firstTitle)


	    selector=document.createElement('div');
		selector.classList.add('selector');
        secondDiv.appendChild(selector)

	    select=document.createElement('div');
		select.classList.add('select');

		select.onclick= function toggleSelect(params) {
		
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
        }
        selector.appendChild(select)

	    selectBtn=document.createElement('div');
		selectBtn.classList.add('selectBtn');
		selectBtn.innerText='Enter Company Type'
		selectBtn.dataset.type='firstOption'
        select.appendChild(selectBtn)

	    selectDropdown=document.createElement('div');
		selectDropdown.classList.add('selectDropdown');
        select.appendChild(selectDropdown)

		 optionn=document.createElement('div');
		 optionn.classList.add('option');
		 optionn.innerText='LLP'
		 optionn.dataset.type='firstOption'
         selectDropdown.appendChild(optionn)

		 optionn=document.createElement('div');
		 optionn.classList.add('option');
		 optionn.innerText='Partnership'
		 optionn.dataset.type='secondOption'
         selectDropdown.appendChild(optionn)

		 optionn=document.createElement('div');
		 optionn.classList.add('option');
		 optionn.innerText='Private Limited'
		 optionn.dataset.type='thirdOption'
         selectDropdown.appendChild(optionn)

		 optionn=document.createElement('div');
		 optionn.classList.add('option');
		 optionn.innerText='Sole Proprietorship'
		 optionn.dataset.type='thirdOption'
         selectDropdown.appendChild(optionn)
    }else{
		console.log('Max 4 Tenants Added')
	}
	})
	
  