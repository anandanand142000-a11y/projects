let input = document.getElementById('tasks')
let butt = document.getElementById('add')
let lists = document.getElementById('items')


butt.addEventListener('click',()=>{
    let textValue = input.value.trim();
    if(textValue === ''){
        alert('enter the task');
        return;
    }

    //want create the list for append on ul list
    const li = document.createElement('li')
    li.textContent = textValue;

    //create the button for task completion
    let combutt = document.createElement('button');
    combutt.textContent = ' ✓';
    combutt.style.marginLeft = '5px';
    combutt.onclick =()=> li.classList.toggle('completed')


    //create delete button
    let delbutt = document.createElement('button')
    delbutt.textContent = 'x';
    delbutt.style.marginLeft = '5px';
    delbutt.onclick = ()=> li.remove();

    li.appendChild(combutt);
    li.appendChild(delbutt);
    lists.appendChild(li);

    //clear everything on input
    input.value = ''

})