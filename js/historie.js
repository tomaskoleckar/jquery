// Vytvořte pole datových objektů v platných formátech JSON (otestujte jejich validitu např. zde: https://jsonformatter.curiousconcept.com/)
// Historické události
const events = [
    {
        "year":"1499",
        "event":"První Evropan na kolumbíjském území",
        "detail":"Prvním Evropanem, který dorazil ke kolumbijských břehům, byl Alonso de Hojeda, který roku 1499 přistál u Cabo de la Vela.",
        "url":"https://cs.wikipedia.org/wiki/D%C4%9Bjiny_Kolumbie",
        "evaluation":"true"
     },
     {
        "year":"1514",
        "event":"První Španělé",
        "detail":"První Španělé se na kolumbijském území usadili roku 1514. Roku 1525 bylo založeno město Santa Marta, 1. června 1533 založil španělský velitel Pedro de Heredia město Cartagena, na místě domorodé vesnice Calamarí. Cartagena rychle bohatla a rostla, mj. kvůli zlatu vyrabovanému z hrobek indiánské kultury Sinú. V touze po dalším zlatě započala poté kolonizace vnitrozemí.",
        "url":"https://cs.wikipedia.org/wiki/D%C4%9Bjiny_Kolumbie",
        "evaluation":"false"
     },
     {
        "year":"1538",
        "event":"Založení města Bogóta",
        "detail":"Conquistador Gonzalo Jimenéz de Quesada, který při tažení k jihu kolonizoval rozlehlou oblast podél řeky Magdalena, porazil kmen Čibčů a roku 1538 založil město Bogotu (Santa Fé de Bogotá). Nazval celou oblast El nuevo reino de Granada (Nové granadské království – podle maurského granadského království v jižním Španělsku, dobytého roku 1492). Dalšími významnými conquistadory byli Sebastián de Belalcázar a Nikolaus Federmann, Němec ve službách finančnického a šlechtického rodu Welserů, který se zasloužil o rozšíření pověsti o zlatém městě Eldorado.",
        "url":"https://cs.wikipedia.org/wiki/D%C4%9Bjiny_Kolumbie",
        "evaluation":"true"
     },
     {
        "year":"1717",
        "event":"Založení místokrálovství Nová Granada",
        "detail":"Roku 1717 Španělé založili místokrálovství Nová Granada, se sídlem v Bogotě, hlavním městě současné Kolumbie. Do tohoto celku spadala i Panama, Venezuela a Ekvádor.",
        "url":"https://cs.wikipedia.org/wiki/D%C4%9Bjiny_Kolumbie",
        "evaluation":"false"
     },
     {
        "year":"1819",
        "event":"Odboj proti španělské nadvládě",
        "detail":"Odboj proti španělské nadvládě vedli především Simón Bolívar a Francisco de Paula Santander v sousední Venezuele. Bolívar vstoupil se svými revolučními vojsky do Nové Granady v roce 1819. Po rychlé vojenské kampani, která skončila 7. srpna 1819 bitvou u Boyacá, Novou Granadu dobyl. Kongres 26 delegátů z Venezuely a Kolumbie, který do města Angostura (dnes Ciudad Bolívar) vojevůdce Bolívar svolal, pak vyhlásil republiku Velká Kolumbie, která zahrnovala všechna území místokrálovství Velká Granada (oficiální název zněl República de Colombia, přídavné jméno „Velká“ se k názvu státu přidává, aby se předešlo záměně se současnou Kolumbií).",
        "url":"https://cs.wikipedia.org/wiki/D%C4%9Bjiny_Kolumbie",
        "evaluation":"true"
     },
     {
        "year":"1880",
        "event":"Vznik Spojených států kolumbijských",
        "detail":"Vítězství liberálů ve volbách zásadně změnilo kolumbijskou společnost. Sami liberálové však postupně začali přehodnocovat svůj důraz na regionalismus, jehož byli dlouho symbolem. Zlom přišel někdy na počátku 80. let, kdy se stále více ukazovalo, že slabá federální moc brání zejména ve výstavbě velkých infrastrukturních projektů (již roku 1879 začala vláda připravovat stavbu Panamského průplavu a brzy bylo jasné, že na to její síly nestačí). V roce 1880 byl prezidentem zvolen liberál Rafael Núñez, který zahájil reformy vedoucí k posílení centrální vlády. Jeden z jeho prvních zákonů zmocnil vládu k založení centrální banky.",
        "url":"https://cs.wikipedia.org/wiki/D%C4%9Bjiny_Kolumbie",
        "evaluation":"false"
     },
     {
        "year":"1886",
        "event":"Založení Národní strany",
        "detail":"Núñez zůstal klíčovou osobností. Vystoupil z liberální strany a založil si novou Národní stranu. Ta byla silně etatistická a nacionalistická. Vládla v Kolumbii od roku 1886 až do roku 1909. Toto období bývá označováno jako La Regeneración. Byť začalo krizí, která dokonce narušila územní celistvost země.",
        "url":"https://cs.wikipedia.org/wiki/D%C4%9Bjiny_Kolumbie",
        "evaluation":"true"
     },
     {
        "year":"1930",
        "event":"Konec nacionalismu",
        "detail":"V roce 1930 se k moci po dlouhé vládě nacionalistů a konzervativců dostali liberálové. Ti udrželi vládu až do roku 1945. Provedli řadu změn. Bylo uzákoněno právo na stávku. Ženy sice zatím nezískaly volební právo, ale statut občana ano. Liberálové také výrazněji omezili tradiční protekcionismus a etatismus, což vyvolalo silné nepřátelství majitelů půdy, katolické církve, armády a obchodníků zapojených do protekcionistického systému. Monopol katolické církve byl omezen uzákoněním svobody vyznání. Zejména Alfonso López Pumarejo (vládl 1934–1938 a 1942–1945) se též hodně opíral o odbory a dělnictvo obecně. Liberálové čelili také jedné válce, s Peru v roce 1932, ale ukončili ji diplomatickou cestou roku 1934. Roku 1944 přišel pokus o převrat v Pastu, ale byl potlačen.",
        "url":"https://cs.wikipedia.org/wiki/D%C4%9Bjiny_Kolumbie",
        "evaluation":"false"
     },
     {
        "year":"1970",
        "event":"Začátek moci kartelů",
        "detail":"V 70. letech došlo v Kolumbii k velkému rozmachu obchodu s drogami. Přes neblaze proslulou Banco de la República si drogoví mafiáni své peníze legalizovali. Spekuluje se o tom, zda prezident Alfonso López Michelsen tento proces vlastně nevítal. Je totiž pravdou, že legalizovaný drogový kapitál v 70. letech silně dynamizoval kolumbijskou ekonomiku (spolu s vysokou cenou kávy na trzích). Důsledkem dodatečného kapitálu, který tekl nekontrolovaně do ekonomiky, však byla nevyhnutelně inflace. Hospodářský růst tak končil stávkami a sociálním neklidem.",
        "url":"https://cs.wikipedia.org/wiki/D%C4%9Bjiny_Kolumbie",
        "evaluation":"true"
     },

     

]

