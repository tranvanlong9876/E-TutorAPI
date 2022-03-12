# fe_tutor_backend


Domain = https://f7tutor.herokuapp.com/

API 
(No authen)

- Domain/admin/login
// login with admin

- Domain/course/getCourseWithStudent/{idStudent}
// get all course student studyng

- Domain/course/getAllCourse
// get all course 

- Domain/student/registerStudent
// body model student
//    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,

- Domain/student/login
// email,password(return true flase);

- Domain/student/getStudentProfile/{idStudent}
// get student profile

- Domain/tutor/getAllTutor
// get all tutor has status pedding 

- Domain/tutor/acceptTutor/{idTutor}
// accept tutor for using account update status to active