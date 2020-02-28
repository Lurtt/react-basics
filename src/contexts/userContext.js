import React, { useState } from 'react'

const fakeUser = {
  firstname: "John",
  lastname: "Rambo",
  email: "john@rambo.com",
}

const emptyUser = {
  firstname: "",
  lastname: "",
  email: "",
}

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(fakeUser)

  const handleLogin = user => setUser(user)

  const handleLogout = () => setUser(emptyUser)

  return (
    <UserContext.Provider value={{
      user,
      onLogin: handleLogin,
      onLogout: handleLogout,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext