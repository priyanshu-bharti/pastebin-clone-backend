import cron from "node-cron";
import { handleDeletePasteCron } from "../Services/PasteService.ts";

export const pasteDeleteCron = () => {
    cron.schedule("* * 23 * * *", async () => {
        console.log("running a task every minute");
        handleDeletePasteCron()
    });
};
