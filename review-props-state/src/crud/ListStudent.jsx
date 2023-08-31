import React from "react";
import Student from "./Student";

function listStudent({ ListStudentProps, handleEdit, handleDelete, student }) {
  return (
    <div>
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {ListStudentProps.map((element, index) => (
                <Student
                  key={index}
                  studentkey={index}
                  inforStudent={element}
                  handleEditStudent={handleEdit}
                  handleDeleteStudent={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default listStudent;
