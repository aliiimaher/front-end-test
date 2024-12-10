import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUser } from "../hooks/api/crud/useCreateUser";
import { useDeleteUserById } from "../hooks/api/crud/useDeleteUserById";
import { useUpdateUser } from "../hooks/api/crud/useUpdateUser";
import { useCreatedUserStore } from "../hooks/store/createdUserStore";

function UserManagement() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [userId, setUserId] = useState<number | undefined>();
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const { deleteUser } = useDeleteUserById(userId?.toString() || "");
  const { addCreatedUser, removeCreatedUser } = useCreatedUserStore();

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await useCreateUser(name, job);
      setUserData(data);
      addCreatedUser(data);
    } catch (err) {
      setError("Failed to create user. Please try again.");
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!userId) {
      setError("User ID is required for update.");
      return;
    }
    try {
      const data = await useUpdateUser(userId, name, job);
      setUserData(data);
      //   setCreatedUsers((users) =>
      //     users.map((user) => (user.id === userId ? data : user))
      //   );
    } catch (err) {
      setError("Failed to update user. Please try again.");
    }
  };

  const handleDelete = () => {
    setError(null);
    if (!userId) {
      setError("User ID is required for delete.");
      return;
    }
    deleteUser();
    removeCreatedUser(userId);
    setUserData(null);
    setName("");
    setJob("");
    setUserId(undefined);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>Create User</h2>
        <form onSubmit={handleCreate}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            placeholder="Job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            required
            style={{ marginRight: "10px" }}
          />
          <button type="submit">Create</button>
        </form>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Update User</h2>
        <form onSubmit={handleUpdate}>
          <input
            type="number"
            placeholder="User ID"
            value={userId || ""}
            onChange={(e) => setUserId(Number(e.target.value))}
            required
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            placeholder="Job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            required
            style={{ marginRight: "10px" }}
          />
          <button type="submit">Update</button>
        </form>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Delete User</h2>
        <input
          type="number"
          placeholder="User ID"
          value={userId || ""}
          onChange={(e) => setUserId(Number(e.target.value))}
          required
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleDelete}>Delete this user</button>
      </div>

      <button onClick={() => navigate("/created-users")}>
        Go to created users
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <div>
          <h2>Result:</h2>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Job:</strong> {userData.job}
          </p>
          {userData.id && (
            <p>
              <strong>ID:</strong> {userData.id}
            </p>
          )}
          {userData.createdAt && (
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(userData.createdAt).toLocaleString()}
            </p>
          )}
          {userData.updatedAt && (
            <p>
              <strong>Updated At:</strong>{" "}
              {new Date(userData.updatedAt).toLocaleString()}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default UserManagement;
