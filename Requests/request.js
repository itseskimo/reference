//Dynamic Adding Component functionality after clicking on 'Add Request'

let count=1
window.addEventListener('load',()=>{
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list = document.querySelector("#tasks");
	

	form.addEventListener('submit', (e) => {
		e.preventDefault();

	    const task = input.value;
		console.log(task)
		
		const section = document.createElement('section');
		section.classList.add('requestInputt');

		const inputCircle = document.createElement('h5');
		inputCircle.classList.add('inputCircle');
        inputCircle.innerText=++count
		section.appendChild(inputCircle);

		const inputElement = document.createElement('input');
		inputElement.classList.add('request');
		inputElement.type = 'text';
		inputElement.value = task;
		inputElement.setAttribute('readonly', 'readonly');
		section.appendChild(inputElement);

		const img = document.createElement('img');
		img.classList.add('editIcon');
		img.src="https://cdn-icons-png.flaticon.com/512/61/61456.png"
		img.alt='edit'
        section.appendChild(img)

		list.appendChild(section)

        input.value=''
        
		img.addEventListener('click',()=>{
			if(img.alt==='edit'){
				img.src='https://www.pngfind.com/pngs/m/357-3570848_save-file-button-comments-save-file-icon-hd.png'
				inputElement.removeAttribute("readonly");
			    inputElement.focus();
				img.alt='save'
			}else{
				img.src="https://cdn-icons-png.flaticon.com/512/61/61456.png"
				img.alt='edit'
				inputElement.setAttribute('readonly', 'readonly');
			}
			
		})

	 });
})


//------------------------------------------------------------------------------------------------------

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
	++currentActive
    window.location.href=`/Lease/lease.html?value=${currentActive}`
	 
	if(currentActive>circles.length){
		currentActive=circles.length
	}
	
    })

    prev.addEventListener('click',()=>{
    --currentActive
	window.location.href=`/index.html?value=${currentActive}`

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
