<!-- Il layout è stato suddiviso nel seguente modo:
    Dihep: Header e Footer
    Luca: Main (Carosello e ricerca auto)
    Francesco: Main (Card auto e Info buy/sell)
    Davide: Main(Customer e recente)

Utilizziamo Bootstrap e FontAwesome:
    FontAwesome: <script src="https://kit.fontawesome.com/ee64cb3605.js" crossorigin="anonymous"></script>
    Bootstrap CSS: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.rtl.min.css" integrity="sha512-VNBisELNHh6+nfDjsFXDA6WgXEZm8cfTEcMtfOZdx0XTRoRbr/6Eqb2BjqxF4sNFzdvGIt+WqxKgn0DSfh2kcA==" crossorigin="anonymous" referrerpolicy="no-referrer">
    Bootstrap Javascript: <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

Componenti: 
    PageHeader: Navbar (Dihep)

    PageMain: Carosello, SearchCar( Luca)
              CardAuto, InfoCar (Francesco)
              Customer e Recent (Davide)

    PageFooter: Footer (Dihep)
(I componenti PageHeader - PageFooter li abbamo tutti, i sotto componenti invece li prendiamo da github)

Utilizziamo uno store.js per immagazzinare i vari dati.

Tutte le immagini le abbiamo messe nella cartella src/assets, creiamo le cartelle Icone e Img

Lo store.js lo abbiamo messo in src/data/

Da chiedere: la questione del me e ms che sono invertiti


Il carosello è stato impostato seguendo l'impostazione del componente che ci è stato fornito. 
    Al click viene cambiata l'immagine e anche il titolo, con una transizione di 0,5 secondi per rendere il tutto più bello esteticamente.
    I dati sono stati aggiunti tutti andando ad utilizzare lo store.js che abbiamo in comune.

La searchCar è stato impostata seguendo l'impostazione del componente che ci è stato fornito.
    I dati sono stati aggiunti tutti andando ad utilizzare lo store.js che abbiamo in comune. -->
<!-- ------------------------ SPIEGAZIONE PROGETTO ---------------------------- -->

Replica del sito garantiwebtasarim.com/wordpress/autocar/



Sviluppatori: Dihep, Francesco, Luca, Davide



Framework e librerie utilizzate: Vue.js, Vite, Bootstrap, FontAwesome



Struttura dati:
-Data: Store.js (contiene tutti i dati necessari per il funzionamento dei componenti (array, oggetti, variabili) visibili a tutti i componenti)
-Immagini: contenute tutte in /assets/img o icone



Struttura componenti:
-PageHeader
.....AutocarNavbar ( Developed by: Dihep)



-PageMain
.....Carosello ( Developed by: Luca)
.....SearchCar ( Developed by: Luca)
.....CardAuto ( Developed by: Francesco)
.....InfoCar ( Developed by: Francesco)
.....Customer ( Developed by: Davide)
.....Recent ( Developed by: Davide)



-PageFooter
.....AutocarFooter ( Developed by: Dihep)



Spiegazione funzionalità dei componenti:
AutocarNavbar:


Header della pagina: una navbar per la navigazione della pagina, con logo, info, link a sezioni e funzionalità del sito ed un hamburger menu per l'apertura di un pannello (offcanvas) con informazioni aggiuntive. L'inserimento di link ed informazioni è automatizzato tramite la struttura dati.


Carosello:
Il carosello è stato impostato seguendo l'impostazione del componente che ci è stato fornito.
Al click viene cambiata l'immagine e anche il titolo, con una transizione di 0,5 secondi per rendere il tutto più bello esteticamente.
I dati sono stati aggiunti tutti andando ad utilizzare lo store.js che abbiamo in comune.


SearchCar:
La searchCar è stato impostata seguendo l'impostazione del componente che ci è stato fornito.
I dati sono stati aggiunti tutti andando ad utilizzare lo store.js che abbiamo in comune.

CardAuto:
creo il container boxato con w-75
creo la row con dentro una colonna che con un ciclo v-for faccio ciclare nell'array CardList(store.js), stampandomi ad ogni giro gli elementi necessari alla card
mentre le img le recupero attraverso il metodo getImg()
infine una colonna centrata che funge da bottone.


InfoCar:
creo il container boxato con w-75
creo la row con 2 colonna centrate
la col di sinistra contiene la prima img roteante, con z-index in modo da stare come background; successivamente la seconda img della macchina(in absolute-p), con due box arrotondati e posti nella posizione corretta con absolut-p e con due contatori che partono nel momento in cui l'oggetto e` visibile nella viewport.
mentre la col di destra contiene del testo e qualche img , affiancate al testo con d-flex .
infine una col-6 che funge da bottone.


Customer:


Sezione che contiene le card dei customer con le loro immagini e i loro commenti oltre che al titolo ed al sottotitolo
Ho creato una struttura dati nello store.js che contiene all'interno di un array di oggetti tutti i titoli, i sottotitoli, i testi e le immagini che vengono inserite nelle card
Le card vengono create tramite ciclo v-for e viene aggiunta la funzionalità di slide per visualizzare le card seguenti (cardvisibili sempre 4)

Recent:


Sezione che contiene 4 card con all'interno l'estratto di un articolo su dei nuovi modelli di auto, ogni card contiene testo,   immagine e titolo. Come per customer creo in store.js un array di oggetti che contiene tutti i dati necessari a comporre i contenuti  delle card. Anche per queste card uso un ciclo v-for per la loro creazione dinamica. Alle card viene aggiunta l'animazione di    rotazione in base alla posizione del mouse


AutocarFooter:


Footer della pagina diviso nelle seguenti quattro sezioni.
Logo, informazioni su Autocar e link ai social.
Iscrizione alla newsletter.
Menù per impostazioni account utente.
Menù con link utili.
I dati sono aggiunti in maniera automatica tramite la struttura dati.
