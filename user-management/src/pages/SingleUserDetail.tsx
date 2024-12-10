import { useParams } from "react-router-dom";
import { useGetSingleUser } from "../hooks/api/useGetSingleUser";
import "../styles/pages/SingleUserDetail.style.scss";

function SingleUserDetail() {
  const { id } = useParams();
  const { user } = useGetSingleUser(id!);

  return (
    <div className="main-container">
      <h1>Single User Detail</h1>
      {user && (
        <div className="user-card">
          <img src={user.avatar} alt="avatar" />
          <div>
            <p>Email: {user.email}</p>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleUserDetail;
