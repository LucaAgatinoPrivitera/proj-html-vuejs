<script>
import Store from "../data/store.js";
export default {
	name: "Customer",
	data() {
		return {
			Store,
			visibleCards: [],
			activeCardIndex: 0,
			clickPrev: true,
			clickNext: false,
		};
	},
	methods: {
		getImgPath(path) {
			let risultato = new URL(`../assets/Img/${path}`, import.meta.url);
			return risultato.href;
		},
		previous() {
			this.clickPrev = true;
			this.clickNext = false;
			if (this.activeCardIndex > 0) {
				this.activeCardIndex--;
				this.updateVisibleCards();
			}
		},
		next() {
			this.clickPrev = false;
			this.clickNext = true;
			if (this.activeCardIndex < Store.customer.testimonial.length - 4) {
				this.activeCardIndex++;
				this.updateVisibleCards();
			}
		},
		updateVisibleCards() {
			this.visibleCards = Store.customer.testimonial.slice(
				this.activeCardIndex,
				this.activeCardIndex + 4
			);
		},
	},
	mounted() {
		this.updateVisibleCards();
	},
};
</script>

<template>
	<div id="customer" class="py-5 px-3 text-white text-center">
		<div class="w-75 mx-auto">
			<i class="fa-regular fa-thumbs-up"></i><br />
			<i class="fa-regular fa-star"></i>
			<i class="fa-regular fa-star"></i>
			<i class="fa-regular fa-star"></i>
			<h3>{{ Store.customer.title }}</h3>
			<p>{{ Store.customer.subtitle }}</p>
			<div class="row py-3">
				<div v-for="testimonial in visibleCards" class="col-3">
					<div class="my_card rounded h-100">
						<p>
							{{ testimonial.comment }}
						</p>
						<img :src="getImgPath(testimonial.img)" class="mt-3" />
						<p class="mt-3">{{ testimonial.name }}</p>
					</div>
				</div>
			</div>
			<div class="d-flex justify-content-center">
				<div
					:class="{
						btnBlack: clickPrev,
						btnGrey: !clickPrev,
					}"
					class="my_btn_customer me-1"
					@click="previous()"
				></div>
				<div
					:class="{
						btnBlack: clickNext,
						btnGrey: !clickNext,
					}"
					class="my_btn_customer"
					@click="next()"
				></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
#customer {
	background-image: url("../assets/Img/comment-bg-autocar.jpg");
	background-position: center;
	background-size: cover;
}

.my_card {
	background-color: white;
	color: black;
	padding: 2rem 1rem;
}

p {
	font-size: 12px;
}

img {
	width: 50%;
	display: inline-block;
}

.fa-thumbs-up {
	font-size: 2rem;
}

.my_btn_customer {
	height: 8px;
	border-radius: 5px;
	background-color: gray;
}

.btnGrey {
	background-color: grey;
	width: 50px;
	transition: all 500ms;
}

.btnBlack {
	background-color: black;
	width: 90px;
	transition: all 500ms;
}

</style>
