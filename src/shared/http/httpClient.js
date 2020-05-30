import axios from "axios";
import { API_URLS } from "../constants";

const headers = {
    'Content-Type': 'application/json'
}

export const httpClient = axios.create({
    headers,
    baseURL: API_URLS.BASE
})