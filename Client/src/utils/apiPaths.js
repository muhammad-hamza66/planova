export const API_PATHS = {
  AUTH: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    GET_PROFILE: "/auth/profile",
  },

  USERS: {
    GET_ALL_USERS: "/users",
    GET_USER_BY_ID: (id) => `/users/${id}`,
    CREATE_USER: "/users",
    UPDATE_USER: (id) => `/users/${id}`,
    DELETE_USER: (id) => `/users/${id}`,
  },

  TASKS: {
    GET_DASHBOARD_DATA: "/tasks/dashboard-data",
    GET_USER_DASHBOARD_DATA: "/tasks/user-dashboard-data",
    GET_ALL_TASKS: "/tasks",
    GET_TASK_BY_ID: (id) => `/tasks/${id}`,
    CREATE_TASK: "/tasks",
    UPDATE_TASK: (id) => `/tasks/${id}`,
    DELETE_TASK: (id) => `/tasks/${id}`,
    UPDATE_TASK_STATUS: (id) => `/tasks/${id}/status`,
    UPDATE_TODO_CHECKLIST: (id) => `/tasks/${id}/todo`,
  },

  REPORTS: {
    EXPORT_TASKS: "/reports/export/tasks",
    EXPORT_USERS: "/reports/export/users",
  },

  IMAGE: {
    UPLOAD_IMAGE: "/auth/upload-image",
  },
};