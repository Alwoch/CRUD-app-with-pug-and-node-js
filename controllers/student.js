const Student = require("../models/Student");
const router = require("../routes/student");
const logger = require("../logger/logger")

//register student
const registerStudent = async (req, res) => {
  const newStudent=new Student(req.body);
 
  try {
    await newStudent.save();
    res.redirect("/login");
    
  } catch (error) {
  res.send('your data has not been saved');
  logger.error(error);
  }
   
};

//login student
const loginStudent = async (req, res) => {
   const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please provide email and password" });
  }
  const student = await Student.findOne({ email });
  if (!student) {
    return res.status(403).json({ msg: "invalid credentials" });
  }
  //if the user exists we compare passwords
  const isPasswordCorrect = await student.comparePasswords(password);
  if (!isPasswordCorrect) {
    return res.status(403).json({ msg: "invalid credentials" });
  }
  res.redirect("/registered");
};

//retrieve all registered students
const allStudents = async (req, res) => {
  const students = await Student.find({});
  res.render("registered", { data: students });
};

//edit registered students details
const editStudent = async (req, res) => {
  const { id: entryID } = req.params;
  const student = await Student.findOneAndUpdate({ _id: entryID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!student) {
    return res.status(500).json({ msg: `no task with id ${entryID}` });
  }
  res.render("edit", { student });
};

//delete student
const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/student-portal/registered");
};

module.exports = {
  registerStudent,
  // loginStudent,
  allStudents,
  editStudent,
  deleteStudent,
};
