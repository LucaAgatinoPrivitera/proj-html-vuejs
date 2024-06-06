<script>
import store from '../data/store.js'

export default {
    components: {

    },

    data() {
        return {
            store
        }
    },

    methods: {
        getImg(path) {
            let risultato = new URL(`../assets/Img/${path}`, import.meta.url);
            return risultato.href;
        },
    }
}
</script>

<template>
    <div id="footerWrapper">
        <div id="footerContent" class="w-75 mx-auto">
            <!-- Inbox -->
            <section id="footerInfobox">
                <div id="footerLogo">
                    <img :src="getImg(store.footerLogo)" alt="">
                </div>
                <p class="infoboxItem" v-for="element in store.footerData.autocarInfo">
                    <i :class="element.icon"></i>
                    <span>{{ element.text }}</span>
                </p>
                <div id="footerSocials">
                    <a v-for="social in store.footerData.acSocials" :href="social.link">
                        <i :class="social.icon"></i>
                    </a>

                </div>
            </section>
            <!-- Newsletter -->
            <section id="footerNewsletter">
                <p class="footerTitle">Join Our Newsletter</p>
                <p class="footerDetails">Subscribe to be informed about our services and products.</p>
                <input type="text" id="userEmail" placeholder="Your Email Adress">
                <div id="subscribeDiv">Subscribe <i class="fa-solid fa-arrow-right"></i></div>
            </section>
            <!-- MyAccount -->
            <section id="footerMyAccount">
                <p class="footerTitle">My account</p>
                <ul>
                    <li v-for="item in store.footerData.autocarAccount">
                        <a :href="item.link">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </section>
            <!-- QuickLinks -->
            <section id="footerQuickLinks">
                <p class="footerTitle">Quick Links</p>
                <ul>
                    <li v-for="item in store.footerData.autocarQuickLinks">
                        <a :href="item.link">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </section>
        </div>

        <div id="footerCredits" class="mb-0 pb-2">
            <i class="fa-regular fa-copyright"></i>
            {{ store.footerData.pageCredits }}
        </div>
    </div>
</template>

<style scoped>
#footerWrapper {
    background-color: black;
    color: white;
    padding-top: 3rem;
}

#footerContent {
    display: flex;
    gap: 1rem;
    font-size: 5rem;
    justify-content: space-between;
}

#footerContent>section {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    flex-direction: column;
}

#footerContent a {
    color: white;
    text-decoration: none;
}

/* Stili infobox */
#footerInfobox {
    width: 20%;
}

#footerLogo>img {
    width: 100%;
    margin-bottom: 1.5rem;
}

.infoboxItem {
    display: flex;
    flex-wrap: nowrap;
    font-size: 0.85rem;
    margin: 0.5rem 0;
}

.infoboxItem p {
    display: inline-block;
}

.infoboxItem i {
    display: inline-block;
    font-size: 1.5rem;
    margin-right: 1rem;
    width: 1.5rem;
}

.infoboxItem span {
    width: calc(100% - 1.5rem);
    white-space: pre-wrap;
}

#footerSocials {
    margin: 0.5rem;
    align-self: center;
}

#footerSocials>a {
    margin: 0 1rem;
}

/* Stili newsletter */
#footerNewsletter {
    width: calc(40% - 3rem);
}

.footerTitle {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
}

.footerDetails {
    font-size: 0.85rem;
    margin: 0 0 0.8rem 0;
}

#userEmail {
    height: 3.5rem;
    border-radius: 0.2rem;
    margin-top: 1.3rem;
    margin-bottom: 0.2rem;
    padding: 0 1rem;
}

#subscribeDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: rgb(160, 160, 160);
    height: 3.5rem;
    border-radius: 0.2rem;
}

/* Stili MyAccount */
#footerMyAccount {
    width: 20%;
    max-width: 10rem;
}

ul {
    padding: 0 1rem;
}

/* Stili QuickLinks */
#footerQuickLinks {
    width: 20%;
    max-width: 10rem;
}

/* Crediti pagina */
#footerCredits {
    margin: 1rem auto;
    text-align: center;
    font-size: 0.7rem;
}
</style>
