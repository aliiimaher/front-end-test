import { useNavigate } from "react-router-dom";
import { useGetUserLists } from "../hooks/api/useGetUserLists";
import UserItem from "../components/UserItem";
import "../styles/pages/UserList.style.scss";

function UserList() {
  const navigate = useNavigate();
  const {
    userLists,
    loading,
    error,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
  } = useGetUserLists();

  return (
    <div className="main-container">
      <h1>User List</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="users-container">
        {userLists?.map((user: any) => (
          <UserItem
            onClick={() => navigate(`/user/${user.id}`)}
            first_name={user.first_name}
            key={user.id}
          />
        ))}
      </div>

      <div className="btns-container">
        <button
          onClick={() => {
            goToPreviousPage();
            console.log("Previous button clicked");
          }}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => {
            goToNextPage();
            console.log("Next button clicked");
          }}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserList;
