import React, { useRef } from "react";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../context/usersAPi";
import user from "../../assets/user.png";
import { FaTrashAlt } from "react-icons/fa";

const Users = () => {
  let { data, isLoading, isError } = useGetUsersQuery();
  let [deleteUser, {}] = useDeleteUserMutation();
  const title = useRef();
  const handleDeleteUser = (id) => {
    deleteUser(id);
  };
  let users = data?.data?.map((el, inx) => (
    <div className="card" key={el.id}>
      <img src={user} alt="" />
      <h1>
        {el.FirstName} {el.LastName}
      </h1>
      <h2>{el.UserName}</h2>
      <h3>{el.phones}</h3>
      <div className="role">{el.role}</div>
      <button
        onClick={() => handleDeleteUser(el.id)}
        className="btn btn-delete"
      >
        <FaTrashAlt className="trash" />
        Delete
      </button>
    </div>
  ));
  return <div className="wrapper user container">{users}</div>;
};

export default Users;
