import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import {fetchUsers, deleteUser, updateUser} from '../App'
import UserItem from '../UserItem'
import UserForm from '../UserForm'
import './index.css'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editUser, setEditUser] = useState(null)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await fetchUsers()
        setUsers(usersData)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch users')
        setLoading(false)
      }
    }
    getUsers()
  }, [])

  const handleDelete = async userId => {
    try {
      await deleteUser(userId)
      setUsers(users.filter(user => user.id !== userId))
    } catch (err) {
      setError('Failed to delete user')
    }
  }

  const handleEdit = user => {
    setIsEditing(true)
    setEditUser(user)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditUser(null)
  }

  const handleSaveEdit = async updatedUser => {
    // Assuming updateUser function is implemented in api.js
    try {
      const updatedData = await updateUser(editUser.id, updatedUser)
      setUsers(
        users.map(user => (user.id === editUser.id ? updatedData : user)),
      )
      setIsEditing(false)
      setEditUser(null)
    } catch (err) {
      setError('Failed to update user')
    }
  }

  return (
    <div className="bg-container">
      <h1 className="main-head">User Management</h1>
      {error && <div className="error">{error}</div>}
      {loading ? (
        <div className="loader-container">
          <Loader type="ThreeDots" color="white" />
        </div>
      ) : (
        <div className="list-container">
          {isEditing ? (
            <UserForm
              user={editUser}
              onSave={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          ) : (
            <button
              type="button"
              className="add-btn"
              onClick={() => setIsEditing(true)}
            >
              Add User
            </button>
          )}
          <ul>
            {users.map(user => (
              <UserItem
                key={user.id}
                user={user}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default UserList
