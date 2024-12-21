const CollectionList = defineAsyncComponent(() =>
  import("./CollectionList.vue")
);
const CollectionCard = defineAsyncComponent(() =>
  import("./CollectionCard.vue")
);

const ProductCard = defineAsyncComponent(() => import("./ProductCard.vue"));
const ProductDetail = defineAsyncComponent(() => import("./ProductDetail.vue"));
const ProductImageSlider = defineAsyncComponent(() =>
  import("./ProductImageSlider.vue")
);
const ProductList = defineAsyncComponent(() => import("./ProductList.vue"));
const ProductSuggestions = defineAsyncComponent(() =>
  import("./ProductSuggestions.vue")
);

export default {
  CollectionCard,
  CollectionList,
  ProductCard,
  ProductDetail,
  ProductImageSlider,
  ProductList,
  ProductSuggestions,
};
