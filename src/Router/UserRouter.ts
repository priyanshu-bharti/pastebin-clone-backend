import express from "express";
import {
    createUser,
    getUser,
    deleteUser,
    updateUser,
} from "../Controllers/UserController.js";

import {
    validateUserFromParamId,
    validateUserModel,
} from "../Middlewares/UserMiddleware.js";

const router = express.Router();

router.post("/", validateUserModel, createUser);
router.get("/:id", validateUserFromParamId, getUser);
router.delete("/:id", validateUserFromParamId, deleteUser);
router.put("/:id", validateUserFromParamId, validateUserModel, updateUser);

export default router;
