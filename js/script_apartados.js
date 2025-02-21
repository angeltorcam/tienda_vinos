document.addEventListener("DOMContentLoaded", function () {
    const etiquetas = document.querySelectorAll(".etiquetas");
    const bloques=['primero','segundo','tercero']

    etiquetas.forEach((etiqueta,index) => {
        etiqueta.addEventListener("click", function() {
            if(etiqueta.id=="Todas"){
                etiqueta.classList.add("subrayado");
                bloques.forEach((bloque) => {
                    document.getElementById(bloque).classList.remove("ocultar");
                })
                etiquetas.forEach((etiquetilla) => {
                    if(etiquetilla!=etiqueta){
                        etiquetilla.classList.remove("subrayado");
                    }
                })
            }else{
                etiqueta.classList.add("subrayado");
                etiquetas.forEach((etiquetilla) => {
                    if(etiquetilla!=etiqueta){
                        etiquetilla.classList.remove("subrayado");
                        if (etiquetilla.id!="Todas"){
                            document.getElementById(etiquetilla.getAttribute('data-id')).classList.add("ocultar");
                        }
                    }else if(etiquetilla.id!="Todas"){
                        document.getElementById(etiqueta.getAttribute('data-id')).classList.remove("ocultar");
                    }
                })
            }
                
            })
        });
});

