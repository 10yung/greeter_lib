var g =  $G('andy', 'lin');

g.greet().setLang('es').greet(true).log().HTMLGreeting('greeting');

$('#login').click(function(){
    
    var loginGrtr = $G('andy', 'lin');

    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();
})
