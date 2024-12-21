<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useKeenSlider } from "keen-slider/vue";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";
import avatar4 from "../../assets/images/avatar4.png";

const testimonials = ref([
  {
    id: 1,
    name: "John Doe",
    ig: "John_Doe",
    content:
      "This dress is absolutely stunning! The fit is perfect, and the floral print is even more beautiful in person. I received so many compliments when I wore it to a wedding",
    img: avatar1,
  },
  {
    id: 2,
    name: "Jane Smith",
    ig: "Jane_Smith",
    content:
      "I am in love with this midi dress! The fabric is so soft and comfortable, and it flows beautifully. It's now my go-to outfit for any special occasion ",
    img: avatar2,
  },
  {
    id: 3,
    name: "Mike Johnson",
    ig: "Mike_Johnson",
    content:
      "I couldn't be happier with this purchase. The quality is top-notch, and the dress looks exactly like it does in the pictures.",
    img: avatar3,
  },
  {
    id: 4,
    name: "Emily Davis",
    ig: "Emily_Davis",
    content:
      "This dress exceeded my expectations. It’s elegant, stylish, and the perfect length. I’ve worn it multiple times already and always get compliments.",
    img: avatar4,
  },
  {
    id: 5,
    name: "Chris Lee",
    ig: "Chris_Lee",
    content:
      "I couldn't be happier with this purchase. The quality is top-notch, and the dress looks exactly like it does in the pictures.",
    img: avatar1,
  },
  {
    id: 6,
    name: "Patricia Brown",
    ig: "Patricia_Brown",
    content:
      "I am in love with this midi dress! The fabric is so soft and comfortable, and it flows beautifully. It's now my go-to outfit for any special occasion ",
    img: avatar2,
  },
  {
    id: 7,
    name: "Steven Garcia",
    ig: "Steven_Garcia",
    content:
      "I couldn't be happier with this purchase. The quality is top-notch, and the dress looks exactly like it does in the pictures.",
    img: avatar3,
  },
  {
    id: 8,
    name: "Lisa Wilson",
    ig: "Lisa_Wilson",
    content:
      "This dress is absolutely stunning! The fit is perfect, and the floral print is even more beautiful in person. I received so many compliments when I wore it to a wedding",
    img: avatar4,
  },
  {
    id: 9,
    name: "David Martinez",
    ig: "David_Martinez",
    content:
      "I am in love with this midi dress! The fabric is so soft and comfortable, and it flows beautifully. It's now my go-to outfit for any special occasion ",
    img: avatar1,
  },
]);

let interval;

const [container, slider] = useKeenSlider({
  loop: true,
  duration: 1000,
  mode: "free",
  slides: {
    perView: 2, // Default to 2 slides per view
    spacing: 150,
  },
  breakpoints: {
    "(max-width: 767px)": {
      // For mobile devices (phone)
      slides: {
        perView: 1, // 1 slide per view on small screens
        spacing: 50,
      },
    },
  },
  dragStart: () => clearInterval(interval),
  dragEnd: () => autoSlide(),
});

const autoSlide = () => {
  interval = setInterval(() => {
    if (slider) {
      slider.next();
    }
  }, 1000);
};

onMounted(() => {
  if (slider) {
    autoSlide();
  }
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div>
    <div
      class="w-full h-20 flex items-center justify-center relative z-10 my-10"
    >
      <h1 class="sm:text-4xl md:text-7xl font-bold text-slate-800 mb-10">
        What Our Clients Say
      </h1>
    </div>
    <div class="mt-10">
      <div ref="container" class="keen-slider cursor-pointer">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="keen-slider__slide px-8 py-6 bg-green-100 rounded shadow-lg flex flex-col gap-12"
        >
          <div class="flex justify-between items-start">
            <div class="flex items-center gap-4">
              <img
                :src="testimonial.img"
                class="w-11 h-11 shadow object-cover rounded-full"
              />
              <div class="flex flex-col justify-center items-start m-0 h-11">
                <p class="text-md font-semibold">{{ testimonial.name }}</p>
                <p class="text-sm font-light">{{ testimonial.ig }}</p>
              </div>
            </div>
            <Icon name="testimonial" class="text-gray-600 text-2xl"></Icon>
          </div>
          <p class="text-gray-600">{{ testimonial.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.keen-slider {
  margin: 0 auto;
  position: relative;
  width: 80%;
  border-radius: 10px;
}
.keen-slider__slide {
  height: 230px;
  width: 600px;
  border-radius: 10px;
}
</style>
