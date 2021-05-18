// Vytvořte pole datových objektů v platných formátech JSON (otestujte jejich validitu např. zde: https://jsonformatter.curiousconcept.com/)
// Historické události
// Významné postavy
// Články s historickými zajímavostmi

$(function(){
    $("h2").on("click", function(){
        $(this).parents(".row").next().toggle(1000);
    });

    function eventsJson(events){


        events.forEach((event)=>{
            $("#udalosti tbody").append(`<tr>
                <td class="event-year">${event.year}</td>
                <td>
                <p class="event-name"><i class="fas fa-chevron-down"></i> <a href="${event.url}" target="_new">${event.event}</a></p>
                <p class="event-detail">${event.detail}</p>
                </td>            
                <td class="event-evaluation">${(event.evaluation == "true") ? '<i class="fas fa-plus-circle text-success"></i>' : '<i class="fas fa-minus-circle text-danger"></i>'}</td>
            </tr>`);
        });
        $(".event-detail").hide();
        $(".event-name i, .event-name a").mouseover(function(){
            $("#udalosti tr").removeClass("bg-secondary text-white");
            $(this).parents("tr").addClass("bg-secondary text-white");
            $(".event-detail").hide();   
            $(this).parent().next().show(500);
        });
    }
    
    fetch("../js/events.json")
        .then(response => {
            return response.json()
        })
        .then(json => {
            eventsJson(json);
        })
        .catch(function(error){
            console.error("Chyba: \n",error);
        })

    function heroesJson(heroes){
        heroes.forEach((hero)=>{
            $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action list-group-item-primary">${hero.name}</li>`);
        });
        function fillPersonCard(person) {
            let hero = heroes.find(item => {return item.name === person});
            $(".card-header").html(`<i class="fas fa-star-of-life"></i> <b>${hero.birth}</b> - <i class="fas fa-cross"></i> <b>${hero.death}</b>`);
            $(".card-title").text(hero.name);
            $(".gallery").empty();
            for (let i = 0; i < hero.portraits.length; i++) {
                $(".gallery").append(`<div class="col-sm-4"><a href="#"><img src="images/${hero.portraits[i]}" alt="" class="img-fluid"></a></div>`);        
            }
            $(".card-text").html(hero.biography);
            $(".card-footer").html(`Odkaz: <a href="${hero.online}">${hero.online}</a>`);
        }
        $("#postavy li:first").addClass('active');
        fillPersonCard(heroes[0].name);
        $("#postavy li").on("click", function(){
            $("#postavy li").removeClass("active");
            $(this).addClass("active");        
            let person = $(this).text();
            $("#portret").slideUp(1000, function(){
                fillPersonCard(person);
            });
            $("#portret").slideDown(1000);
        });
    }
    fetch("../js/heroes.json")
        .then(response => {
            return response.json()
        })
        .then(json => {
            heroesJson(json);
        })
        .catch(function(error){
            console.error("Chyba: \n",error);
        })

    function articlesJson(articles){
        articles.forEach((article)=>{
            $("#zpravodaj").append(`    
            <div class="col-sm-6 mt-3 pb-3 border-bottom">
            <article>
                <figure>
                <img src="images/${article.gallery[0]}" alt="${article.title}" class="img-fluid">
                </figure>
                <h3>${article.title}</h3>
                <div class="article-text">
                    <p>${article.text}</p>
                    <p><a href="${article.source}" target="_new">Celý článek</a></p>
                </div>
            </article>
            </div>        
        `);    
        });
        $(".article-text").hide();
        $("#zpravodaj h3").on("click", function(){
            $(this).next(".article-text").toggle();
        });
        $(".likes").on("click", function(){
            let likes = parseInt($(this).find("span").text());
            $(this).find("span").text(likes + 1);
        });
        $(".dislikes").on("click", function(){
            let dislikes = parseInt($(this).find("span").text());
            $(this).find("span").text(dislikes + 1);
        });
    }
    fetch("../js/articles.json")
        .then(response => {
            return response.json()
        })
        .then(json => {
            articlesJson(json);
        })
        .catch(function(error){
            console.error("Chyba: \n",error);
        })
})