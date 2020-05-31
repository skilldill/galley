import { UsersActions } from "./users.actions";
import { usersReducer } from "./users.reducer";

export const usersState = {
    reducer: usersReducer,
    actions: UsersActions
}