import { Router } from "express";
import { addUser, deleteUser, getUsers } from "../controller/user.controller.js";

const router = Router();

router.get("/users", getUsers);

router.post("/users", addUser);

router.delete("/users", deleteUser);

export default router;