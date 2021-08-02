import $ from 'jquery';
import './css/style.css';
import img1 from './images/img1.jpg';

$(function(){

    $('#btn').on('click', function(){
        $('h1').html("Olá mundo ALTERADO!");

        $(this).addClass('botao');

        $('#imagem').attr('src', img1);
    });

});