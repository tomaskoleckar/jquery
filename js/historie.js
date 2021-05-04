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
    {
        "name":"Simón Bolívar",
        "birth":"24.7.1783",
        "death":"17.12.1830",
        "biography":"Simón José Antonio de la Santísima Trinidad Bolívar y Palacios Ponte Blanco, byl venezuelský generál a politik, jeden z hlavních představitelů jihoamerického boje za nezávislost na Španělsku. Simón Bolívar byl synem šlechtice španělského původu; otec mu zemřel ve věku tří let, matka, když mu bylo dvanáct. Ujal se ho strýc, se kterým se ale Simón pohádal a tři roky po smrti své matky se odstěhoval ke svému učiteli Simónu Rodríguezovi. Roku 1798 vstoupil Bolívar do venezuelské milice jako kadet. Roku 1799 odešel studovat do Španělska. Pokračoval do Francie, kde studoval francouzštinu, vedl rozmařilý život a stal se velkým přívržencem Napoleona Bonaparte. Roku 1802 se vrátil do Španělska, kde se oženil se svou příbuznou Maríí Teresou Rodríguezovou del Toro. Nakrátko se vrátil do vlasti v letech 1803–1804, nedlouho po příjezdu jeho manželka María Teresa zemřela. 2. prosince 1804 se Bolívar zúčastnil Napoleonovy korunovace. O rok později byl přizván mezi Svobodné zednáře. Do vlasti se definitivně vrátil roku 1807. Zapojil se do hnutí usilujícího o osvobození ze španělské nadvlády. Pro tuto činnost byl vypovězen na svůj statek, takže Venezuelské revoluce se přímo neúčastnil. Když roku 1810 junta v Caracasu prohlásila nezávislost, vyslala Bolívara jako vyjednavače do Anglie. Dne 2. března 1811 zasedal Venezuelský kongres. V roce 1812 se Bolívar účastnil neúspěšného povstání venezuelských republikánů pod vedením Franciska de Mirandy. Po Mirandově kapitulaci pak v Cartageně organizoval ozbrojené síly, které se 1813 zmocnily Caracasu; Bolívar získal titul Osvoboditel (El Libertador) – ten mu přiřkla 14. října 1813 Caracaská rada. V roce 1814 se mu nakrátko podařilo osvobodit i Bogotu, ale následujícího roku po opětovné porážce odešel hledat pomoc na Jamajku, později na Haiti. V roce 1816 se opět vrátil s vojskem a dobyl Angosturu (dnešní Ciudad Bolívar), která se stala sídlem revoluční vlády. Po vítězství u Boyacá 1819 byla velká část Nové Granady osvobozena a začlenila se do Velké Kolumbie (stát na území dnešní Venezuely, Kolumbie, Panamy a Ekvádoru), vytvořené na kongresu v Angostuře; Bolívar bojoval za svůj sen o jednotné Jižní Americe a stal se prezidentem Velké Kolumbie. Další vítězství nad španělskými vojsky v letech 1821 až 1822 upevnila Bolívarovo postavení. Bolívar přispěl k osvobození Peru a roku 1821 byl zvolen jeho prezidentem. Definitivní porážku Španělům zasadili v roce 1824 Bolívar u Junínu a José Antonio de Sucre u Ayacucha. Roku 1825 bylo Horní Peru na jeho počest nazváno Bolívie. Peru Bolívii uznalo a zaslalo jí návrh ústavy. Téhož roku předložil Bolívar svoji demisi na úřad prezidenta, nebyla však přijata. Nicméně jeho plán na vytvoření panamerické federace nebyl 1826 přijat kongresem latinskoamerických států v Panamě. Velkou Kolumbií zmítaly stále větší rozpory, které Bolívar nebyl s to zvládnout. Ve funkci vrchního vojenského velitele Venezuely potvrdil Josého Antonia Paéze a řekl mu, že má „právo odpovědět na nespravedlnost spravedlností a na zneužití síly odepřením poslušnosti“ Bogotskému kongresu. To se nelíbilo jeho místopředsedovi Santaderovi, Bolívarovu někdejšímu spojenci. V dopise z 16. března se Bolívar se Santaderem definitivně rozešel. V těchto letech dále sílily separatistické sklony ze stran Peru a Bolívie. Proto byl 27. srpna 1828 vydán dekret diktatury, který Bolívarovi přisoudila neomezenou moc. Bolívar zrušil úřad viceprezidenta a Santadera jmenoval velvyslancem ve Spojených státech. Přestože Santader úřad přijal, se svým odjezdem nespěchal, pravděpodobně kvůli chystanému atentátu na Bolívara, do kterého je zapleten. Atentát se uskutečnil 25. září 1828 a Bolívar z něj vyvázl díky své dlouholeté milence Manuele Sáenzové. Zrádcové byli odsouzeni k smrti, ale Santaderovi byl rozsudek samotným Bolívarem změněn pouze na vyhnanství. Zklamaný Osvoboditel odstoupil z venezuelského prezidentského úřadu. Za svého nástupce doporučil Sucreho, který však byl krátce na to zavražděn neznámo kým (pravděpodobně ze Santaderova popudu). Navrhl tedy Paéze, přičemž prohlásil, že jestli bude zvolen právě Paéz, dá se mu on – Bolívar – jako voják plně k dispozici. 20. ledna 1830 došlo ke zřízení Kolumbijského kongresu. Bolívar složil funkci kolumbijského prezidenta a dále podporoval Paéze. Zvolen však byl Joaquín Mosquera. Ten Bolívara požádal o podporu své vlády. Bolívar je sice znechucen, přesto mu pomoc nakonec poskytne, aby zabránil případnému krveprolití. Vyčerpán a zklamán poté odešel do ústraní. Bolívar, nemocný tuberkulózou, zemřel 17. prosince 1830 na statku San Pedro Alejandrino. Krátce před smrtí ještě řešil situaci ohledně nově vznikajícího Ekvádoru.    ",
        "portraits":[
            "simon.jpg"
        ],
        "online":"https://cs.wikipedia.org/wiki/Sim%C3%B3n_Bol%C3%ADvar."
     },
     {
        "name":"Alonso de Hojeda",
        "birth":"?.?.1466",
        "death":"?.?.1515",
        "biography":"Alonso de Hojeda nazývaný též Ojeda byl španělský mořeplavec a conquistador. V roce 1493 - 1496 se účastnil druhé výpravy Kryštofa Kolumba k břehům Nového světa. Při plavbě na Haiti objevil zlatonosná pole u Cibao a znovu proslul krutostí při podrobování a vyvražďování místních Indiánů. V roce 1499 byl velitelem výpravy, které se zúčastnil také Juan de la Cosa jako navigátor a kartograf. Účastníkem výpravy byl též florentský mořeplavec Amerigo Vespucci, podle něhož byl nazván nový kontinent Amerikou. Výprava objevila pobřeží Guayany nazvané podle indiánského kmene Guanna a pobřeží, které Hojeda nazval Venezuela (Malé Benátky). Dále objevil současně s Pinzónem deltu Orinoka, přistál na ostrově Trinidad a Tobago a poté na Curaçau. Objevil záliv u dnešního Maracaiba a dostal se až k mysu La Vela v Kolumbii. Odtud se vrátil na Haiti, kde se zúčastnil spiknutí proti Kolumbovi. Poté se vrátil domů do Španělska. Proplul podél neznámých břehu celkem více než 3000 kilometrů. ",
        "portraits":[
            "hojeda.jpg"
        ],
        "online":"https://cs.wikipedia.org/wiki/Alonso_de_Hojeda."
     },
     {
        "name":"Gonzalo Jimenéz de Quesada",
        "birth":"?.?.1509",
        "death":"16.2.1515",
        "biography":"Gonzalo Jiménez de Quesada byl španělský conquistador, cestovatel, právník a zakladatel dnešního kolumbijského hlavního města Bogoty. Byl synem židovské rodiny, která konvertovala ke křesťanství. Mezi conquistadory byl výjimkou, protože pro své právnické vzdělání uměl číst a psát. V roce 1535 poprvé připlul do Santa Marty v Kolumbii, kde se ujal funkce právního starosty (španělsky Justicia Mayor). Hned následující rok dostal za úkol prozkoumat řeku Magdaléna a najít území zlata Eldorado. Dne 6. dubna 1536 se po toku řeky s 800 muži vydal na jih až se dostal na starou indiánskou solnou cestu po níž se dostal na náhorní plošinu u Bogoty. Během této cesty na následky nemocí a změny klimatu zemřelo přes 500 mužů, přesto se mu podařilo dobýt a podrobit státy Čibčů a získat informace o zpracování zlata a zlatnickém umění domorodých obyvatel. Dne 6. srpna 1538 založil na území Nové Granady město Santa Fé de Bogota. Na tomto území získal svou dobyvatelskou činností velké množství smaragdů a zlata pro Španělskou Korunu. Ve stejném roce na toto území přišel španělský conquistador Sebastián de Belalcázar a Němec Nikolaus Federmann. Oba se museli vzdát nároků na kořist, protože přišli až jako druzí. Gonzalo Jiménez de Quesada je však přesvědčil, aby se všichni společně vrátili do Španělska. Atmosféra v rodném Španělsku nebyla pro conquistadory příznivá a tak po získání titulu maršála Nové Granady se vrací do Jižní Ameriky, kde se snažil najít bájné Eldorado. V roce 1561 podnikl dobyvatelskou cestu do oblasti povodí řeky Orinoco. Pro neúspěch v hledání Eldoráda se vydává v letech 1569 až 1572 se 400 Španěly, 1500 domorodci, 1100 koni a 8 kněžími znovu na velkou výpravu při které pronikl až k soutoku řek Guaviare a Orinoco. Další postup vyžadoval stavbu lodí na které nezbývalo dostatek financí a tak se musel vrátit se zbytkem mužů do Bogoty, kam dorazilo z celé výpravy pouze 64 Španělů, 4 Indiáni, 18 koní a 2 kněží. Celá výprava byla velmi drahý projekt, stála mnoho životů a Gonzalo Jiménez de Quesada zbankrotoval a upadl do chudoby. Ve stáří onemocněl leprou a zemřel v obci Suesca nedaleko města Mariquita. Je pohřben v bogotské katedrále.",
        "portraits":[
            "gonzalo.jpg"
        ],
        "online":"https://cs.wikipedia.org/wiki/Gonzalo_Jimen%C3%A9z_de_Quesada."
     },
     {
        "name":"Pablo Escobar",
        "birth":"1.12.1949",
        "death":"2.12.1993",
        "biography":"Pablo Emilio Escobar Gaviria byl největším kolumbijským drogovým baronem. Escobar nashromáždil takové bohatství, že jej v roce 1989 zařadil časopis Forbes na osmé místo v žebříčku nejbohatších lidí planety. Jeho majetek byl odhadován na více než 30 miliard dolarů. Escobar začal svoji kriminální kariéru už jako náctiletý. Poprvé byl obviněn ve dvaceti letech z krádeží aut, později kradl a zase prodával náhrobní kameny (Escobar to však za svého života vehementně popíral). Následoval přechod k lukrativnějším aktivitám, začal obchodovat s marihuanou, později s kokainem. V průběhu sedmdesátých let vytvořil obrovské drogové impérium. V době vrcholu svých aktivit vydělával až 60 milionů amerických dolarů denně. V průběhu osmdesátých let se jeho drogová síť stala proslulou i na mezinárodním poli. Medellínský kartel kontroloval většinu drog mířících do Mexika, Portorika a Dominikánské republiky. Kokain povětšinou pocházel z Peru a Bolívie, koka z Kolumbie v té době nebyla dostatečně kvalitní. Escobarův produkt se rychle rozšířil do obou Amerik a pravděpodobně vznikla drogová síť i v Asii. Medellínský kartel je také dobře známý jako tzv. město samopalů. Escobar uplácel mnoho státních úředníků, soudců a politiků. Nepohodlné společníky často sám odstranil. Pro Kolumbii těchto let byla příznačná korupce, zastrašování, únosy a vydírání. Escobar používal velmi efektivní strategii a řídil se příslovím (ze španělštiny: Plata o Plomo) „stříbro nebo olovo“ – úplatek nebo smrt. Během volební kampaně nechal zabít tři kandidáty na kolumbijského prezidenta. Je odpovědný za bombu umístěnou v letadle letu Avianca 203 a za bombu umístěnou v budově bezpečnostních složek v Bogotě v roce 1989. Některé analýzy naznačují, že byl i za útokem na Kolumbijský nejvyšší soud v roce 1985, který vedly levicové guerilly. Výsledkem útoku byla smrt poloviny soudců nejvyššího soudu. Medellínský kartel byl ve válce se svým rivalem kartelem z Cali po většinu své existence. Na svém vrcholu Medellínský kartel kontroloval zhruba 80 procent obchodu s kokainem. Disponoval rozsáhlou flotilou lodí, letadel a drahých aut. Díky téměř neomezenému přílivu peněz měl v té době pod kontrolou rozsáhlá území. Odhaduje se, že příjmy Medellínského kartelu dosahovaly na vrcholu ročně kolem 23 miliard dolarů. Díky ohromnému množství drog, které se mu dařilo úspěšně pašovat přes Bahamy do USA, se z něj stal nepřítel Spojených států a Kolumbie. Naproti tomu v Medellínu byl považován za hrdinu. Měl velmi dobré vztahy s kolumbijským chudým obyvatelstvem. Po celý život byl velkým sportovním fanouškem a sponzoroval malé fotbalové kluby ve městě. Pasoval se do role Robina Hooda a často rozdával peníze chudým. Obyvatelé Medellína často Escobarovi pomáhali – sloužili mu jako ochranka, kryli ho před úřady a byli ochotni pro něj udělat cokoliv. V roce 1991 vyhlásil díky nátlaku komunistů a orgánů místní správy konec násilí, snažil se tak zabránit vydání do Spojených států a odstranění znepřátelenými kartely. Vzdal se místní vládě a nechal se zavřít do luxusního vězení La Catedral, které si mohl sám postavit. S kolumbijskou vládou uzavřel dohodu, že zde bude pobývat pět let, vláda ho za to na oplátku nevydala do Spojených států. Nicméně opravdové vězení to nebylo a Escobar měl relativní volnost. Často byl viděn při nákupech v Medellínu, nebo na fotbalových utkáních. Poté, co byly v místních mediích zveřejněny fotografie jeho opulentního vězení a vyšlo najevo, že nechal zabít několik obchodníků, kteří k němu přijeli na schůzku, se veřejné mínění k Escobarovi definitivně obrátilo zády. 22. července 1992 se vláda pokusila Escobara přemístit do opravdového vězení. Escobarovi se podařilo utéct a hrozilo mu vydání do Spojených států. V roce 1992 se jednotky Spojených států Delta Force a později Navy SEALs podílely na honbě za Escobarem a pomáhaly s výcvikem kolumbijských speciálních jednotek. Byla vytvořena speciální kolumbijská jednotka s cílem vyhledání a předání Escobara spravedlnosti. Konflikt mezi Escobarem na jedné straně a Spojenými státy a Kolumbijskou vládou na straně druhé se rozšířil o skupinu Escobarových nepřátel a obětí, které si za svoji krvavou kariéru nadělal – šlo o takzvané Los Pepes. Skupina se mstila na Escobarových příbuzných a příznivcích, celkem jich bylo zabito přes tři sta. Někteří pozorovatelé soudí, že s Los Pepes spolupracovaly zpravodajské služby Spojených států a Kolumbie. Jedním z vůdců Los Pepes byl bývalý člen Medellínského kartelu Diego Murillo známý jako Don Berna. Údajně to byl on, kdo si vyměňoval informace se zpravodajskými službami, ale tyto informace nejsou ověřeny. Válka proti Escobarovi skončila 2. prosince roku 1993, kdy se Pablo Escobar snažil uniknout před pátracími jednotkami. Díky technologiím dodaným Spojenými státy se kolumbijským technikům podařilo Escobara zaměřit ve středostavovské medellínské čtvrti. Následovala přestřelka, ale jak byl opravdu zabit, není zcela jasné. Escobar byl zahnán na střechu, kde byl zasažen do zad a do nohy, smrtící ránu však dostal za ucho, údajně od členů kolumbijské policie. Panují dohady, že Pabla Escobara zastřelil odstřelovač z Delta Force. Podle jiné verze spáchal Escobar sebevraždu. Svým blízkým přátelům se údajně jednou svěřil s tím, že než padnout do rukou spravedlnosti, radši se sám zastřelí přímo za ucho. Po Escobarově smrti se Medellínský kartel rozpadl a velmi brzy začal obchodu s kokainem dominovat kartel z Cali, jehož vůdci pak byli v polovině devadesátých let zabiti nebo chyceni.",
        "portraits":[
            "pablo1.jpg",
            "pablo2.jpg"
        ],
        "online":"https://cs.wikipedia.org/wiki/Pablo_Escobar."
     },
     {
        "name":"Rodrigo Lara",
        "birth":"11.8.1946",
        "death":"30.4.1984",
        "biography":"Rodrigo Lara Bonilla byl kolumbijský právník a politik, ve vládě prezidenta Betancura zastával úřad ministra spravedlnosti. Na tuto pozici dosáhl již ve věku 38 let.<br> Než se stal ministrem spravedlnosti, působil v politice jako starosta svého rodného města (poprvé byl starostou zvolen ve 23 letech), senátor i velvyslanec. Ihned po svém nástupu do funkce začal vyšetřovat vliv kartelů na kolumbijský politický systém, navzdory bezpočtu výhrůžek smrtí nebo nabídnutých úplatků. Larovým nejbližším podporovatelem byl jeho kolega z téže strany, Luis Carlos Galán. Oba otevřeně odsuzovali drogové kartely a bojovali s kartely přímo, Lara ze své pozice zadržel prostředky i více než stovku letadel medellínského kartelu a zdiskreditoval třicet politiků podporovaných drogovými kartely, podobné razie probíhaly i v oblasti sportu. Byl považován za jednu z největších osobností války proti drogám.<br> Lara Bonilla se dostal do sporu se senátorem Escobarem a otevřeně ho kritizoval za spojení s kartely, doslova ho vyhnal z kolumbijského kongresu. Ten prohlásil ministra za stoupence amerického imperialismu. Jairo Ortega, Escobarův straník, tehdy také obvinil ministra spravedlnosti ze spolupráce s drogovými překupníky. Když se Ortegovo obvinění ukázalo jako křivé, kolumbijské vládě byly odhaleny výsledky vyšetřování medellínského kartelu a Escobar byl z kongresu vyloučen. Lara poté nařídil jeho trestní stíhání, stejně jako stíhání dalších drogových bossů, jako byl například Carlos Lehder.<br> Několik měsíců po nástupu do úřadu přerostly vyhrůžky smrtí míru, kterou mohl Lara ignorovat. Napíchnuté telefony v ministrově domě i úřadu dokázaly, že skutečně existuje mafií podporované spiknutí, které má za cíl ministra spravedlnosti zavraždit. Zanedlouho poté byl zavražděn právník Gonzalez Vidales, specializujicí se na boj proti drogám, a Lara dostal zprávu, že je na řadě. Vláda tehdy rozhodla o jeho odvolání z funkce a přeložení na pozici velvyslance v Československé socialistické republice. Na zařízení transferu si československá strana vyhradila 30 dní. Na konci dubna však byl Larův mercedes přepaden dvěma útočníky na motorce. Ministr spravedlnosti zemřel na následky střelných zranění, jeden z útočníků, Ivan Dario Guisado, byl také na místě zabit. Druhý z útočníků, Byron Velasquez, byl zadržen a přiznal, že za vraždu ministra obdržel dvacet tisíc dolarů. Tím, kdo si vraždu objednal, byl právě bývalý senátor Escobar.<br> Rodrigo Lara byl jednou z prvních významných obětí narkoterorismu, který nastolil Medellínský kartel. Zanechal po sobě ženu a tři syny. Po jeho smrti započali prezident Belisario Betancur Cuartas a ministr Enrique Parejo González oficiální válku proti organizovanému zločinu v Kolumbii a prosadili kontroverzní zákon o vydávání drogových překupníků do USA. Zákon stavěl na plánu ministra Lary vytvořit mezinárodní smlouvu, která by sjednotila jednotlivé země v boji proti drogovým překupníkům. Právě existence tohoto zákona se v budoucnosti stala předmětem spekulací a vleklých sporů, které stály tisíce životů.",
        "portraits":[
            "lara.jpg"
        ],
        "online":"https://cs.wikipedia.org/wiki/Rodrigo_Lara."
     },
     
    ]

