import $ from 'jquery';
import './css/style.css';
import Botao from './components/botao/index';

$(function(){

    let botao = new Botao();
    botao.setTitle('Testador');
    botao.setClick(function(){
        alert("Clicou!");
    });

    $('.area').html(botao.render());

});