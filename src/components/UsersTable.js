import React, { useState } from "react";
import { Table } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalForm from "./Modal";
import EditIcon from "@mui/icons-material/Edit";
import { Form } from "antd";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const UsersTable = ({ setTokenData }) => {
  const localStorageData = JSON.parse(localStorage.getItem("tableData"));

  const [userInfo, setUserInfo] = useState(localStorageData || []);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const initialValues = {
    id: "",
    name: "",
    contact: "",
    username: "",
    city: "",
  };

  const [newUser, setNewUser] = useState(initialValues);
  const [form] = Form.useForm();
  const [editForm, setEditForm] = useState(false);
  const [getId, setGetId] = useState();

  const handleDelete = (id) => {
    const afterDelete = userInfo?.filter((info) => info?.id !== id);
    setUserInfo(afterDelete);
    localStorage.setItem("tableData", JSON.stringify(afterDelete));
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setTokenData(null);
    toLogin();
  };

  const showModal = (info) => {
    setIsModalVisible(true);
    setNewUser(initialValues);

    if (info) {
      setEditForm(true);
      setNewUser(info);
    } else {
      setEditForm(false);
      form.resetFields();
    }
  };

  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/");
  };

  return (
    <>
      <div className="parentDiv">
        {userInfo?.length !== 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Username</th>
                <th>City</th>
                <th className="tableColActn">Action</th>
              </tr>
            </thead>
            <tbody>
              {userInfo?.map((info) => {
                return (
                  <tr>
                    <td>{info?.id}</td>
                    <td>{info?.name}</td>
                    <td>{info?.contact}</td>
                    <td>{info?.username}</td>
                    <td>{info?.city}</td>
                    <td className="tableColActnData">
                      <DeleteIcon
                        className="deleteIcon"
                        onClick={() => handleDelete(info?.id)}
                      />
                      <EditIcon
                        className="editIcon"
                        onClick={() => {
                          showModal(info);
                          setGetId(info?.id);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : null}
        <Header showModal={showModal} handleLogout={handleLogout} />

        <ModalForm
          visible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          setUserInfo={setUserInfo}
          userInfo={userInfo}
          newUser={newUser}
          setNewUser={setNewUser}
          form={form}
          editForm={editForm}
          getId={getId}
        />
      </div>
    </>
  );
};
export default UsersTable;
