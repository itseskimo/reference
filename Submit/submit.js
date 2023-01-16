
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
	//++currentActive
    //window.location.href=`/OccupantLease/OccupantLease.html?value=${currentActive}`
	 
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
