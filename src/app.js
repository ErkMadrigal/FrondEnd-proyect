// importa el archivo messages.js
import {showAlet} from './messages';
//importa desde npm instalado ya jquery
import $ from "jquery";
//importar uuid es para generar los id unico aleatorio
import {v4} from 'uuid';
// importa los css en este caso sass
import "./style.scss"

// codigo de Js en ES6
let btn = document.querySelector("#btn");

    btn.onclick = (e) => showAlet();

    //cogido de Jquery
    $('#btnJk').click(() => alert(v4()))