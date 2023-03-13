import {cervezas} from '../bd.js'

export const pedidos = {
    template: `<div class="col-12 d-flex">
    <div class="col-6 shadow shadow-box" style="height: 100%; width: 50%; padding: 10px;">
       <form id="formulario-cervezas">
        <label for="nombre-grupo">Nombre del grupo:</label>
        <input type="text" id="nombre-grupo" name="nombre-grupo" required><br><br>

        <label for="mesa">Mesa:</label>
        <input type="text" id="mesa" name="mesa" required><br><br>

        <label for="cervezas">Elige tu cerveza</label>
        <select name="select" id="cervezas"></select><br><br>
        
        <label for="cantidad">¿Cuantas te traigo?</label>
        <input type="number" id="cantidad" name="cantidad" required><br><br>
        <button type="submit" class="rounded bg-success text-white">Añadir pedido</button>
       </form> 
    </div>
   <div class="col-6" id=cervezaEscogida>
   </div>
</div>`,
script:()=>{
    console.log('compruebo si funciona pedidos')//hacemos console log para ver si funciona bien

    var html =`
    <option> Selecciona tu cerveza</option>
    `//declaramos el html en el que estaran todas las cervezas de la bd para escoger
    cervezas.forEach(cerveza =>{
        html+=`
        <option value="${cerveza.id}">${cerveza.nombre}</option>
        `//seleccionamos el nombre y el id de la cerveza que escogemos
    })

    const select = document.querySelector('#cervezas')

    
    select.innerHTML = html 

    select.addEventListener("change", (event) => {//le decimos que cuando detecte un cambio en el option
        
        const posicionCerveza = cervezas.findIndex(cerveza=>cerveza.id == event.target.value)//tiene que buscar dentro de la base de datos por e index seleccionado

        const html=`
        <div class="card" style="width: 20rem;">
            <div class="card-body">
                <h4 class="card-text">${cervezas[posicionCerveza].nombre}</h4> 
                <p class="card-text">${cervezas[posicionCerveza].descripcion}</p>
            </div>
            <img src="${cervezas[posicionCerveza].imagen}" class="card-img-bottom w-50 h-25" alt="FotoCerveza">
        </div>
        `//coge de la bd el nombre la imagen y descripcion de la cerveza seleccionada y lo pinta en el lado derecho
        const descripcion = document.querySelector("#cervezaEscogida")
        
        descripcion.innerHTML = html//sacamos por pantalla la cerveza seleccionada
    })
    
    
}
     
}