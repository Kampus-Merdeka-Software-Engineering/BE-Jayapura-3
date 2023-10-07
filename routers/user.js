import { Router } from "express";
import { register, getUser, updateUser } from "../controllers/user.js";
import { checkAuth } from "../midlewares/auth.js";

const router = Router();

router.post("/register", register);
router.put("/", checkAuth, updateUser);
router.get("/", checkAuth, getUser);

export default router;
