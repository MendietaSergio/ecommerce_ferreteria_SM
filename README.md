# Ferreteria
## _Proyecto final para el curso de React JS de CoderHouse_



Es un proyecto e-commerce de ferreteria en general.
## Deploy
El servidor elegido para guardar el proyecto y mostrarlo funcional es Heroku, al ser un servidor gratuito puede ser que tarde en cargar la primera vez. 

https://ecommerce-ferreteria-sm.herokuapp.com/


## Librerias

- Firebase: Base de datos gratuita donde se guardan los datos de los productos y las imagenes.
- Bootstrap y React-Bootstrap: Para mejorar los estilos de algunos tag de cada página,componente y/o archivos.
- React-router-dom: Para tener un sistema de tura y así navegar por las distintas páginas.
- SweetAlert2: Para confirmar compra y carga de producto.
- font-awesome: Para el uso de iconos.
- react-hook-form: Para validar los input de los formularios.

## Páginas

Detallo las páginas que se pueden encontrar en el proyecto.

- /: Página principal donde se ve un banner, productos destacados y en ofertas.
- /detaille/id : Muestra el detalle del producto que se haya seleccionado.
- /productos: Muestra la lista de productos disponibles.
- /productos/categoria: Muestra la lista de productos disponibles filtrado con su categoria.
- /productos/categoria/subcategoria: Muestra la lista de productos disponibles filtrado con su subcategoria.
- /contacto: Forma de contacto, ubicación de la sucursal.
- /agregar-productos: Para poder agregar un producto.
- /compra-finalizada: Muestro el número de orden de la compra


## Instalacion

El proyecto al estar realizado con React JS, para hacer una prueba de forma local primero se debe clonar desde GitHub.
```sh
git clone https://github.com/MendietaSergio/ecommerce_ferreteria_SM.git
```
Luego se ingresa a la carpeta que contiene el proyecto
```sh
cd ecommerce_ferreteria_SM
```
Se debe instalar la carpete node_modules
```sh
npm install
```
Y para finalizar, hay que levantar el proyecto de forma local:
```sh
npm start
```
