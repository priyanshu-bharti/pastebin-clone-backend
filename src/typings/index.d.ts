import { StrictAuthProp } from "@clerk/clerk-sdk-node";
export {};

declare global {
    namespace Express {
        interface Request extends StrictAuthProp {}
    }
}
