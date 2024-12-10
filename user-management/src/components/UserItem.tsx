import "../styles/components/UserItem.style.scss";

interface UserItemProps {
  first_name: string;
  onClick?: () => void;
}

function UserItem({ first_name, onClick }: UserItemProps) {
  return (
    <div className="user-item" onClick={onClick}>
      <p>{first_name}</p>
    </div>
  );
}

export default UserItem;
