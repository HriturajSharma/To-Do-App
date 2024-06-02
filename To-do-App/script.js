let input = document.querySelector('#input-txt');
let child = document.querySelector('.child');
let btn = document.querySelector('#btn').addEventListener('click', () => {
    if (input.value == "") {
        alert("please add some Notes")
    } else {
        let newElement = document.createElement('ul');
        newElement.innerHTML = `<input type="checkbox" name="" id="checkBox">${input.value}  <i id="cancel" class="fa-regular fa-circle-xmark"></i>`;
        child.appendChild(newElement)
        input.value = ""

        newElement.querySelector('#cancel').addEventListener('click', () => {
            newElement.remove();
        })
        newElement.querySelector('#checkBox').addEventListener('click', (e) => {
           console.log(e.check)
        })
    

      


    }


})
