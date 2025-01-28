import './index.css'

const UserItem = ({user, onEdit, onDelete}) => (
  <li className="listitem-container">
    <div>
      <strong className="user-name">
        {user.first_name} {user.last_name}
      </strong>
      <p className="user-email">Email: {user.email}</p>
      <p className="user-department">Department: {user.department}</p>
    </div>
    <button className="edit-btn" type="button" onClick={() => onEdit(user)}>
      Edit
    </button>
    <button type="button" className="del-btn" onClick={() => onDelete(user.id)}>
      Delete
    </button>
  </li>
)

export default UserItem
