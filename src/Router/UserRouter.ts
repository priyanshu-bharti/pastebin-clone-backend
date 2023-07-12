import express from "express";

import {
    createUser,
    getUser,
    deleteUser,
    updateUser,
} from "../Controllers/UserController.ts";

import {
    validateUserFromParamId,
    validateUserModel,
} from "../Middlewares/UserMiddleware.ts";

const router = express.Router();

router.post("/", validateUserModel, createUser);
router.get("/:id", validateUserFromParamId, getUser);
router.delete("/:id", validateUserFromParamId, deleteUser);
router.put("/:id", validateUserFromParamId, validateUserModel, updateUser);

export default router;
