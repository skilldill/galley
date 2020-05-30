import { BoardActions } from "./board.actions";
import { boardReducer } from "./board.reducer";

export const boardState = {
    reducer: boardReducer,
    actions: BoardActions
}