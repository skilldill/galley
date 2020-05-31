import { createAction } from "redux-actions";
import { ApiService } from "../../shared/http";

export const USERS_ACTION_TYPES = {
    SET_USERS: 'USERS.SET_USERS'
}

export class UsersActions {
    static setUsers = createAction(USERS_ACTION_TYPES.SET_USERS);

    static fetchUsers = () => async (dispatch) => {
        try {   
            const response = await ApiService.getUsers();
            dispatch(this.setUsers(response.data));
        } catch(error) {
            console.log(error);
        }
    }
}