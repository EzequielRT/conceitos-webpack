import $ from 'jquery';

$(function(){

    $('#btn').on('click', function(){

        $('h1').html("Olá mundo ALTERADO!");

    });

});