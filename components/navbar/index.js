const Buttons = defineAsyncComponent(() => import("./Buttons.vue"));
const HumbergerMenu = defineAsyncComponent(() => import("./HumbergerMenu.vue"));
const Logo = defineAsyncComponent(() => import("./Logo.vue"));
const Navbar = defineAsyncComponent(() => import("./Navbar.vue"));
const NavigationLinks = defineAsyncComponent(() =>
  import("./NavigationLinks.vue")
);
const PreNav = defineAsyncComponent(() => import("./PreNav.vue"));

export default {
  Buttons,
  HumbergerMenu,
  Logo,
  Navbar,
  NavigationLinks,
  PreNav,
};
