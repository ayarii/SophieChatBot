import React ,{ useState, useEffect }from 'react'
import User from './User'


function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = async () => { // async becaus we're calling fetch tasks which returns a promise
          const usersFromServer = await fetchUsers()
          setUsers(usersFromServer);
        }
        getUsers()
      }, [])//if you have a value where you want this to run if that value changes like user or something

    // Fetch Users
    const fetchUsers = async () => {
        const res = await fetch('http://localhost:5000/users')
        const data = await res.json()
        console.log(data)
        return data
    }


  //Delete User

  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, { method: 'DELETE' })
    setUsers(users.filter((user) => user.id != id))
    console.log("users : ", users)
  }





    return (
        <div>
            {users.map((user) => (
                <User key={user._id} user={user}  onDelete={deleteUser} />
                
                
            ))}
        </div>
    )
}

export default Users



