const itens = document.querySelectorAll('#Initialing a[href^="#"]');
itens.forEach(item => {
    item.addEventListener('click', scrollClick);

})

function scrollClick(event){
    event.preventDefault(); 
    const scrollElement = event.target;
    const id = scrollElement.getAttribute('href');
    const selectDiv = document.querySelector(id).offsetTop;

        window.scroll({top: selectDiv + 240,
        behavior: "smooth"});
        
}
console.log(itens);