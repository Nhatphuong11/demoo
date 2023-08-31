import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
function UserPage() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortInput, setSortInput] = useState("");
  // trang hien tai
  const [curPage, setCurPage] = useState(1);
  // so luong hien thi 1 trang
  const [limitPage, setLimitPage] = useState(5);
  //tong so trang
  const [totalPage, setTotalPage] = useState(1);

  const handleSort = (e) => {
    setSortInput(e.target.value);
  };
  // const sortType = async () => {
  //   let url = `http://localhost:8000/users`;
  //   if (sortInput === "1") {
  //     url += `?_sort=name&_order=asc&_page=${curPage}&_limit=${limitPage}`;
  //   } else if (sortInput === "2") {
  //     url += `?_sort=age&_order=asc&_page=${curPage}&_limit=${limitPage}`;
  //   } else if (sortInput === "3") {
  //     url += `?_sort=age&_order=desc&_page=${curPage}&_limit=${limitPage}`;
  //   }
  //   const resultSort = await axios.get(url);
  //   setData(resultSort.data);
  // };

  // useEffect(() => {
  //   sortType();
  // }, [sortInput]);

  const loadUser = async () => {
    let result = await axios.get(`http://localhost:8000/users`);
    setData(result.data);

    let url = `http://localhost:8000/users?_page=${curPage}&_limit=${limitPage}`;
    if (searchInput) {
      url = `http://localhost:8000/users?q=${searchInput}`;
    } else if (sortInput){
      if (sortInput === "1") {
        url = `http://localhost:8000/users?_sort=name&_order=asc&_page=${curPage}&_limit=${limitPage}`;
      }else if (sortInput === "2") {
        url = `http://localhost:8000/users?_sort=age&_order=asc&_page=${curPage}&_limit=${limitPage}`;
      } else if (sortInput === "3") {
        url = `http://localhost:8000/users?_sort=age&_order=desc&_page=${curPage}&_limit=${limitPage}`;
      }
    }
    // else if (sortInput === "1") {
    //   url += `?_sort=name&_order=asc&_page=${curPage}&_limit=${limitPage}`;
    // } else if (sortInput === "2") {
    //   url += `?_sort=age&_order=asc&_page=${curPage}&_limit=${limitPage}`;
    // } else if (sortInput === "3") {
    //   url += `?_sort=age&_order=desc&_page=${curPage}&_limit=${limitPage}`;
    // }
    let resutl = await axios.get(url);
    const countRes = resutl.headers["x-total-count"];
    const totalRes = Math.ceil(countRes / limitPage);
    setData(resutl.data);
    setTotalPage(totalRes);
  };

  let PaginationItem = []
  for(let i= 1; i <= totalPage; i++) {
    PaginationItem.push(
      <Pagination.Item
        key={i}
        onClick={()=>setCurPage(i)}
        active={i === curPage}
      >{i}
      </Pagination.Item>
    )
  }

  useEffect(() => {
    loadUser();
  }, [searchInput, curPage, sortInput]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/users//${id}`);
    loadUser();
  };

  return (
    <div>
      <h1>Quản lý Users</h1>
      <Navbar className="bg-body-tertiary justify-content-around">
        <Form inline>
          <Link to={"/add-user"}>
            <Button variant="success">Add User</Button>
          </Link>
        </Form>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
        <div>
          <select onClick={handleSort}>
            <option value="">Sắp xếp</option>
            <option value="1">Sắp xếp theo tên A-Z</option>
            <option value="2">Sắp xếp theo tuổi tăng dần</option>
            <option value="3">Sắp xếp theo tuổi giảm dần</option>
          </select>
        </div>
      </Navbar>

      <Table
        striped
        bordered
        hover
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>Stt</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{element.name}</td>
              <td>{element.age}</td>
              <td>{element.email}</td>
              <td>{element.phone}</td>
              <td>
                <Button variant="success">view</Button>
              </td>
              <Link to={`/edit-user/${element.id}`}>
                <Button variant="warning">edit</Button>
              </Link>
              <td>
                <Button
                  onClick={() => handleDelete(element.id)}
                  variant="danger"
                >
                  delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.Prev onClick={()=>setCurPage(curPage - 1)} disabled={curPage===1}/>
        {/* <Pagination.Item>{1}</Pagination.Item> */}
        {PaginationItem}
        <Pagination.Next onClick={()=>setCurPage(curPage + 1)} disabled={curPage === totalPage}/>
      </Pagination>
    </div>
  );
}

export default UserPage;
