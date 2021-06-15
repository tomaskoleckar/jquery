$(function(){
    let pomoc = "";


    $("#map ellipse").hide();
    $("#map rect").hide();


    $("#mesta").on('change', function(){
        $("#map ellipse").toggle(500);
    });


    $("#pamatky").on('change', function(){
        $("#map rect").toggle(500);
    }); 


    $("#map path").on('mouseover', function(){
        if ($("#kraje:checked").val()) {
            pomoc= $(this).css('fill');
            $(this).css('fill','red');  
            $(this).popover({
                placement: 'right',
                offset: '10%, -100',
                title: $(this).find('title').text()
            });          
        }
    });

    
    $("#map path").on('mouseout', function(){
        $(this).css('fill', pomoc);
    });


    function mestaJSON(mesta){
        $("#map ellipse").on('click', function(){
            $("#map rect").css('fill','blue');
            $("#map ellipse").css('fill','red');

            let id = $(this).attr('id');
            $(this).css('fill','yellow');
            let mesto = mesta.find(item => {return item.id == id});
            $('#info').fadeOut(1000, function() {$('#info').html(`<div class="col-12"><h2 class="bg-primary">${mesto.city} <small class="text-small">${new Intl.NumberFormat('cs-CS').format(mesto.population)} obv.</small></h2></div><div class="row"><div class="col-2 text-center"><img src="img/${mesto.sign}" class="img-fluid"></div><div class="col-10">${mesto.text}</div></div>`)});
            $('#info').fadeIn(1000);
        });  
    }
    fetch("data/mesta.json")
        .then(response => {
            return response.json()
        })
        .then(json => {
            mestaJSON(json);
        })
        .catch(function(error){
            console.error("Chyba: \n",error);
        })
    function pamatkyJSON(pamatky){
        $("#map rect").on('click', function(){
            let id = $(this).attr('id');
            $("#map rect").css('fill','blue');
            $("#map ellipse").css('fill','red');
            $(this).css('fill','yellow');
            let pamatka = pamatky.find(item => {return item.id == id});
            $('#info').slideUp(1000, function(){$('#info').html(`<div class="col-12"><h2 class="bg-info">${pamatka.name} - ${pamatka.location} <small class="text-small"></small></h2></div><div class = "row"><div class="col-3 text-center"><img src="img/${pamatka.photo}" class="img-fluid"></div><div class="col-9"><p>${pamatka.description}</p><p><a href="${pamatka.url}" target="_blank" class="btn btn-info">Podrobnosti</a></p></div></div>`)});
            $('#info').slideDown(1000);
        });    
    }
    fetch("data/pamatky.json")
        .then(response => {
            return response.json()
        })
        .then(json => {
            pamatkyJSON(json);
        })
        .catch(function(error){
            console.error("Chyba: \n",error);
        })
})