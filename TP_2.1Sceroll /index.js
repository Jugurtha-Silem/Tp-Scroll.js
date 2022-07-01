
let nav = document.querySelector('#navbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > "120"){
        nav.style.top = "-60px";
    }else{
        nav.style.top = '0px';
    }

});



