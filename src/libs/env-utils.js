import axios from "axios";

export const ENV_CONFIG = {
  dev: {
    baseURL: "https://wfp-api.dev.hermescloud.co.uk"
  },
  sit: {
    baseURL: "https://wfp-api.sit.hermescloud.co.uk"
  }
};
export const resetEnvironment = () => {
  sessionStorage.removeItem("env");
  return getAndSetEnvironment();
};
export const getAndSetEnvironment = () => {
  const env = sessionStorage.getItem("env");
  if (env) {
    return { name: env };
  }

  const url = process.env.isDev
    ? `http://localhost:${location.port}/env/env.json`
    : "/env/env.json";

  return axios.get(url).then(({ data }) => {
    sessionStorage.setItem("env", data.env);
    return { name: data.env };
  });
};
