import express from "express";
import {
  getAllStudents,
  getPaginatedStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudentById,
  getHighestStudentId,
  downloadExcel
} from "../controllers/student.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.get("/get-all", getAllStudents);
router.get("/get", getPaginatedStudents);
router.get("/get/:id", getStudentById);
router.post("/add", createStudent);
router.put("/update/:id", updateStudentById);
router.delete("/delete/:id", deleteStudentById);
router.get("/get-highest-id", getHighestStudentId);
router.get('/download-excel', downloadExcel);

export default router;
