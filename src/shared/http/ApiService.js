import { httpClient } from "./httpClient";
import { API_URLS } from "../constants";

export class ApiService {
    
    /** Получение доски с тасками */
    static getBoard = () => {
        return httpClient.get(API_URLS.BOARD);
    }

    /** Изменение задачи */
    static changeTask = (task) => {
        return httpClient.post(API_URLS.TASK_CHANGE, task);
    }
} 