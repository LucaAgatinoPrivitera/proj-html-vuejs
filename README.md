Il layout è stato suddiviso nel seguente modo:
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

    PageMain: Carosello, Search-Car( Luca)
              Card-auto, Info-Car (Francesco)
              Customer e Recent (Davide)

    PageFooter: Footer (Dihep)

Utilizziamo uno store.js per immagazzinare i vari dati.

Tutte le immagini le abbiamo messe nella cartella src/assets, creiamo le cartelle Icone e Img