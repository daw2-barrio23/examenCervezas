

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
          <td><button type="button" class="btn btn-danger text-white">Eliminar</button></td>
          <td><button type="button" class="btn btn-warning ">Editar pedido</button></td>
        </tr>

        <tr>
          <td>Alhambra Reserva 1925</td>
          <td>3</td>
          <td><button type="button" class="btn btn-danger text-white">Eliminars</button></td>
          <td><button type="button" class="btn btn-warning ">Editar pedido</button></td>
        </tr>

        <tr>
          <td>San Miguel Especial</td>
          <td>5</td>
          <td><button type="button" class="btn btn-danger text-white">Eliminar</button></td>
          <td><button type="button" class="btn btn-warning ">Editar pedido</button></td>
        </tr>
        
      </tbody>
    </table>
</div>
    
    `
}