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

const prev= document.getElementById('prev')
const next= document.getElementById('next')
const circles= document.querySelectorAll('.formCircle')
const formHeading= document.querySelectorAll('.formHeading, .formHeadingLast')
const formUnderline=document.querySelectorAll('.formUnderline')

  const urlParam = new URLSearchParams(window.location.search);
  const greetingVal = urlParam.get('value');
  let currentActive=parseInt(greetingVal)
  console.log(currentActive)

 

    next.addEventListener('click',()=>{
	++currentActive
     window.location.href='/OccupantAdded/OccupantAdded.html'
	 
	if(currentActive>circles.length){
		currentActive=circles.length
	}
    update()
	titleUpdate()
	underlineUpdate()
})

    prev.addEventListener('click',()=>{
	window.location.href='/Lease1/Lease1.html'

	currentActive--
	if(currentActive < 0){
		currentActive = 0
	}
	update()
	titleUpdate()
	underlineUpdate()
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
  const urlParams = new URLSearchParams(window.location.search);
  const greetingValue = urlParams.get('occupantReplicate');
  let occupantNTimes=parseInt(greetingValue)
    
    const occupantPlus = document.getElementById("new-occupant");
	const occupantList = document.querySelector("#occupantDynamic");
    let occupantCount=1


  occupantPlus.addEventListener('click',()=>{
	if(occupantNTimes < 4){
		++occupantNTimes
		const subTitle = document.createElement('div');
		subTitle.classList.add('subTitle')
		occupantList.appendChild(subTitle)
	
		let h4=document.createElement('h4');
		h4.innerText=`OCCUPANT ${++occupantCount}`
		subTitle.appendChild(h4)
	
		let alignCheckbox=document.createElement('div');
		alignCheckbox.classList.add('alignCheckbox')
		subTitle.appendChild(alignCheckbox)
	
		let checkbox=document.createElement('input');
		checkbox.type='checkbox'
		checkbox.classList.add('checkDynamic')
		checkbox.setAttribute('checked', 'checked');
		checkbox.setAttribute('id',`checkbox${occupantCount}`)

		checkbox.onclick=function checkboxDynamic(){
			const checkbox= document.querySelectorAll('.checkDynamic');

			checkbox.forEach((chk)=>{
            chk.addEventListener('click',(e)=>{

				const occupantBackground =  document.getElementById(`firstOccupantBackground${e.currentTarget.id[8]}`);
				var FourthrowAbsolute = document.getElementById(`fourthrowAbsolute${e.currentTarget.id[8]}`);

					if (FourthrowAbsolute.style.display==='none') {
						FourthrowAbsolute.style.display = "block";
						occupantBackground.style.height = "500px";
					  } else{
						FourthrowAbsolute.style.display = "none";
						occupantBackground.style.height = "330px";
					  }	  
				   })
			})
				
		}

		alignCheckbox.appendChild(checkbox)
	
		let h6=document.createElement('h6');
		h6.innerText='This occupant is signing the contract'
		alignCheckbox.appendChild(h6)
	
		// ------------------------------------------------------
		const firstoccupantBackground = document.createElement('div');
		firstoccupantBackground.classList.add('first-occupantBackground')
		firstoccupantBackground.setAttribute('id',`firstOccupantBackground${occupantCount}`)
		occupantList.appendChild(firstoccupantBackground)

		let moreGap=document.createElement('div');
		moreGap.classList.add('more-Gap')
		firstoccupantBackground.appendChild(moreGap)
	
		let h5=document.createElement('h5');
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
			inputWidth.placeholder='Enter Name'
			firstDiv.appendChild(inputWidth)
	
		// ------------------------------------------------------
	
	
			let secondDiv=document.createElement('div');
			secondDiv.classList.add('secondDiv');
			moreGap.appendChild(secondDiv)
	
			firstTitle = document.createElement('h6');
			firstTitle.classList.add('firstTitle');
			firstTitle.innerText='Date of Birth*'
			secondDiv.appendChild(firstTitle)
	
	
			let occupantDate = document.createElement('select');
			occupantDate.classList.add('occupantDate');
			firstTitle.innerText='Date of Birth*'
			secondDiv.appendChild(occupantDate)
	
			let option = document.createElement('option');
			option.innerText='DD'
			occupantDate.appendChild(option)
	
			let occupantMonth= document.createElement('select');
			occupantMonth.classList.add('occupantMonth');
			secondDiv.appendChild(occupantMonth)
	
			option = document.createElement('option');
			option.innerText='MM'
			occupantMonth.appendChild(option)
	
			let occupantYear= document.createElement('select');
			occupantYear.classList.add('occupantYear');
			secondDiv.appendChild(occupantYear)
	
			option = document.createElement('option');
			option.innerText='YY'
			occupantYear.appendChild(option)
			
			// ----------------------------------------
			let secondrowAbsolute=document.createElement('div');
			secondrowAbsolute.classList.add('secondrowAbsolute');
			moreGap.appendChild(secondrowAbsolute)
	
	
			 firstDiv=document.createElement('div');
			 firstDiv.classList.add('firstDiv');
			 secondrowAbsolute.appendChild(firstDiv)
	
			firstTitle = document.createElement('h6');
			firstTitle.classList.add('firstTitle');
			firstTitle.innerText='Relationship with Tenant*'
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
			 optionn.innerText='Self'
			 optionn.dataset.type='firstOption'
			 selectDropdown.appendChild(optionn)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Parent'
			 optionn.dataset.type='secondOption'
			 selectDropdown.appendChild(optionn)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Child'
			 optionn.dataset.type='thirdOption'
			 selectDropdown.appendChild(optionn)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Sibling'
			 optionn.dataset.type='thirdOption'
			 selectDropdown.appendChild(optionn)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Spouse'
			 optionn.dataset.type='thirdOption'
			 selectDropdown.appendChild(optionn)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Live-In House Help'
			 optionn.dataset.type='thirdOption'
			 selectDropdown.appendChild(optionn)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Employee'
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
			secondrowAbsolute.appendChild(secondDiv)
	
			firstTitle = document.createElement('h6');
			firstTitle.classList.add('firstTitle');
			firstTitle.innerText='Staying or Visiting*'
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
			selectBtn.innerText='Select'
			selectBtn.dataset.type='firstOption'
			select.appendChild(selectBtn)
	
			selectDropdown=document.createElement('div');
			selectDropdown.classList.add('selectDropdown');
			select.appendChild(selectDropdown)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Staying'
			 optionn.dataset.type='firstOption'
			 selectDropdown.appendChild(optionn)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Visiting'
			 optionn.dataset.type='secondOption'
			 selectDropdown.appendChild(optionn)
	
			// -------------------------------------------
			 const thirdrowAbsolute=document.createElement('div');
			thirdrowAbsolute.classList.add('thirdrowAbsolute');
			moreGap.appendChild(thirdrowAbsolute)
	
	
			firstDiv=document.createElement('div');
			firstDiv.classList.add('firstDiv');
			thirdrowAbsolute.appendChild(firstDiv)
	
		   firstTitle = document.createElement('h6');
		   firstTitle.classList.add('firstTitle');
		   firstTitle.innerText='Passport Size Photo*'
		   firstDiv.appendChild(firstTitle)
	
			let inputLabelWide=document.createElement('label');
			inputLabelWide.classList.add('inputLabelWide');
			inputLabelWide.innerText='Upload document'
			firstDiv.appendChild(inputLabelWide)
	
			select = document.createElement('input');
			select.classList.add('select');
			select.type='file'
			select.accept="image/png, application/pdf"
			inputLabelWide.appendChild(select)
	
	
			let labelIconWide=document.createElement('img');
			labelIconWide.classList.add('labelIconWide');
			labelIconWide.src="https://icons-for-free.com/download-icon-box+document+outline+share+top+upload+icon-1320195323221671611_256.png"
			inputLabelWide.appendChild(labelIconWide)
	
			// ----------------------------------------------
			secondDiv=document.createElement('div');
			secondDiv.classList.add('secondDiv');
			thirdrowAbsolute.appendChild(secondDiv)
	
		   firstTitle = document.createElement('h6');
		   firstTitle.classList.add('firstTitle');
		   firstTitle.innerText='Aadhaar Card*'
		   secondDiv.appendChild(firstTitle)
	
			let inputLabel=document.createElement('label');
			inputLabel.classList.add('inputLabel');
			inputLabel.innerText='Upload document'
			secondDiv.appendChild(inputLabel)
	
			select = document.createElement('input');
			select.classList.add('select');
			select.type='file'
			select.accept="image/png, application/pdf"
			inputLabel.appendChild(select)
	
	
			let labelIcon=document.createElement('img');
			labelIcon.classList.add('labelIcon');
			labelIcon.src="https://icons-for-free.com/download-icon-box+document+outline+share+top+upload+icon-1320195323221671611_256.png"
			inputLabel.appendChild(labelIcon)
	
	
			// -------------------------------------------------
			let forthrowAbsolute=document.createElement('div');
			forthrowAbsolute.classList.add('forthrowAbsolute');
			forthrowAbsolute.setAttribute('id',`fourthrowAbsolute${occupantCount}`)
			moreGap.appendChild(forthrowAbsolute)
	
	
			firstDiv=document.createElement('div');
			firstDiv.classList.add('firstDiv');
			forthrowAbsolute.appendChild(firstDiv)
	
			firstTitle = document.createElement('h6');
			firstTitle.classList.add('firstTitle');
			firstTitle.innerText='PAN Number*'
			firstDiv.appendChild(firstTitle)
	
			inputWidth = document.createElement('input');
			inputWidth.classList.add('inputWidthMore');
			inputWidth.placeholder='Enter PAN Number'
			firstDiv.appendChild(inputWidth)
	
			// -----------------------------------------------------
			secondDiv=document.createElement('div');
			secondDiv.classList.add('secondDiv');
			forthrowAbsolute.appendChild(secondDiv)
	
		   firstTitle = document.createElement('h6');
		   firstTitle.classList.add('firstTitle');
		   firstTitle.innerText='PAN Card*'
		   secondDiv.appendChild(firstTitle)
	
			inputLabel=document.createElement('label');
			inputLabel.classList.add('inputLabel');
			inputLabel.innerText='Upload document'
			secondDiv.appendChild(inputLabel)
	
			select = document.createElement('input');
			select.classList.add('select');
			select.type='file'
			select.accept="image/png, application/pdf"
			inputLabel.appendChild(select)
	
	
			labelIcon=document.createElement('img');
			labelIcon.classList.add('labelIcon');
			labelIcon.src="https://icons-for-free.com/download-icon-box+document+outline+share+top+upload+icon-1320195323221671611_256.png"
			inputLabel.appendChild(labelIcon)

	}else{
		console.log('4 Occupants added')
	}
  })








  window.addEventListener('DOMContentLoaded',()=>{
  
	for(let i=0; i<occupantNTimes-1;i++){
		const subTitle = document.createElement('div');
		subTitle.classList.add('subTitle')
		occupantList.appendChild(subTitle)
	
		let h4=document.createElement('h4');
		h4.innerText=`OCCUPANT ${++occupantCount}`
		subTitle.appendChild(h4)
	
		let alignCheckbox=document.createElement('div');
		alignCheckbox.classList.add('alignCheckbox')
		subTitle.appendChild(alignCheckbox)
	
		let checkbox=document.createElement('input');
		checkbox.type='checkbox'
		checkbox.classList.add('checkDynamic')
		checkbox.setAttribute('checked', 'checked');
		checkbox.setAttribute('id',`checkbox${occupantCount}`)

		checkbox.onclick=function checkboxDynamic(){
			const checkbox= document.querySelectorAll('.checkDynamic');

			checkbox.forEach((chk)=>{
            chk.addEventListener('click',(e)=>{

				const occupantBackground =  document.getElementById(`firstOccupantBackground${e.currentTarget.id[8]}`);
				var FourthrowAbsolute = document.getElementById(`fourthrowAbsolute${e.currentTarget.id[8]}`);

					if (FourthrowAbsolute.style.display==='none') {
						FourthrowAbsolute.style.display = "block";
						occupantBackground.style.height = "500px";
					  } else{
						FourthrowAbsolute.style.display = "none";
						occupantBackground.style.height = "330px";
					  }	  
				   })
			})
				
		}

		alignCheckbox.appendChild(checkbox)
	
		let h6=document.createElement('h6');
		h6.innerText='This occupant is signing the contract'
		alignCheckbox.appendChild(h6)
	
		// ------------------------------------------------------
		const firstoccupantBackground = document.createElement('div');
		firstoccupantBackground.classList.add('first-occupantBackground')
		firstoccupantBackground.setAttribute('id',`firstOccupantBackground${occupantCount}`)
		occupantList.appendChild(firstoccupantBackground)

		let moreGap=document.createElement('div');
		moreGap.classList.add('more-Gap')
		firstoccupantBackground.appendChild(moreGap)
	
		let h5=document.createElement('h5');
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
			inputWidth.placeholder='Enter Name'
			firstDiv.appendChild(inputWidth)
	
		// ------------------------------------------------------
	
	
			let secondDiv=document.createElement('div');
			secondDiv.classList.add('secondDiv');
			moreGap.appendChild(secondDiv)
	
			firstTitle = document.createElement('h6');
			firstTitle.classList.add('firstTitle');
			firstTitle.innerText='Date of Birth*'
			secondDiv.appendChild(firstTitle)
	
	
			let occupantDate = document.createElement('select');
			occupantDate.classList.add('occupantDate');
			firstTitle.innerText='Date of Birth*'
			secondDiv.appendChild(occupantDate)
	
			let option = document.createElement('option');
			option.innerText='DD'
			occupantDate.appendChild(option)
	
			let occupantMonth= document.createElement('select');
			occupantMonth.classList.add('occupantMonth');
			secondDiv.appendChild(occupantMonth)
	
			option = document.createElement('option');
			option.innerText='MM'
			occupantMonth.appendChild(option)
	
			let occupantYear= document.createElement('select');
			occupantYear.classList.add('occupantYear');
			secondDiv.appendChild(occupantYear)
	
			option = document.createElement('option');
			option.innerText='YY'
			occupantYear.appendChild(option)
			
			// ----------------------------------------
			let secondrowAbsolute=document.createElement('div');
			secondrowAbsolute.classList.add('secondrowAbsolute');
			moreGap.appendChild(secondrowAbsolute)
	
	
			 firstDiv=document.createElement('div');
			 firstDiv.classList.add('firstDiv');
			 secondrowAbsolute.appendChild(firstDiv)
	
			firstTitle = document.createElement('h6');
			firstTitle.classList.add('firstTitle');
			firstTitle.innerText='Relationship with Tenant*'
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
			 optionn.innerText='Self'
			 optionn.dataset.type='firstOption'
			 selectDropdown.appendChild(optionn)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Parent'
			 optionn.dataset.type='secondOption'
			 selectDropdown.appendChild(optionn)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Child'
			 optionn.dataset.type='thirdOption'
			 selectDropdown.appendChild(optionn)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Sibling'
			 optionn.dataset.type='thirdOption'
			 selectDropdown.appendChild(optionn)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Spouse'
			 optionn.dataset.type='thirdOption'
			 selectDropdown.appendChild(optionn)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Live-In House Help'
			 optionn.dataset.type='thirdOption'
			 selectDropdown.appendChild(optionn)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Employee'
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
			secondrowAbsolute.appendChild(secondDiv)
	
			firstTitle = document.createElement('h6');
			firstTitle.classList.add('firstTitle');
			firstTitle.innerText='Staying or Visiting*'
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
			selectBtn.innerText='Select'
			selectBtn.dataset.type='firstOption'
			select.appendChild(selectBtn)
	
			selectDropdown=document.createElement('div');
			selectDropdown.classList.add('selectDropdown');
			select.appendChild(selectDropdown)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Staying'
			 optionn.dataset.type='firstOption'
			 selectDropdown.appendChild(optionn)
	
			 optionn=document.createElement('div');
			 optionn.classList.add('option');
			 optionn.innerText='Visiting'
			 optionn.dataset.type='secondOption'
			 selectDropdown.appendChild(optionn)
	
			// -------------------------------------------
			 const thirdrowAbsolute=document.createElement('div');
			thirdrowAbsolute.classList.add('thirdrowAbsolute');
			moreGap.appendChild(thirdrowAbsolute)
	
	
			firstDiv=document.createElement('div');
			firstDiv.classList.add('firstDiv');
			thirdrowAbsolute.appendChild(firstDiv)
	
		   firstTitle = document.createElement('h6');
		   firstTitle.classList.add('firstTitle');
		   firstTitle.innerText='Passport Size Photo*'
		   firstDiv.appendChild(firstTitle)
	
			let inputLabelWide=document.createElement('label');
			inputLabelWide.classList.add('inputLabelWide');
			inputLabelWide.innerText='Upload document'
			firstDiv.appendChild(inputLabelWide)
	
			select = document.createElement('input');
			select.classList.add('select');
			select.type='file'
			select.accept="image/png, application/pdf"
			inputLabelWide.appendChild(select)
	
	
			let labelIconWide=document.createElement('img');
			labelIconWide.classList.add('labelIconWide');
			labelIconWide.src="https://icons-for-free.com/download-icon-box+document+outline+share+top+upload+icon-1320195323221671611_256.png"
			inputLabelWide.appendChild(labelIconWide)
	
			// ----------------------------------------------
			secondDiv=document.createElement('div');
			secondDiv.classList.add('secondDiv');
			thirdrowAbsolute.appendChild(secondDiv)
	
		   firstTitle = document.createElement('h6');
		   firstTitle.classList.add('firstTitle');
		   firstTitle.innerText='Aadhaar Card*'
		   secondDiv.appendChild(firstTitle)
	
			let inputLabel=document.createElement('label');
			inputLabel.classList.add('inputLabel');
			inputLabel.innerText='Upload document'
			secondDiv.appendChild(inputLabel)
	
			select = document.createElement('input');
			select.classList.add('select');
			select.type='file'
			select.accept="image/png, application/pdf"
			inputLabel.appendChild(select)
	
	
			let labelIcon=document.createElement('img');
			labelIcon.classList.add('labelIcon');
			labelIcon.src="https://icons-for-free.com/download-icon-box+document+outline+share+top+upload+icon-1320195323221671611_256.png"
			inputLabel.appendChild(labelIcon)
	
	
			// -------------------------------------------------
			let forthrowAbsolute=document.createElement('div');
			forthrowAbsolute.classList.add('forthrowAbsolute');
			forthrowAbsolute.setAttribute('id',`fourthrowAbsolute${occupantCount}`)
			moreGap.appendChild(forthrowAbsolute)
	
	
			firstDiv=document.createElement('div');
			firstDiv.classList.add('firstDiv');
			forthrowAbsolute.appendChild(firstDiv)
	
			firstTitle = document.createElement('h6');
			firstTitle.classList.add('firstTitle');
			firstTitle.innerText='PAN Number*'
			firstDiv.appendChild(firstTitle)
	
			inputWidth = document.createElement('input');
			inputWidth.classList.add('inputWidthMore');
			inputWidth.placeholder='Enter PAN Number'
			firstDiv.appendChild(inputWidth)
	
			// -----------------------------------------------------
			secondDiv=document.createElement('div');
			secondDiv.classList.add('secondDiv');
			forthrowAbsolute.appendChild(secondDiv)
	
		   firstTitle = document.createElement('h6');
		   firstTitle.classList.add('firstTitle');
		   firstTitle.innerText='PAN Card*'
		   secondDiv.appendChild(firstTitle)
	
			inputLabel=document.createElement('label');
			inputLabel.classList.add('inputLabel');
			inputLabel.innerText='Upload document'
			secondDiv.appendChild(inputLabel)
	
			select = document.createElement('input');
			select.classList.add('select');
			select.type='file'
			select.accept="image/png, application/pdf"
			inputLabel.appendChild(select)
	
	
			labelIcon=document.createElement('img');
			labelIcon.classList.add('labelIcon');
			labelIcon.src="https://icons-for-free.com/download-icon-box+document+outline+share+top+upload+icon-1320195323221671611_256.png"
			inputLabel.appendChild(labelIcon)

	}

  })

//   ------------------------------------------------------------

    const checkbox= document.getElementById('checkbox')
	var FourthrowAbsolute = document.getElementById('fourthrowAbsolute');
	var occupantBackground = document.getElementById('firstOccupantBackground');

		checkbox.addEventListener('click',()=>{
			if (FourthrowAbsolute.style.display==='none') {
				FourthrowAbsolute.style.display = "block";
	            occupantBackground.style.height = "500px";
			  } else{
				FourthrowAbsolute.style.display = "none";
				occupantBackground.style.height = "325px";
			  }	  
		   })
		