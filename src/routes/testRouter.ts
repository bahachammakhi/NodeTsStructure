import express from "express";
import * as testController from "../controllers/testControllers";

const router = express.Router();

router.route("/test").get(testController.Test);

export default router;