import { RiDeleteBin6Fill } from "@remixicon/react";
import { useCreatedUserStore } from "../hooks/store/createdUserStore";

function CreatedUsers() {
  const { createdUsers, removeCreatedUser } = useCreatedUserStore();
  return (
    <div>
      <h1>Created Users</h1>
      <ul>
        {createdUsers.map((user) => (
          <div
            style={{
              border: "1px solid black",
              padding: "5px",
              margin: "5px",
            }}
            key={user.id}
          >
            {user.id} - {user.name} - {user.job}
            <button onClick={() => removeCreatedUser(user.id)}>
              <RiDeleteBin6Fill />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CreatedUsers;
