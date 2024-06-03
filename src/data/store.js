import { reactive } from 'vue';

const iMieiDati = reactive({
    CaroselloTitolo: 'Buy And Sell Your Car At Its Value',
    CaroselloSottotitolo: 'Find the right price and dealer.',
    Carosello: [
        {
            CaroselloTitolo: 'Buy And Sell Your Car At Its Value',
            firstImage: './src/assets/Img/slider-autocar-5.jpg',
        },
        {
            CaroselloTitolo: 'The Easiest Way to Buy And Sell Vehicles',
            firstImage: './src/assets/Img/slider-autocar-6.jpg',
        }
    ],
    number: 0

});

export default iMieiDati