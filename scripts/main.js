let button = document.querySelector('button')
let h1 = document.querySelector('h1')
function setUserName(){
    let name = prompt('输入你的名字')
    if(!name){
        setUserName()
    }
    localStorage.setItem('name', name);
    h1.textContent = '厉害了' + name
}

button.onclick = function(){
    setUserName()
}