document.addEventListener("DOMContentLoaded", function () {
        const boton_menu=document.getElementById('boton_menu')
        const boton_carrito=document.getElementById('boton_carrito')
        const carrito=document.getElementById('carrito')
        const boton_pagar=document.getElementById('pagar')
        const boton_limpiar=document.getElementById('limpiar')
        const textarea=document.getElementById('mensaje')
        const enviar=document.getElementById('enviar')
        
        boton_menu.addEventListener('click', () => {
            let div_menu=document.getElementById('div_menu_lateral')
            if (div_menu.style.left === "0px") {
                
                setTimeout(() => {
                    div_menu.style.left = "-50%";
                    setTimeout(() => {
                        div_menu.style.display = 'none';
                    }, 300);
                }, 5);
                
            } else {
                
                div_menu.style.display='grid'
                setTimeout(() => {div_menu.style.left = "0px";},0.3)
                
            }
        })
        let originalColor = boton_carrito.style.fill;

        boton_carrito.addEventListener('click', () => {
            if (!carrito.classList.contains('activo')) {
                originalColor = boton_carrito.style.fill;
                carrito.style.animationName='abajo';
                carrito.classList.toggle('activo');
                carrito.style.animationPlayState = 'running';
            }else{
                carrito.style.animationName='arriba';
                carrito.style.animationPlayState = 'running';
                setTimeout(() => {
                    carrito.classList.toggle('activo');
                }, 900);
            }

            if (carrito.classList.contains('activo')) {
                boton_carrito.style.setProperty('fill', 'black', 'important');
            } else {
                boton_carrito.style.fill = originalColor;
            }
            if (carrito.classList.contains('activo')) {
                const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                const lista = document.getElementById('lista_carrito');
                lista.innerHTML = '';
                let total=0
                cartItems.forEach(item => {
                    let totalillo=0
                    totalillo=item.producto.precio*item.quantity
                    let li = '<li><span id="info_carrito">'+item.producto.nombre+'<span id="info_precio"> Precio: '+item.producto.precio+'</span></span> <span>Cantidad: '+item.quantity+'</span><span>Total: '+totalillo+'</span>  <button class="quitar" data-id="'+item.producto.id+'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="black" width="20" height="20px"  ><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg></button></li>';
                    lista.innerHTML+=li
                    total=total+item.producto.precio.precio*item.quantity;
                });
                document.querySelectorAll('.quitar').forEach(pulsado => {
                    pulsado.addEventListener('click', () => {
                        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                        const itemId = pulsado.getAttribute('data-id');
                        cartItems = cartItems.filter(item => item.producto.id !== itemId);
                        localStorage.setItem('cart', JSON.stringify(cartItems));
                        alert('Elemento eliminado del carrito')
                        location.reload();
                    });
                });
                
            }


        });

        boton_pagar.addEventListener('click', () => {
            alert('Gracias por su compra');
            localStorage.removeItem('cart');
            location.reload();
        });
        boton_limpiar.addEventListener('click', () => {
            alert('Se ha limpiado el carrito');
            localStorage.removeItem('cart');
            location.reload();
        });

        enviar.addEventListener('click',() => {
            alert('Gracias por tu mensaje, lo tomaremos en cuenta')
            textarea.value=''
        })

})