// Významné postavy
const heroes = [
    ]

// Články s historickými zajímavostmi
const articles = [
    ]

$(function(){
    $("h2").on("click", function(){
        $(this).parents(".row").next().toggle(1000);
    });
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
    /* Při najetí kurzoru myši na ikonu nebo odkaz dojde k následujícím akcím: */
        /* Ze všech řádků tabulky se odstraní dvě uvedené třídy */
        /* Tyto dvě třídy se přidají jen rodičovskému řádku (.parents("tr")) toho (this) prvku, na který zrovna ukázala myš */
        /* Nejprve zajistíme skrytí všech detailů událostí */
        /* Poté ukážeme pouze ten detail, který následuje po prvku, na který zrovna ukázala myš */
        /* Zde je použito tzv. traverzování - metodou parent() nejprve "traverzujeme" na rodiče aktivního prvku (odstavec), 
           poté metodou next() vybereme nejbližšího následujícího sourozence (odstavec s detailem) */
        /* Zároveň zde, ale i na jiných místech, využíváme tzv. řetězení (chaining), kdy můžeme volat několik metod v řadě */   

/* Druhá část stránky obsahuje seznam slavných postav a vedle něj se po kliknutí zobrazuje karta s podrobnějším profilem osobnosti */    
/* Nejprve jsou načtena jména osobností z proměnné heroes do seznamu upraveného pomocí tříd Bootstrapu */

    /* Funkce zajistí načtení dat o vybrané osobnosti a jejich správné zobrazení ve struktuře karty */
        /* Do proměnné hero se z pole heroes načte objekt o osobnosti, která byla vyhledána podle jména */
        /* Metoda html() umožnuje vložení HTML kódu (odpovídá innerHTML() v JS) */
        /* Metoda text() umožnuje vložení "holého" textu (odpovídá innerText() v JS) */
        /* Vyprázdní se oblast s galerií fotek spojených s danou osobností */
        /* V cyklu budou přidány nové bloky s fotkami osobnosti */

    /* Po načtení stránky bude jako aktivní označena první osobnost v seznamu */
    /* Pomocí připravené funkce, které je předáno jméno první osobnosti, se načtou data do profilové karty */

    /* Po kliknutí na jméno osobnosti v seznamu se provede následující sled akcí: */
        /* Nejprve všechny prvky seznamu zbavíme třídu active, abychom měli jistotu, že žádný z nich nebude zvýrazněn */
        /* A nyní přidáním třídy active zvýrazníme právě ten prvek (this), na který bylo kliknuto */
        /* Do proměnné person se uloží textová hodnota (tj. jméno osoby) toho (this) objektu, na který uživatel kliknul */
        /* Celý blok označený id portret se nejprve zaroluje a po dovršení této akce se zavolá tzv. callback funkce */
            /* Součástí callback funkce je změna údajů na profilové kartě podle jména aktuálně vybrané osobnosti (proměnná person) */
        /* Blok portret se během 1 sekundy vyroluje */

/* Třetí část stránky je věnována článkům z historie země */    
/* Články jsou načteny z proměnné articles a umístěny do responzivních bloků */

    /* Po načtení stránky jsou texty všech článků nejprve skryty */

    /* Po kliknutí na titulek článku se střídavě zobrazuje, nebo skrývá text článku */

    /* Po kliknutí na tlačítka likes a dislikes dojde k symbolickému zvýšení uvedených čísel */
        /* Metoda find() hledá zadaného potomka (podřízený/child prvek) zrovna aktivního elementu (this) */
        /* Metoda text() tady vystupuje jako tzv. getter - slouží k získání dat */
        /* Pomocí parseInt() převedeme získaný text na číslo a uložíme do proměnné likes */
        /* Metoda text() je zde použita ve formě setteru - hodnota se nastavuje */


    /* Animované střídavé zobrazování fotografií z galerií u jednotlivých článků */
})