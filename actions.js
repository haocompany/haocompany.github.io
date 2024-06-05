const menu = document.getElementById('menu')
const sidebar = document.getElementById('sidebar')
let isClosed = true
menu.addEventListener('click',function fun() { 
    if (isClosed) {
        sidebar.style = 'display:block;'
        isClosed = false
    }else{
        sidebar.style = 'display:none;'
        isClosed = true
    }
})