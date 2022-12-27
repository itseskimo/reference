let count=1
window.addEventListener('load',()=>{
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list = document.querySelector("#tasks");
	

	form.addEventListener('submit', (e) => {
		e.preventDefault();

	    const task = input.value;
		
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
		inputCircle.appendChild(inputElement);

		const img = document.createElement('img');
		img.classList.add('editIcon');
		img.src="https://cdn-icons-png.flaticon.com/512/61/61456.png"
		img.alt='edit'
        inputCircle.appendChild(img)

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