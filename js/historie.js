// Vytvořte pole datových objektů v platných formátech JSON (otestujte jejich validitu např. zde: https://jsonformatter.curiousconcept.com/)
// Historické události
const events = [
]

// Významné postavy
const heroes = [
    ]

// Články s historickými zajímavostmi
const articles = [
    ]

$(function(){

/* Po kliknutí na některý z nadpisů h2 se střídavě zobrazí nebo zmizí blok (div) pod nadpisem */    
        /* $(this) = selektor, který ukazuje na právě aktivní objekt, v tomto případě tedy na jeden z nadpisů h2, na který bylo kliknuto */
        /* Následuje tzv. traverzování: */
        /* parents(".row") - hledá mezi nadřízenými prvky (rodiči) první, který obsahuje třídu .row */
        /* next() - ukáže na nejbližšího sourozence; v tomto případě další div */
        /* toggle() - metoda, která střídavě skrývá|odkrývá vybrané prvky */

/* V první části je tabulka s významnými událostmi z dějin dané země */    
/* Data jsou do tabulky načtena z proměnné events */
/* Všimněte si, že v bloku .event-evaluation je použit ternární operátor, který rozhoduje o zobrazení ikony + nebo -*/
        /* Metoda append() přidává nové prvky do vybrané částí stránky (vždy za už existující obsah) */

    /* Po načtení stránky se skryjí všechny detaily událostí */

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