// Články s historickými zajímavostmi
const articles = [
    {
        "title":"Zabití Pabla Escobara",
        "text":"V roce 1992 se jednotky Spojených států Delta Force a později Navy SEALs podílely na honbě za Escobarem a pomáhaly s výcvikem kolumbijských speciálních jednotek. Byla vytvořena speciální kolumbijská jednotka s cílem vyhledání a předání Escobara spravedlnosti. Konflikt mezi Escobarem na jedné straně a Spojenými státy a Kolumbijskou vládou na straně druhé se rozšířil o skupinu Escobarových nepřátel a obětí, které si za svoji krvavou kariéru nadělal – šlo o takzvané Los Pepes. Skupina se mstila na Escobarových příbuzných a příznivcích, celkem jich bylo zabito přes tři sta. Někteří pozorovatelé soudí, že s Los Pepes spolupracovaly zpravodajské služby Spojených států a Kolumbie. Jedním z vůdců Los Pepes byl bývalý člen Medellínského kartelu Diego Murillo známý jako Don Berna. Údajně to byl on, kdo si vyměňoval informace se zpravodajskými službami, ale tyto informace nejsou ověřeny. Válka proti Escobarovi skončila 2. prosince roku 1993, kdy se Pablo Escobar snažil uniknout před pátracími jednotkami. Díky technologiím dodaným Spojenými státy se kolumbijským technikům podařilo Escobara zaměřit ve středostavovské medellínské čtvrti. Následovala přestřelka, ale jak byl opravdu zabit, není zcela jasné. Escobar byl zahnán na střechu, kde byl zasažen do zad a do nohy, smrtící ránu však dostal za ucho, údajně od členů kolumbijské policie. Panují dohady, že Pabla Escobara zastřelil odstřelovač z Delta Force. Podle jiné verze spáchal Escobar sebevraždu. Svým blízkým přátelům se údajně jednou svěřil s tím, že než padnout do rukou spravedlnosti, radši se sám zastřelí přímo za ucho. Po Escobarově smrti se Medellínský kartel rozpadl a velmi brzy začal obchodu s kokainem dominovat kartel z Cali, jehož vůdci pak byli v polovině devadesátých let zabiti nebo chyceni.",
        "date":"2.12.1993",
        "source":"https://cs.wikipedia.org/wiki/Pablo_Escobar",
        "gallery":[
           "escobardeath.jpg"
        ]
     },
     {
        "title":"Založení města Bogotá",
        "text":"Bogotá byla založena jako hlavní město Království Nové Granady 6. srpna 1538 španělským conquistadorem Gonzalem Jiménezem de Quesada poté, co dobyl civilizaci Muisků. Tento kmen původně obýval oblast současných departmentů Boyacá a Santander a byl typický svojí mírumilovností. Mluvili jazykem čibča. Název „Bogotá“ vznikl zřejmě z nepřesné španělské výslovnosti jména blízké muisské vesnice Bacatá. Význam tohoto slova není jistý: dle jedné teorie znamená v čibče „obdělávání půdy“, podle druhé zase „paní And“. Také mohlo jít o jméno kasika, který zde vládl před příjezdem Španělů. Když se pak z osady roku 1540 oficiálně stalo město, získalo název Santafé („svatá víra“).",
        "date":"1538",
        "source":"https://cs.wikipedia.org/wiki/Bogot%C3%A1",
        "gallery":[
           "bogota.jpg"
        ]
     },
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
})