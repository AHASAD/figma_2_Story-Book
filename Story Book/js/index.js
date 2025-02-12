document.addEventListener("DOMContentLoaded",function(){
    let toggler=document.querySelector('.ico');
    let navitem=document.querySelector('.nav-item');

        console.log(toggler);
        console.log(navitem);

        toggler.addEventListener('click',listDisplay);

        function listDisplay(){
            navitem.classList.toggle('active');
            console.log("working");
        }
});

