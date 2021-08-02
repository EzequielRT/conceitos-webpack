import $ from 'jquery';
import './css/style.css';

$(function(){

    $('#btn').on('click', function(){
        $('h1').html("Olá mundo ALTERADO!");

        $(this).addClass('botao');
    });

});