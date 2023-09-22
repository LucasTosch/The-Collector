import { Router } from "express";
import { getUsers, createUser, getUser, updateUser, deleteUser } from "../controllers/userController"

export const usersRouter = Router()

usersRouter.route("/").get(getUsers).post(createUser)
usersRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser)
