import { header } from './componentes/header'
import { footer } from './componentes/footer'
import { home } from './vistas/home'
// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { pedidos } from './componentes/pedidosForm'
import { tabla } from './componentes/tablaPedidos'

document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = home.template


document.querySelector('#pedidos').innerHTML = pedidos.template
pedidos.script()

document.querySelector('#tabla').innerHTML = tabla.template


document.querySelector('footer').innerHTML = footer.template