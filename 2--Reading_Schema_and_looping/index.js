// Import the Mongoose library
const mongoose = require('mongoose');

async function main(){
    try{
        mongoose.connect("mongodb+srv://vishalkumarsahu04:vishal@cluster0.yxvd5oe.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000})
        
        mongoose.connection.on('connected', ()=>{~
            console.log('Connected MongoDb Atlas..');
        });
        
    
    }catch(error){
        console.log(error.reason)
    }
  
}
main();

require('./StudentSchema');
require('./WorksnapsTimeEntrySchema');

async function getStudents(){
  // Define the Student model
  const Student = mongoose.model("Student");
  // Get all students
  const students = await Student.find({});
  return students;
}

async function getTimeEntries(studentId){
  // Define the WorksnapsTimeEntry model
  const WorksnapsTimeEntry = mongoose.model("WorksnapsTimeEntry");
  // Get the student's time entries
  const timeEntries = await WorksnapsTimeEntry.find({student: studentId});
  return timeEntries;
}

async function printTimeEntries(){
  try {
      await main();
      const students = await getStudents();
      for (const student of students) {
          const timeEntries = await getTimeEntries(student._id);
          // console.log(timeEntries);

          console.log(`${student.firstName} ${student.lastName}`);
          for (const timeEntry of timeEntries) {
              console.log(`- ${timeEntry.startTime} - ${timeEntry.endTime}`);
          }
      }
      mongoose.connection.close();
  } catch (error) {
      console.log(error);
  }
}

printTimeEntries();