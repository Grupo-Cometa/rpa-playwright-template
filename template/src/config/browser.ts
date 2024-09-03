import { LaunchOptions } from "playwright"

export const browser: LaunchOptions = {
    headless: (process.env.DEBUG === "true") ? false : true,
}