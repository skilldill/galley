import { createAction } from "redux-actions";

export const NAVBAR_ACTION_TYPES = {
    SET_TITLE: "NAVBAR.SET_TITLE"
}

export class NavbarActions {
    static setTitle = createAction(NAVBAR_ACTION_TYPES.SET_TITLE);
}