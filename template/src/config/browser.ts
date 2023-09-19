import { LaunchOptions } from "playwright"
import 'dotenv/config'

export const browser: LaunchOptions = {
    headless: (process.env.DEBUG === "true") ? false : true,
}

