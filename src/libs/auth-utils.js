import auth0 from "auth0-js";
import moment from "moment";

export const AUTH_TIMER_CONFIG = {
  INACTIVITY_TIME_LIMIT: 15, // minutes, how long a user is inactive before been signed out
  INACTIVITY_WARNING: 1, // minutes, time left on inactivity timer before "about to be logged out" message shows
  TIME_LEFT_ON_TOKEN_BEFORE_REFRESH: 60, // seconds, time left on token before we call a silent refresh on auth0 token
  TIME_CHECK_INTERVAL: 1 // seconds, how often the webapp checks the timers
};
export const START_USER_ACTIVITY = () => {
  const timer = moment()
    .add(AUTH_TIMER_CONFIG.INACTIVITY_TIME_LIMIT, "m")
    .format();
  sessionStorage.setItem("startOfUserActivity", timer);
};
export const LOGOUT_TYPES = {
  LOGIN: "login",
  MANUAL: "manual",
  FORCE: "force"
};
export const PRE_LOGIN_LOGOUT = env => {
  window.location = GET_LOGOUT_URL({ type: LOGOUT_TYPES.LOGIN });
};
export const USER_LOGOUT = () => {
  logout({ type: LOGOUT_TYPES.MANUAL });
};
export const SYSTEM_LOGOUT = () => {
  logout({ type: LOGOUT_TYPES.FORCE });
};
export const AUTH0_PARSE_HASH = ({ action }) => {
  const auth = new auth0.WebAuth(AUTH0_CONFIG());
  auth.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      SET_SESSION_TOKENS(authResult);
      START_USER_ACTIVITY();
      action(err);
    }
  });
};
export const SILENT_AUTHORISE = ({ action }) => {
  const auth = new auth0.WebAuth(AUTH0_CONFIG());
  auth.checkSession(AUTH0_CONFIG(), (err, authResult) => {
    if (authResult) {
      START_USER_ACTIVITY();
      SET_SESSION_TOKENS(authResult);
      action({ err, authResult });
    } else {
      PRE_LOGIN_LOGOUT();
    }
  });
};
export const HAS_VALID_TOKEN = () => {
  const idToken = sessionStorage.getItem("id_token");
  let authenticated = false;
  if (idToken !== null) {
    const now = Math.floor(new Date().getTime() / 1000);
    const idTokenUserDetails = idToken.split(".")[1];
    const userDetails = atob(
      idTokenUserDetails.replace(/_/g, "/").replace(/-/g, "+")
    );
    if (process.env.isDev) {
      console.log({
        timeNow: moment.unix(now).format("LT"),
        authenticated: now < JSON.parse(userDetails).exp,
        userDetails: JSON.parse(userDetails),
        tokenExpiry: moment.unix(JSON.parse(userDetails).exp).format("LT"),
        permissions: getUsersPermissionsFromJWT()
      });
    }
    authenticated = now < JSON.parse(userDetails).exp;
  }
  return authenticated;
};
export const SET_SESSION_TOKENS = authResult => {
  sessionStorage.setItem("id_token", authResult.idToken);
  sessionStorage.setItem("access_token", authResult.accessToken);
};
export const INIT_USER_LOGIN = reloadUrl => {
  const authZero = new auth0.WebAuth(AUTH0_CONFIG());
  const params = {
    reloadUrl
  };
  authZero.authorize(params);
};
export const GET_ACCESS_TOKEN = () => {
  const token = sessionStorage.getItem("access_token");
  if (token !== null) {
    const tokenUserDetails = token.split(".")[1];
    let userDetails = atob(
      tokenUserDetails.replace(/_/g, "/").replace(/-/g, "+")
    );
    userDetails = JSON.parse(userDetails);
    return userDetails;
  }
  return null;
};
export const CHECK_FOR_PERMISSION = permissions => {
  if (!HAS_USER_GOT_PERMISSION(permissions)) {
    SYSTEM_LOGOUT();
  }
};

const logout = ({ type }) => {
  // type = manual, forced, timeout
  window.location = GET_LOGOUT_URL({ type });
};
const GET_LOGOUT_URL = ({ type }) => {
  const domain = AUTH0_CONFIG().domain;
  const id = AUTH0_CONFIG().clientID;
  const baseUrl = `${window.location.protocol}//${window.location.host}`;
  sessionStorage.clear();
  return `https://${domain}/v2/logout?returnTo=${baseUrl}/logged-out/?type=${type}&client_id=${id}`;
};
const AUTH0_CONFIG = () => {
  const envs = {
    dev: {
      clientID: "gGM8EFRcfge3ScozxAOEg5VdQvGX4O6X",
      domain: "hermes-cloud-sso-dev.eu.auth0.com",
      audience: "workforceportal.dev.hermescloud.co.uk"
    },
    sit: {
      clientID: "5spFeVYlRaJneeIAM0xTEGLCfI8fAzno",
      domain: "hermes-cloud-sso-dev.eu.auth0.com",
      audience: "workforceportal.sit.hermescloud.co.uk"
    }
  };
  const currentEnv = sessionStorage.getItem("env");
  return {
    ...envs[currentEnv],
    responseType: "token id_token",
    scope: "openid",
    redirectUri: `${window.location.protocol}//${
      window.location.host
    }${"/auth0-login-callback/"}`
  };
};
const getUsersPermissionsFromJWT = () => {
  let permissions = [];
  const token = sessionStorage.getItem("access_token");
  if (token !== null) {
    const tokenUserDetails = token.split(".")[1];
    let userDetails = atob(
      tokenUserDetails.replace(/_/g, "/").replace(/-/g, "+")
    );
    userDetails = JSON.parse(userDetails);

    permissions =
      userDetails["https://hermescloud.co.uk/security"].authorization
        .permissions;
  }
  return permissions;
};
const HAS_USER_GOT_PERMISSION = permission => {
  return haveArraysGotSharedValue(getUsersPermissionsFromJWT(), permission);
};
const haveArraysGotSharedValue = (haystack, arr) => {
  return arr.some(v => {
    return haystack.includes(v);
  });
};
