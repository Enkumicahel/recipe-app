// Pages
import Home from "../pages/Home";
import AddRecipe from "../pages/AddRecipe";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const ROUTES = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/add_recipe",
    component: AddRecipe,
  },
];

export default ROUTES;
