let e1 = document.getElementById('e1')
let l1 = document.getElementById('l1')
let en1 = document.getElementById('en1')
let sidebar = document.querySelector('aside')
let sidebarClose = document.getElementById('sidebarClose')
let sidebarOpen = document.getElementById('sidebarOpen')

//displaying first image of every category
e1.style.display = 'block'
l1.style.display = 'block'
en1.style.display = 'block'
//toggling between sidebar and menu
sidebarClose.addEventListener('click', function () {
    sidebar.style.display = 'none'
})

sidebarOpen.addEventListener('click', function () {
    sidebar.style.display = 'block'
})