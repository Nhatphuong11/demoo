import React, { useEffect, useState } from "react";

function Form({
  handleSubmitadd,
  actionName,
  selectStudent,
  handleSubmitUpdate,
}) {
  // khai bao state.
  const [inputFrom, setinputFrom] = useState({
    studentID: "",
    studentName: "",
    studentAge: "",
    gender: "Nam",
    birthDay: "",
    birthPlace: "",
    address: "",
  });

  const {
    studentID,
    studentName,
    studentAge,
    gender,
    birthDay,
    birthPlace,
    address,
  } = inputFrom;

  //viet ham channginput
  const handlechangInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    setinputFrom({ ...inputFrom, [nameInput]: valueInput });
  };

  const handleSubmitFrom = (e) => {
    e.preventDefault();
    handleSubmitadd(inputFrom, false);
  };

  const handleUpdateFrom = (e) => {
    e.preventDefault();
    handleSubmitUpdate(inputFrom, false);
  };

  useEffect(() => {
    setinputFrom(selectStudent);
  }, [selectStudent]);

  return (
    //su kien onChang, name, click

    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentID"
                  value={studentID}
                  onChange={handlechangInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentName"
                  value={studentName}
                  onChange={handlechangInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentAge"
                  value={studentAge}
                  onChange={handlechangInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="gender"
                  value={gender}
                  onChange={handlechangInput}
                >
                  <option value={"Nam"}>Nam</option>
                  <option value={"nu"}>Nữ</option>
                  <option value={"khac"}>Khác</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  name="birthDay"
                  value={birthDay}
                  onChange={handlechangInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="birthPlace"
                  value={birthPlace}
                  onChange={handlechangInput}
                >
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"hcm"}>TP. Hồ Chí Minh</option>
                  <option value={"DN"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  name="address"
                  value={address}
                  onChange={handlechangInput}
                />
              </div>
            </div>

            {actionName === "Add" ? (
              <button
                type="submit"
                className="btn btn-primary me-2"
                onClick={handleSubmitFrom}
              >
                Submit
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary me-2"
                onClick={handleUpdateFrom}
              >
                Update
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
