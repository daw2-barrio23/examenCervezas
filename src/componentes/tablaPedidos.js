

export const tabla = {
    template:`<div class="shadow shadow-box">
  <table class="table" id="tabla">
    <h3>Esto es lo que has pedido de momento</h3>
      <thead>
        <tr>
          <th>cerveza</th>
          <th>Cantidad</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="cuerpo">
        <tr>
          <td>Estrella Galicia</td>
          <td>5</td>
          <td><button type="button" class="btn btn-danger text-white eliminar">Eliminar</button></td>
          <td><button type="button" class="btn btn-warning ">Editar pedido</button></td>
        </tr>

        <tr>
          <td>Alhambra Reserva 1925</td>
          <td>3</td>
          <td><button type="button" class="btn btn-danger text-white eliminar">Eliminar</button></td>
          <td><button type="button" class="btn btn-warning ">Editar pedido</button></td>
        </tr>

        <tr>
          <td>San Miguel Especial</td>
          <td>5</td>
          <td><button type="button" class="btn btn-danger text-white eliminar">Eliminar</button></td>
          <td><button type="button" class="btn btn-warning ">Editar pedido</button></td>
        </tr>
        
      </tbody>
    </table>
</div>
    `,
    script:()=>{
      const botonesEliminar = document.querySelectorAll(".eliminar")//seleccionamos todo aquello que tenga la clase eliminar 
      botonesEliminar.forEach(botonEliminar => {
        botonEliminar.addEventListener("click",() =>{//escuchamos el click
          alert(`Se hizo click en eliminar `)//para comprobar si funciona sacamos un alert

          const fila = botonEliminar.parentNode.parentNode
          fila.classList.add("fila-oculta")//una vez se hace click le añadimos a esa fila en la que se ha hecho el click la clase fila-oculta la cual esta en el archivo css
        })
      })
    }
}