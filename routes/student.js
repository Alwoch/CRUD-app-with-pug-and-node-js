const express = require("express");
const router = express.Router();
const {
  registerStudent,
  // loginStudent,
  allStudents,
  editStudent,
  deleteStudent,
} = require("../controllers/student");

router.post("/register", registerStudent);
// router.post("/login", loginStudent);
router.get("/registered-students", allStudents);
router.patch("/registered-students/:id", editStudent);
router.delete("/registered-students/:id", deleteStudent);

//render routes
router.get('/register',(req,res)=>{
res.render('register')
})

router.get('/login',(req,res)=>{
res.render('login')
})

router.get('/registered-students',(req,res)=>{
res.render('registered')
})

router.get('/registered-students/:id',(req,res)=>{
res.render('edit')
})

router.get('/registered-students/:id',(req,res)=>{
res.render('delete')
})

module.exports=router;