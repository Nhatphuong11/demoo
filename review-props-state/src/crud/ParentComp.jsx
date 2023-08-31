import React, { useState } from "react";
import Control from "./Control";
import ListStudent from "./ListStudent";
import Form from "./Form";

function ParentComp() {
  const [student, setStudent] = useState([
    {
      studentID: "sv01",
      studentName: "phuong",
      studentAge: "20",
      gender: "Nam",
      birthDay: "20/11/2001",
      birthPlace: "HCM",
      address: "Hn",
    },
    {
      studentID: "sv02",
      studentName: "nam",
      studentAge: "20",
      gender: "Nam",
      birthDay: "20/11/2001",
      birthPlace: "HCM",
      address: "Hn",
    },
    {
      studentID: "sv03",
      studentName: "vu",
      studentAge: "20",
      gender: "nu",
      birthDay: "20/11/2001",
      birthPlace: "HCM",
      address: "Hn",
    },
  ]);

  //togglr sreat student
  const [toggle, setToggle] = useState(false);
  const [actionName, setActioneName] = useState("Add");

  const handleToggleAction = (toggle, action) => {
    setToggle(toggle);
    setActioneName(action);
  };

  //viet ham handléubmit
  const handleSubmitadd = (newStudent, toggle) => {
    setStudent([...student, newStudent]);
    setToggle(toggle);
  };

  // Hàm edit

  const [selectStudent, setSelectStudent] = useState([]);

  const handleEdit = (selectStudent, toggle, action) => {
    setSelectStudent(selectStudent);
    setToggle(toggle);
    setActioneName(action);
  };
  

  //ham update

  const handleSubmitUpdate = (ojbStudent, toggle) => {
    const update = student.map((e) =>
      e.studentID === ojbStudent.studentID ? ojbStudent : e
    );
    setStudent(update);
    setToggle(toggle);
  };

  //ham delete

  const handleDelete = (id) =>{
    const deleteStudent = [...student];
    deleteStudent.splice(id, 1);
    setStudent(deleteStudent);  
  }


  //ham tim kiem
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleSreach = (e)=>{
    setSearchTerm(e);
  }
  const filteredData = student.filter(
    (item) => item.studentName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  console.log(filteredData);

  return (
    <div>
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Control handleToggleAction={handleToggleAction}
             toggle={toggle}
             handleSreach={handleSreach}
             searchTerm={searchTerm}
              />
            {/* END CONTROL */}

            {/* START LIST STUDENT */}
            <ListStudent
              ListStudentProps={
                filteredData.length  > 0 ? filteredData : student
              }
              handleEdit={handleEdit}
              toggle={toggle}
              handleDelete={handleDelete}
              

            />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {/* su dug toggle */}
        {toggle ? (
          <Form
            handleSubmitadd={handleSubmitadd}
            actionName={actionName}
            selectStudent={selectStudent}
            handleSubmitUpdate={handleSubmitUpdate}
            
          />
        ) : (
          ""
        )}
        ;{/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
}

export default ParentComp;
