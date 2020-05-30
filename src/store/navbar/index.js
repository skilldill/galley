import { NavbarActions } from "./navbar.actions";
import { navbarReducer } from "./navbar.reducers";

export const navbarState = {
    reducer: navbarReducer,
    actions: NavbarActions
}