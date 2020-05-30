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
        name: 'Гребцы',
        component: Users
    },
    { 
        path: URLS.RATING,
        name: "График работы гребцов",
        component: Rating,
    }
]