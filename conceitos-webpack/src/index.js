import $ from 'jquery';
import './css/teste.scss';
import Botao from './components/botao/index';
import img1 from './images/img1.jpg';

$(function(){

    let botao = new Botao();
    botao.setTitle('Testador');
    botao.setClick(function(){
        alert("Clicou!");
    });

    $('.area').html(botao.render());

});