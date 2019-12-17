import {
  START_USER_ACTIVITY,
  SYSTEM_LOGOUT
} from "wfp-vue-shared-components/src/libs/auth-utils";
import { ENV_CONFIG } from "./env-utils";

export const setAxiosConfig = ({ env, $axios }) => {
  $axios.interceptors.response.use(
    response => handleHttpSuccess(response),
    error => handleHttpError(error)
  );
  $axios.defaults.baseURL = ENV_CONFIG[env].baseURL;
  $axios.defaults.timeout = 5000;
  $axios.defaults.headers = {
    Authorization: "Bearer: " + sessionStorage.getItem("access_token"),
    location_id: "81",
    location_type: "DEPOT"
  };
};

const handleHttpError = error => {
  START_USER_ACTIVITY();
  if (error.response?.status === 401) {
    SYSTEM_LOGOUT();
  }
  return Promise.reject(error);
};

const handleHttpSuccess = response => {
  START_USER_ACTIVITY();
  return response;
};
