import { header } from './componentes/header'
import { footer } from './componentes/footer'
import { home } from './vistas/home'
// Import our custom CSS
import './scss/styles.scss'
import './style.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { pedidos } from './componentes/pedidosForm'
import { tabla } from './componentes/tablaPedidos'

document.querySelector('header').innerHTML = header.template//pintamos el template del header en la etiqueta header
document.querySelector('main').innerHTML = home.template//pintamos el template del home en la etiqueta main


document.querySelector('#pedidos').innerHTML = pedidos.template//dentro de main busca un id pedidos y dentro pintamos el template de pedidos
pedidos.script()//llamamos tambien al script de pedidos 

document.querySelector('#tabla').innerHTML = tabla.template//dentro de main busca un id tabla y dentro pintamos el template de tabla
tabla.script()//llamamos tambien al script de tabla

document.querySelector('footer').innerHTML = footer.template//pintamos el template del footer en la etiqueta footer