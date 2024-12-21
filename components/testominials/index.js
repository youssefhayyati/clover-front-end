const Testimonial = defineAsyncComponent(() => import("./Testimonial.vue"));
const TestimonialCard = defineAsyncComponent(() =>
  import("./TestimonialCard.vue")
);

export default {
  Testimonial,
  TestimonialCard,
};
