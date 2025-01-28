import axios from 'axios'

const API_URL = 'https://672dbee7fd89797156437fc5.mockapi.io/ladakh/tour/users'

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    throw new Error('Error fetching users')
  }
}

export const addUser = async user => {
  try {
    const response = await axios.post(API_URL, user)
    return response.data
  } catch (error) {
    throw new Error('Error adding user')
  }
}

export const updateUser = async (userId, updatedUser) => {
  try {
    const response = await axios.put(`${API_URL}/${userId}`, updatedUser)
    return response.data
  } catch (err) {
    throw new Error('Error updating user')
  }
}

export const deleteUser = async userId => {
  try {
    await axios.delete(`${API_URL}/${userId}`)
  } catch (err) {
    throw new Error('Error deleting user')
  }
}
