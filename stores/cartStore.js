import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    isOpen: false,
  }),

  getters: {
    cartTotal() {
      return this.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    cartItemCount() {
      return this.items.reduce((count, item) => count + item.quantity, 0);
    },
  },

  actions: {
    // Save to localStorage if on the client-side
    saveCartToLocalStorage() {
      if (process.client) {
        localStorage.setItem("cartItems", JSON.stringify(this.items));
      }
    },

    // Load cart items from localStorage if available
    loadCartFromLocalStorage() {
      if (process.client) {
        const savedItems = localStorage.getItem("cartItems");
        if (savedItems) {
          this.items = JSON.parse(savedItems);
        }
      }
    },

    addProduct(product, quantity, size, color) {
      const existingProduct = this.items.find(
        (item) =>
          item.id === product.id && item.size === size && item.color === color
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        this.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: quantity,
          size: size,
          color: color,
          images: product.images,
        });
      }

      this.saveCartToLocalStorage(); // Save to localStorage
    },

    removeProduct(productId, size, color) {
      const index = this.items.findIndex(
        (item) =>
          item.id === productId && item.size === size && item.color === color
      );

      if (index !== -1) {
        this.items.splice(index, 1);
        this.saveCartToLocalStorage(); // Save to localStorage
      }
    },

    updateQuantity(productId, quantity, size, color) {
      const product = this.items.find(
        (item) =>
          item.id === productId && item.size === size && item.color === color
      );

      if (product) {
        product.quantity = quantity;
        this.saveCartToLocalStorage(); // Save to localStorage
      }
    },

    clearCart() {
      this.items = [];
      this.saveCartToLocalStorage(); // Clear from localStorage
    },

    toggleCartOpen() {
      this.isOpen = !this.isOpen;
    },

    // Initialize cart from localStorage on store setup
    initializeCart() {
      this.loadCartFromLocalStorage(); // Load items from localStorage
    },
  },

  // On store setup, load cart items from localStorage if available
  persist: true,
});
