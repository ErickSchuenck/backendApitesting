import { Router } from "express";
import getAllProducts from "../controllers/getAllProducts.js";
import checkForLifesigns from "../controllers/checkForLifesigns.js";

const router = Router();
router.get("/getAllProducts", getAllProducts);
router.get("/check", checkForLifesigns);

export default router;
