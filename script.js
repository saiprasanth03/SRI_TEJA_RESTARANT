function sectionToScroll(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'})
}

function menuOpen(){
    const sidebar = document.querySelector('.open')
    sidebar.style.display= "flex"
}
function menuclose(){
    const sidebar = document.querySelector('.open')
    sidebar.style.display= "none"
}
