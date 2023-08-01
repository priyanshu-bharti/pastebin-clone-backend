import cron from "node-cron";
import { handleDeletePasteCron } from "../Services/PasteService.js";
export const pasteDeleteCron = () => {
    cron.schedule("* * 23 * * *", async () => {
        console.log("running a task every minute");
        handleDeletePasteCron();
    });
};
//# sourceMappingURL=pasteDeleteCron.js.map