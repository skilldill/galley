import { httpClient } from "./httpClient";
import { API_URLS, URLS } from "../constants";

export class ApiService {
    
    /** Получение доски с тасками */
    static getBoard = () => {
        return httpClient.get(API_URLS.BOARD);
    }

    /** Изменение задачи */
    static changeTask = (task) => {
        return httpClient.post(API_URLS.TASK_CHANGE, task);
    }

    /** Получение гребцов */
    static getUsers = () => {
        return httpClient.get(API_URLS.USERS);
    }

    /** Получить количество кликов для граффиков */
    static getClicks = (count) => {
        const url = API_URLS.CLICKS.replace(':count', count.toString());
        return httpClient.get(url);
    }
} 