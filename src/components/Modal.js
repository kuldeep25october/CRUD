import React from "react";
import { Modal, Button } from "antd";

const ModalForm = ({
  visible,
  setIsModalVisible,
  setUserInfo,
  newUser,
  setNewUser,
  form,
  editForm,
  userInfo,
  getId,
}) => {
  var User = [];
  const handleAdd = (e) => {
    e.preventDefault();
    const oldUser = JSON.parse(localStorage.getItem("tableData"));
    if (oldUser?.length > 0) {
      const getDuplicateId = oldUser.find((item) => {
        if (item.id === newUser.id) {
          return item;
        }
      });
      if (getDuplicateId) {
        alert("ID already exist");
        form.resetFields();
        setIsModalVisible(false);
        return false;
      } else {
        if (newUser.id === "") {
          alert("ID is must");
          form.resetFields(false);
          setIsModalVisible(true);
          return false;
        }
        User = [...oldUser, newUser];
        localStorage.setItem("tableData", JSON.stringify(User));
      }
    } else {
      if (newUser.id === "") {
        alert("ID is must");
        form.resetFields(false);
        setIsModalVisible(true);
        return false;
      }
      User.push(newUser);
      localStorage.setItem("tableData", JSON.stringify(User));
    }
    setUserInfo([...User]);
    form.resetFields();
    setIsModalVisible(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const localStoragetableData = JSON.parse(localStorage.getItem("tableData"));
    if (localStoragetableData) {
      const afterEdit = userInfo.filter((info) => info?.id !== getId);
      User = [...afterEdit, newUser];
      const sortedUser = User.sort((a, b) => a.id - b.id);
      localStorage.setItem("tableData", JSON.stringify(sortedUser));
      setUserInfo([...sortedUser]);
      setIsModalVisible(false);
    }
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setIsModalVisible(false);
  };

  return (
    <>
      {editForm ? (
        <Modal
          title="Update User"
          visible={visible}
          footer={null}
          closable={false}
        >
          <form className="form">
            {editForm ? (
              <div>
                <label className="modalFormLabel" for="id">
                  ID:
                </label>
                <input
                  value={newUser.id}
                  name="id"
                  id="id"
                  readOnly="true"
                  onChange={(e) =>
                    setNewUser({ ...newUser, [e.target.name]: e.target.value })
                  }
                />
              </div>
            ) : (
              <div>
                <label className="modalFormLabel" for="id">
                  ID:
                </label>
                <input
                  value={newUser.id}
                  name="id"
                  id="id"
                  onChange={(e) =>
                    setNewUser({ ...newUser, [e.target.name]: e.target.value })
                  }
                />
              </div>
            )}
            <div>
              <label className="modalFormLabel" for="name">
                Name:
              </label>
              <input
                value={newUser.name}
                name="name"
                id="name"
                onChange={(e) =>
                  setNewUser({ ...newUser, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div>
              <label className="modalFormLabel" for="contact">
                Contact:
              </label>
              <input
                value={newUser.contact}
                name="contact"
                id="contact"
                onChange={(e) =>
                  setNewUser({ ...newUser, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div>
              <label className="modalFormLabel" for="username">
                Username:
              </label>
              <input
                value={newUser.username}
                name="username"
                id="username"
                onChange={(e) =>
                  setNewUser({ ...newUser, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div>
              <label className="modalFormLabel" for="city">
                City:
              </label>
              <input
                value={newUser.city}
                name="city"
                id="city"
                onChange={(e) =>
                  setNewUser({ ...newUser, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="btnSection">
              <Button
                className="cancelBtn"
                type="primary"
                htmlType="submit"
                onClick={(e) => handleCancel(e)}
              >
                Cancel
              </Button>
              {editForm ? (
                <Button
                  className="updateBtn"
                  type="primary"
                  htmlType="submit"
                  onClick={(e) => handleEdit(e)}
                >
                  Update
                </Button>
              ) : (
                <Button
                  className="addBtn"
                  type="primary"
                  htmlType="submit"
                  onClick={(e) => handleAdd(e)}
                >
                  Add
                </Button>
              )}
            </div>
          </form>
        </Modal>
      ) : (
        <Modal
          title="Add User"
          visible={visible}
          footer={null}
          closable={false}
        >
          <form className="form">
            {editForm ? (
              <div>
                <label className="modalFormLabel" for="id">
                  ID:
                </label>
                <input
                  value={newUser.id}
                  name="id"
                  id="id"
                  readOnly="true"
                  onChange={(e) =>
                    setNewUser({ ...newUser, [e.target.name]: e.target.value })
                  }
                />
              </div>
            ) : (
              <div>
                <label className="modalFormLabel" id="requiredField" for="id">
                  ID:
                </label>
                <input
                  value={newUser.id}
                  name="id"
                  id="id"
                  onChange={(e) =>
                    setNewUser({ ...newUser, [e.target.name]: e.target.value })
                  }
                />
              </div>
            )}
            <div>
              <label className="modalFormLabel" for="name">
                Name:
              </label>
              <input
                value={newUser.name}
                name="name"
                id="name"
                onChange={(e) =>
                  setNewUser({ ...newUser, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div>
              <label className="modalFormLabel" for="contact">
                Contact:
              </label>
              <input
                value={newUser.contact}
                name="contact"
                id="contact"
                onChange={(e) =>
                  setNewUser({ ...newUser, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div>
              <label className="modalFormLabel" for="username">
                Username:
              </label>
              <input
                value={newUser.username}
                name="username"
                id="username"
                onChange={(e) =>
                  setNewUser({ ...newUser, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div>
              <label className="modalFormLabel" for="city">
                City:
              </label>
              <input
                value={newUser.city}
                name="city"
                id="city"
                onChange={(e) =>
                  setNewUser({ ...newUser, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="btnSection">
              <Button
                className="cancelBtn"
                type="primary"
                htmlType="submit"
                onClick={(e) => handleCancel(e)}
              >
                Cancel
              </Button>
              {editForm ? (
                <Button
                  className="updateBtn"
                  type="primary"
                  htmlType="submit"
                  onClick={(e) => handleEdit(e)}
                >
                  Update
                </Button>
              ) : (
                <Button
                  className="addBtn"
                  type="primary"
                  htmlType="submit"
                  onClick={(e) => handleAdd(e)}
                >
                  Add
                </Button>
              )}
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ModalForm;
