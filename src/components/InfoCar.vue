<script>
import store from '../data/store.js';


export default {
    components: {

    },

    data() {
        return {
            store,
            animable24: 0,
            animable240: 0,
            animable24Timer: null,
            animable240Timer: null

        }
    },
    methods: {
        getImg(path) {
            let risultato = new URL(`../assets/Img/${path}`, import.meta.url);
            return risultato.href;
        },

        getNumbers(min, max, nomeDelData, ms) {
            this[nomeDelData] = min
            let nomeDelTimer = nomeDelData + 'Timer'
            this[nomeDelTimer] = setInterval(() => {
                this[nomeDelData]++
                if (this[nomeDelData] == max) {
                    clearInterval(this[nomeDelTimer])

                }
            }, ms);

        },

        //controlla se l elemento e` tra il top(0) e la fine della viewport.
        isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.top <=
                (window.innerHeight || document.documentElement.clientHeight)
            );
        },
    },
    created() {

    },
    mounted() {
        //allo scroll,  
        window.addEventListener("scroll", () => {
            //se l elemento e` tra il top(0) e la fine della viewport.
            if (this.isElementInViewport(document.getElementById('scroll'))) {
                if (!this.animable24Timer) {
                    this.getNumbers(0, 24, 'animable24', 100)
                }
                if (!this.animable240Timer) {
                    this.getNumbers(0, 240, 'animable240', 10)
                }
            }
        });

    },
    computed: {

    },
}
</script>

<template>

    <div class="w-75 mx-auto py-2">

        <div class="row justify-content-center align-items-center">

            <div class="col-5 p-3 bk-point position-relative overflow-hidden">
                <img class="z-n1 w-100 ruota" :src="getImg('circle-auto-car-1.png')" alt="">
                <img class="position-absolute top-0 end-0" style="width: 100%;" :src="getImg('aoutcar-about-1.png')"
                    alt="">
                <div class="twoForTwo position-absolute bg-dark leftCircle text-center p-2">
                    <h4 class="fw-bolder">{{ animable24 }} </h4>
                    <p class="my_fs">Years of Experience</p>
                </div>
                <div id="scroll" class="twoForTwo position-absolute bg-dark rightCircle text-center p-2">
                    <h4 class="fw-bolder">{{ animable240 }}</h4>
                    <p class="my_fs">Special Expert Team</p>
                </div>

            </div>

            <div class="col-5 px-4 py-3">

                <h3 class="fw-bolder">Want to buy or sell a vehicle?</h3>
                <p class="ps-5">You can put your vahicles for sale by registering in our website. Whether you are a
                    dealer or sell
                    personally. Sell yuor vehicle in the most profitable way. With this system. Whichj has millions of
                    members. You will be able to buy and sell veichles quickly.
                </p>
                <img class="mb-2" :src="getImg('divider.jpg')" alt="">

                <div class="d-flex">
                    <div class="align-content-center">
                        <img :src="getImg('Screenshot1.png')" alt="">
                    </div>
                    <div class="pe-2 ps-5">
                        <h4 class="fw-bolder">Model Vehicles</h4>
                        <p>We are sure that you will find vehicles of suitable models on our website.</p>
                    </div>
                </div>

                <div class="d-flex">
                    <div class="align-content-center">
                        <img :src="getImg('Screenshot2.png')" alt="">
                    </div>
                    <div class="pe-2 ps-5">
                        <h4 class="fw-bolder">2nd Hand Vehicles</h4>
                        <p>We are sure that you will find vehicles of suitable models on our website.</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 p-3 bg-dark text-light text-center">
                        Get to know us <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>

<style scoped>
.ruota {
    animation: rotate 10s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(1turn);
    }
}

.twoForTwo {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    color: white;
}

.leftCircle {
    top: 4.5rem;
    left: 4.5rem;
}

.rightCircle {
    bottom: 4rem;
    right: 4rem;
}

.my_fs {
    font-size: 0.7rem;
}
</style>