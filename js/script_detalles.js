document.addEventListener("DOMContentLoaded", function () {
    const enlace_imagen = document.querySelectorAll('.ima_pr');
    const alcarrito=document.querySelectorAll('.agregar_carrito')

    class Producto {
        constructor(id, nombre, precio, imagen, descripcion,tipo) {
          this.id = id;
          this.nombre = nombre;
          this.precio = precio;
          this.imagen = imagen;
          this.descripcion = descripcion;
          this.tipo = tipo;
        }
      }

    const productos = [
      new Producto('Aalto_2022', 'Aalto 2022', 20, '../img/Aalto_2022.png', 'Un tinto de Ribera del Duero, con aromas a fruta negra y especias. Este vino destaca por su complejidad y profundidad, con notas de roble bien integradas y un final largo y persistente. Ideal para acompañar carnes rojas y platos de caza. Perfecto para una cena elegante o una ocasión especial.', 'vino'),
      new Producto('Aalto_2022_Magnum', 'Aalto 2022 Magnum', 54, '../img/Aalto_2022_Magnum.png', 'Un tinto de Ribera del Duero, potente y elegante. En formato Magnum, este vino ofrece una evolución más lenta y armoniosa, con una mayor capacidad de guarda. Perfecto para celebraciones y eventos especiales, donde se desea impresionar a los invitados con un vino de alta calidad.', 'vino'),
      new Producto('alion_2018', 'Alion 2018', 46, '../img/Alion_2018.png', 'Un tinto de Ribera del Duero con aromas a fruta roja y especias. Este vino es conocido por su equilibrio y elegancia, con taninos suaves y un final sedoso. Ideal para acompañar platos de cordero y quesos curados. Perfecto para una cena romántica o una reunión familiar.', 'vino'),
      new Producto('blanco_1', 'Sauvignon blanc', 25, '../img/blanco_1.png', 'Un vino blanco fresco y afrutado, ideal para mariscos y ensaladas. Con notas cítricas y herbáceas, este vino es perfecto para disfrutar en días calurosos y como aperitivo. Ideal para una tarde de verano o una comida ligera al aire libre.', 'vino'),
      new Producto('Macán_2019', 'Macán 2019', 42, '../img/Macán_2019.png', 'Un vino tinto elegante y equilibrado de la Rioja. Con aromas a frutas maduras y toques de vainilla y cacao, este vino es ideal para acompañar carnes asadas y platos de caza. Perfecto para una cena formal o una ocasión especial.', 'vino'),
      new Producto('Pago_de_Carraovejas_2022', 'Pago de Carraovejas 2022', 34, '../img/Pago_de_Carraovejas_2022.png', 'Un vino tinto potente y elegante de Ribera del Duero. Con notas de frutas negras y especias, este vino es perfecto para acompañar platos de carne y quesos fuertes. Ideal para una cena con amigos o una celebración especial.', 'vino'),
      new Producto('Pago_de_Carraovejas_2022_Magnum', 'Pago de Carraovejas 2022 Magnum', 55, '../img/Pago_de_Carraovejas_2022_Magnum.png', 'Un tinto de Ribera del Duero con gran capacidad de guarda. En formato Magnum, este vino ofrece una evolución más lenta y armoniosa, con una mayor complejidad y profundidad. Perfecto para eventos importantes y celebraciones especiales.', 'vino'),
      new Producto('pinitia_2017', 'Pinitia 2017', 25, '../img/Pinitia_2017.png', 'Un vino tinto con carácter y profundidad. Con aromas a frutas maduras y toques de especias, este vino es ideal para acompañar platos de carne y quesos curados. Perfecto para una cena con amigos o una reunión familiar.', 'vino'),
      new Producto('Rioja_Alta_Gran_Reserva', 'Rioja Alta Gran Reserva', 68, '../img/Rioja_Alta_Gran_Reserva.png', 'Un vino tinto clásico y refinado de la Rioja. Con notas de frutas maduras, vainilla y especias, este vino es perfecto para acompañar platos de carne y quesos fuertes. Ideal para una cena formal o una ocasión especial.', 'vino'),
      new Producto('Vega_Sicilia_Valbuena_2016', 'Vega Sicilia Valbuena 2016', 79, '../img/Vega_Sicilia_Valbuena_2016.png', 'Un vino tinto de Ribera del Duero, potente y elegante. Con aromas a frutas negras, especias y toques de roble, este vino es ideal para acompañar platos de carne y quesos curados. Perfecto para una cena elegante o una ocasión especial.', 'vino'),
      new Producto('Viña_Arana_Gran_Reserva_2016', 'Viña Arana Gran Reserva 2016', 30, '../img/Viña_Arana_Gran_Reserva_2016.png', 'Un vino tinto elegante y equilibrado de la Rioja. Con notas de frutas maduras, vainilla y especias, este vino es perfecto para acompañar platos de carne y quesos fuertes. Ideal para una cena formal o una ocasión especial.', 'vino'),
      new Producto('Viña_Tondonia_Tinto_Reserva_2012', 'Viña Tondonia Tinto Reserva 2012', 50, '../img/Viña_Tondonia_Tinto_Reserva_2012.png', 'Un vino tinto con notas de fruta madura y especias. Este vino es conocido por su complejidad y profundidad, con un final largo y persistente. Ideal para acompañar carnes rojas y platos de caza. Perfecto para una cena elegante o una ocasión especial.', 'vino'),
      new Producto('jamon_reserva', 'Jamón reserva', 100, '../img/jamon_reserva.png', 'Jamón curado de alta calidad, perfecto para acompañar tus vinos favoritos. Con un sabor intenso y una textura suave, este jamón es ideal para disfrutar en cualquier ocasión. Perfecto para una tabla de embutidos o como aperitivo.', 'otros'),
      new Producto('queso_oveja_curado', 'Queso oveja curado', 25, '../img/queso_oveja_curado.PNG', 'Queso curado de oveja con un sabor intenso y una textura firme. Perfecto para acompañar vinos tintos y disfrutar en una tabla de quesos. Ideal para una cena con amigos o una reunión familiar.', 'otros'),
      new Producto('queso_oveja', 'Queso oveja', 47, '../img/queso_oveja.PNG', 'Queso de oveja suave y cremoso, ideal para cualquier ocasión. Con un sabor delicado y una textura cremosa, este queso es perfecto para disfrutar con vinos blancos y rosados. Ideal para una cena ligera o como aperitivo.', 'otros'),
      new Producto('jamon_iberico_50', 'Jamón Ibérico 50%', 55, '../img/jamon_iberico_50.png', 'Jamón ibérico de bellota, con un sabor inigualable y una textura suave. Perfecto para acompañar vinos tintos y disfrutar en una tabla de embutidos. Ideal para una cena con amigos o una reunión familiar.', 'otros'),
      new Producto('Queso_la_solana', 'Queso la solana', 50, '../img/Queso_la_solana.png', 'Queso madurado en aceite de oliva, perfecto para una velada magnifica. Con un sabor intenso y una textura firme, este queso es ideal para acompañar vinos tintos y disfrutar en una tabla de quesos. Perfecto para una cena elegante o una ocasión especial.', 'otros'),
      new Producto('Uva_roja_a_granel', 'Uva roja a granel', 3, '../img/Uva_roja_a_granel.png', 'Uvas rojas frescas y jugosas, perfectas para acompañar tus vinos. Con un sabor dulce y una textura crujiente, estas uvas son ideales para disfrutar como aperitivo o en ensaladas. Perfectas para una merienda saludable o una comida ligera.', 'uva'),
      new Producto('Jamon_serrano_reserva', 'Jamon serrano reserva', 30, '../img/Jamon_serrano_reserva.png', 'Jamón serrano curado de sabor intenso, ideal para acompañar con un buen vino. Con una textura suave y un sabor delicado, este jamón es perfecto para disfrutar en cualquier ocasión. Ideal para una tabla de embutidos o como aperitivo.', 'otros'),
      new Producto('queso_manchrgo_DO', 'Queso manchego', 70, '../img/queso_manchrgo_DO.png', 'Queso manchego con denominación de origen, ideal para acompañar con tintos. Con un sabor intenso y una textura firme, este queso es perfecto para disfrutar en una tabla de quesos. Ideal para una cena con amigos o una reunión familiar.', 'otros'),
      new Producto('lote1', 'Lote de vino + frutas + queso', 60, '../img/lote1.PNG', 'Un lote perfecto para cualquier ocasión, incluye vino, frutas y queso gourmet. Ideal para regalar o disfrutar en una velada especial. Perfecto para una cena elegante o una ocasión especial.', 'otros'),
      new Producto('lote2', 'Lote de vino y surtido de quesos', 70, '../img/lote2.PNG', 'Disfruta de una selección de vinos y quesos curados, ideal para compartir. Perfecto para regalar o disfrutar en una velada especial. Ideal para una cena con amigos o una reunión familiar.', 'otros'),
      new Producto('surtidos_ibericos', 'Surtido de embutidos ibéricos', 85, '../img/surtidos_ibericos.png', 'Embutidos ibéricos de alta calidad, ideal para acompañar tus vinos favoritos. Con una selección de los mejores embutidos, este surtido es perfecto para disfrutar en cualquier ocasión. Ideal para una cena con amigos o una reunión familiar.', 'otros'),
      new Producto('lote_vino_queso', 'Lote de vino + queso', 35, '../img/lote_vino_queso.png', 'Un lote exquisito que combina vino con queso, ideal para un picoteo. Perfecto para regalar o disfrutar en una velada especial. Ideal para una cena ligera o como aperitivo.', 'otros')
    ];

    enlace_imagen.forEach((enlace) => {
        enlace.addEventListener('click', () => {
            productos.forEach(producto => {
                if(enlace.id===producto.id){
                localStorage.setItem("producto", JSON.stringify(producto));
            }
            })
        });
    });

    alcarrito.forEach(compra => {
        compra.addEventListener('click', () => {
            let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
            productos.forEach(producto => {
                if(compra.getAttribute('data-id')===producto.id){
                    let existingProduct = cart.find(item => item.producto.id === producto.id);
                        if (window.location.pathname.includes('detalles.html')) {
                            let cantidad=document.getElementById('canti').innerHTML
                            cantidad=parseInt(cantidad)
                            cart.push({producto, quantity: cantidad });
                            document.getElementById('canti').innerHTML=1
                        }else{
                            if (existingProduct) {
                                existingProduct.quantity++;
                            } else {
                            cart.push({producto, quantity: 1 });
                            }
                        }
                        localStorage.setItem("cart", JSON.stringify(cart));
                        alert('El producto ha sido añadido al carrito, actualiza la pagina para poder verlo')
                    }
                })
            })
            
        });
});
