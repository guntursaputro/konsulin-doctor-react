import { env } from "../utils";

export const appName = env("REACT_APP_TITLE", 'TPID Apps')

export const debug = env("REACT_APP_DEBUG", false)

export const apiURL = env("REACT_APP_API_URL", "/")

export const authKey = env('REACT_APP_ACCESS_TOKEN', 'access_token')
