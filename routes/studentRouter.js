import express from "express";
import courseModel from "../models/course.js";
import { settings_get, settings_post } from "../controllers/student/settings.js";
const router = express.Router();

router.get("/courses", async (req, res) => {
  // const page = req.query.p || 0;
  // const usersPerPage = 3;
  let courses = await courseModel.find();
  // .skip(page * usersPerPage)
  // .limit(usersPerPage);
  res.render("student/courses", { courses });
});
<<<<<<< HEAD

router.get("/settings", settings_get);
router.post("/settings", settings_post);

=======
router.get("/courseInner", (req, res) => {
  res.render("student/courseInner");
});
router.get("/settings", (req, res) => {
  res.render("student/settings");
});
>>>>>>> 373823d6539669d24fa4011549540e95aae7a6f6
router.get("/security", (req, res) => {
  res.render("student/security");
});
router.get("/notifications", (req, res) => {
  res.render("student/notifications");
});
router.get("/:id", (req, res) => {
  res.render("student/home");
});

export default router;
