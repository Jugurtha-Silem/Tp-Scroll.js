// Créer un événement au scroll
let nav          = document.querySelector('#navbar');

window.addEventListener('scroll', () =>{
    console.log("suis la !!");

    if (window.scrollY > 50){

        nav.style.height = "45px";
    }
    else{
        nav.style.height = "90px";  
    }
    
    
    if (window.scrollY < 200 ){

        imgImprovise.style.opacity = '1';
        imgImprovise.style.transform = 'none';    
    }
    if (window.scrollY > 1000){
        popup.style.opacity = 1; 
        popup.style.right = '27rem';    

    }else{
        popup.style.opacity = '0';
    }

});

