import React from "react";

function Student({ studentkey, inforStudent, handleEditStudent,handleDeleteStudent }) {
  const handleEdit = (student) => {
    handleEditStudent(student, true, "update");
  };

  const handleDelete = (idindex) => {
    handleDeleteStudent(idindex)
  }
  return (
    <tr key={studentkey}>
      <td>{studentkey + 1}</td>
      <td>{inforStudent.studentID}</td>
      <td>{inforStudent.studentName}</td>
      <td>{inforStudent.studentAge}</td>

      <td>
        {inforStudent.gender === "Nam"
          ? "Nam"
          : inforStudent.gender === "nu"
          ? "Nữ"
          : "Khác"}
      </td>

      <td>
        <div className="template-demo">
          <button type="button" className="btn btn-danger btn-icon-text">
            Xem
          </button>
          <button
            type="button"
            className="btn btn-warning btn-icon-text"
            onClick={() => handleEdit(inforStudent)}
          >
            Sửa
          </button>
          <button type="button" className="btn btn-success btn-icon-text" onClick={() => handleDelete(studentkey) }>
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Student;
