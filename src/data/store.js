import { reactive } from 'vue';

const iMieiDati = reactive({
    // Componente Carosello
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
    number: 0,

    // Componente SearchCar
    SearchCar: {
        AllCategories: [
            'Cabrio',
            'Coupe',
            'Hatchback',
            'Pick up',
            'Seden',
            'Suv'
        ]
        ,
        Brand: [
            'Audi',
            'BMW',
            'Ford',
            'Hyundai',
            'Opel',
            'Seat',
            'Skoda',
            'Toyota',
            'Volswagen'
        ],
        FuelType: [
            'Diesel',
            'Electric',
            'Gasoline',
            'LPG'
        ],
        Transmission: [
            'Automatic',
            'Manual',
            'Semiautomatic',
            'Touch'
        ],
        Status: [
            '2nd Hand',
            'By Owner',
            'From The Gallery',
            'New'
        ]
    }

});

export default iMieiDati