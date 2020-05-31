export const URLS = {
    RATING: '/rating',
    TASKS: '/tasks',
    USERS_LIST: '/users_list'
}

export const API_URLS = {
    BASE: 'https://galley-jr6l7s7e6a-uc.a.run.app',
    BOARD: '/board',
    TASK_CHANGE: '/task/change',
    USERS: '/users',
    CLICKS: '/clicks/:count',
    TASK_CREATE: '/task/create',
    SEND_MESSAGE: '/push/send'
}

export const LOAD_STATUSES = {
    LOADING: 'LOADING',
    READY: 'READY'
}

export const TASK_STATUSES = [
    "Готова для разработки",
    "В разработке",
    "Тестирование",
    "Разработка завершена"
]

export const DELAY_BOARD = 5000;
export const DELAY_CHART = 2000;