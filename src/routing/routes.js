import { URLS } from "../shared/constants";
import { Rating, Tasks, Users } from "../pages";

export const routes = [
    {
        path: URLS.TASKS, 
        name: 'Доска с карточками',
        component: Tasks
    },
    {
        path: URLS.USERS_LIST, 
        name: 'Состав галеры',
        component: Users
    },
    { 
        path: URLS.RATING,
        name: "Показатели гребли",
        component: Rating,
    }
]