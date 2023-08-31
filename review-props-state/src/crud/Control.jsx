import React from 'react'

function Control({handleToggleAction, toggle, handleSreach}) {
  const handleAddToggle = () => {
    handleToggleAction(!toggle, "Add")
  }

  const handleSerachInput = (e) => {
    handleSreach(e)
  }  

  const handSubmit =(e) => {
    e.preventDefault();
  }
  return (
    <div>
      <div className="card-header">
        <div className="row">
          <div className="col-3">
            {/*viet su kien them moi sv*/}
            <button type="button" className="btn btn-primary btn-icon-text" onClick={handleAddToggle}>
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6">
            <form className="search-form" action="#" onSubmit={handSubmit}>
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
                onChange={(e) => handleSerachInput(e.target.value)}
              />
              <button className="btn btn-primary btn-icon-text">
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control">
              <option value="">Sắp xếp</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Control