const express = require("express");
const { connection } = require("./config/db");
const { StudentModel } = require("./model/student");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());


app.post("/add",async(req,res)=>{
    try {
        const newStudent = new StudentModel({...req.body});
        await newStudent.save();

        res.status(201).send({msg:"New Student Added!"});
    } catch (error) {
        res.status(500).send({error:error.message})
    }
})

app.get("/students",async(req,res)=>{
    try {
        const allStudents = await StudentModel.find({});

        res.status(200).send(allStudents);
    } catch (error) {
        res.status(500).send({error:error.message})  
    }
})


app.patch("/update/:studentId",async(req,res)=>{
    try {
        const {studentId} = req.params;
        const payload = req.body;

        await StudentModel.findByIdAndUpdate(studentId,payload);

    } catch (error) {
        res.status(500).send({error:error.message})  
    }
})


app.listen(8080, async () => {
    try {
      await connection;
      console.log(`connected to db!`);
    } catch (error) {
        console.log(error.message);
    }
    console.log(`server is running on PORT 8080`)
})