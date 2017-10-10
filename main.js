
//AJAX PARA EL LOGIN DE USUARIOS
jQuery(document).on('submit','#formlg',function(event){
    event.preventDefault();
    jQuery.ajax({
        url:'./REGISTROS/iniciarSesion.php',
        type:'POST',
        dataType:'json',
        data: $(this).serialize(),
        beforeSend:function(){
            $('.botonlg').val('Comprobando...');
        }
    })
    .done(function(respuesta){
        console.log(respuesta);
        if(!respuesta.error){
           setTimeout(function(){
                location.href = 'user.php';
                $('.botonlg').val('Iniciar Sesión');
           },1000);
        }else{
            $('.errorInicio').slideDown('slow');
            setTimeout(function(){
                $('.errorInicio').slideUp('slow');
            },5000);
            $('.botonlg').val('Iniciar Sesión');
        }
    })
    .fail(function(resp){
        console.log(resp.responseText);
    })
    .always(function(){
        console.log("complete");
    })
});

//AJAX PARA EL REGISTRO DE USUARIOS
jQuery(document).on('submit','#formReg',function(event){
    event.preventDefault();
    jQuery.ajax({
        url:'./REGISTROS/registrarse.php',
        type:'POST',
        dataType:'json',
        data: $(this).serialize(),
        beforeSend:function(){
            $('.botonReg').val('Registrando...');
        }
    })
    .done(function(respuesta){
        console.log(respuesta);
        if(!respuesta.error){
           setTimeout(function(){
                location.href = 'user.php';
                $('.botonReg').val('Registrando');
           },1000);
        }
        else if(respuesta.error && respuesta.incompleto){
            $('.errorRegistroIncompleto').slideDown('slow');
            setTimeout(function(){
                $('.errorRegistroIncompleto').slideUp('slow');
            },5000);
            $('.botonReg').val('Registrar');
        }
        else if(respuesta.error){
            $('.errorRegistro').slideDown('slow');
            setTimeout(function(){
                $('.errorRegistro').slideUp('slow');
            },5000);
            $('.botonReg').val('Registrar');
        }
    })
    .fail(function(resp){
        console.log(resp.responseText);
    })
    .always(function(){
        console.log("complete");
    })
});

//AJAX PARA AGREGAR EVENTOS
jQuery(document).on('submit', '#addevent', function(event){
    event.preventDefault();
    
    var data = new FormData(this);
    
    jQuery.ajax({
        url:'./EVENTOS/eventos.php',
        type:'POST',
        data:data,
        contentType:false,
        processData:false,
    })
    .done(function(respuesta){
        console.log(respuesta);
        if(!respuesta.error){
            $('.botonEv').val('AGREGANDO...');
            setTimeout(function(){
                $('.botonEv').val('AGREGAR EVENTO');
                $('#evadded').fadeIn(1500);
            },2500);
            setTimeout(function(){
                $('#evadded').fadeOut(1500);
                $('#loader').fadeIn(1000);
                $('.segundopreloader').slideDown(500);
            }, 4000);
            setTimeout(function(){
                $('#loader').fadeOut(1000);
                $('.segundopreloader').slideUp(500);
            },5500);
            setTimeout(function(){
                $('#editarEventos').load('misEventos.php #editarEventos');
            },6000);
        }
        else{
            $('.errornewev').fadeIn(1500);
            setTimeout(function(){
                $('.errornewev').fadeOut(1500);
            }, 5000);
        }
    })
    .fail(function(resp){
        console.log(resp.responseText);
    })
    .always(function(){
        console.log("complete");
    })
});
//AJAX PARA AGREGAR ORGANIZADORES ---->
jQuery(Document).on('submit', '#addOrganizador', function(event){
    event.preventDefault();
    jQuery.ajax({
        url:'./EVENTOS/addOrganizador.php',
        type:'POST',
        dataType:'json',
        data: $(this).serialize(),
        beforeSend:function(){
           
        }
    })
    .done(function(respuesta){
        console.log(respuesta);
        if(!respuesta.error){
            $('.botonOrg').val('AGREGANDO...');
            setTimeout(function(){
                $('.botonOrg').val('AGREGAR ORGANIZADOR');
                $('#orgadded').fadeIn(1500);
            },2500);
            setTimeout(function(){
                $('#orgadded').fadeOut(1500);
            }, 4000);
        }
        else{
            $('.errornewev').fadeIn(1500);
            setTimeout(function(){
                $('.errornewev').fadeOut(1500);
            }, 5000);
        }
    })
        .fail(function(resp){
        console.log(resp.responseText);
    })
    .always(function(){
        console.log("complete");
    })
});

//AJAX PARA AGREGAR REPARTIDORES ------->
jQuery(Document).on('submit', '#addRepartidor', function(event){
    event.preventDefault();
    jQuery.ajax({
        url:'./EVENTOS/addRepartidor.php',
        type:'POST',
        dataType:'json',
        data: $(this).serialize(),
        beforeSend:function(){
           
        }
    })
    .done(function(respuesta){
        console.log(respuesta);
        if(!respuesta.error){
            $('.botonRp').val('AGREGANDO...');
            setTimeout(function(){
                $('.botonRp').val('AGREGAR REPARTIDOR');
                $('#rpadded').fadeIn(1500);
            },2500);
            setTimeout(function(){
                $('#rpadded').fadeOut(1500);
                $('.segundopreloader').slideDown(500);
            }, 4000);
            setTimeout(function(){
                $('.segundopreloader').slideUp(500);
            },5500);
            setTimeout(function(){
                $('#editarEventos').load('misEventos.php #editarEventos');
            },6000);
        }
        else{
            $('.errornewev').fadeIn(1500);
            setTimeout(function(){
                $('.errornewev').fadeOut(1500);
            }, 5000);
        }
    })
        .fail(function(resp){
        console.log(resp.responseText);
    })
    .always(function(){
        console.log("complete");
    })
});

function outside(){
    $('.modalredir').fadeOut(1000);
    $('.cuerpomodredir').fadeOut(1000);
}
