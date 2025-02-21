document.addEventListener("DOMContentLoaded", function () {
        // const banner1 = document.getElementById('banner1');
        // const banner2 = document.getElementById('banner2');
        // const banner3 = document.getElementById('banner3');
        // const banners = [banner1, banner2, banner3];
        // let i = 0;
        const boton_menu=document.getElementById('boton_menu')
        const boton_carrito=document.getElementById('boton_carrito')
        const logo=document.getElementById('logo')
        const carrito=document.getElementById('carrito')
    
        window.addEventListener('scroll', () => {
          if (window.innerWidth > 800) {
              const scrollPosition = window.scrollY;
              const viewportHeight = window.innerHeight;
              if (scrollPosition > 0.8 * viewportHeight) {
                  boton_menu.style.fill = 'black';
                  boton_carrito.style.fill = 'black';
                  logo.style.filter = "invert(0)";
              } else {
                  boton_menu.style.fill = 'white';
                  if (!carrito.classList.contains('activo')) {
                      boton_carrito.style.fill = 'white';
                  }
                  logo.style.filter = "invert(1)";
              }
          }
        });

        const mas_vendios=document.getElementById('mas_vendidos')
        const mas_vendidos_acompañantes=document.getElementById('mas_vendidos_acompañantes')
        document.body.style.overflowX = 'hidden';

        window.addEventListener('scroll', () => {
            const posicion  = mas_vendios.getBoundingClientRect()
            if (posicion.top +200 <= window.innerHeight && posicion.bottom >= 0) {
                mas_vendios.style.animationPlayState = 'running';
            }
        });

        window.addEventListener('scroll', () => {
            const posicion  = mas_vendidos_acompañantes.getBoundingClientRect()
            if (posicion.top +200 <= window.innerHeight && posicion.bottom >= 0) {
                mas_vendidos_acompañantes.style.animationPlayState = 'running';
            }
        });
        


        boton_menu.addEventListener('click', () => {
            let div_menu=document.getElementById('div_menu_lateral')
            if (div_menu.style.left === "0px") {
                
                setTimeout(() => {
                    div_menu.style.left = "-30%";
                    setTimeout(() => {
                        div_menu.style.display = 'none';
                    }, 300);
                }, 5);
                
            } else {
                div_menu.style.display='grid'
                setTimeout(() => {div_menu.style.left = "0px";},0.3)
                
            }
        })


        
    // setInterval(() => {
    //     banners[i].classList.add('carousel-item-start');
    //     banners[(i + 1) % banners.length].classList.add('carousel-item-end');
    //     banners[(i + 1) % banners.length].classList.add('active');
    //     setTimeout(() => {
    //         banners[i].classList.remove('carousel-item-start');
    //         banners[(i + 1) % banners.length].classList.remove('carousel-item-end');
    //     }, 0.1);
    //     setTimeout(() => {
    //         banners[i].classList.remove('active');
    //         i = (i + 1) % banners.length;
    //         if(i>2){
    //             i=0
    //         }
    //     }, 1000);
    // }, 5000);
});