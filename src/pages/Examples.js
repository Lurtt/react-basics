import React, { Component, Fragment, useContext } from 'react';

import UserContext from '../contexts/userContext'
import Headline from '../components/Headline'
import useToggleMessage from '../hooks/useToggleMessage'
import TextInput from '../components/TextInput'

class BadWay extends Component {
  state = {
    message: "AHOJ!!!!",
    isOpen: false
  }

  componentDidMount() {
    // console.log("after render")
  }

  onToggle = () => {
    this.setState((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    const { message, isOpen } = this.state

    return (
      <Fragment>
        <Headline level={3}>class component</Headline>
        {isOpen && <div>{message}</div>}
        <button onClick={this.onToggle}>toggle message</button>
      </Fragment>
    )
  }
}

const GoodWay = () => {
  const { message, isOpen, setIsOpen } = useToggleMessage()

  // const onToggle = () => setIsOpen(!isOpen)
  
  return (
    <Fragment>
        <Headline level={3}>fuction statefull component</Headline>
        {isOpen && <div>{message}</div>}
        <button onClick={() => setIsOpen(!isOpen)}>toggle message</button>
      </Fragment>
  )
}

const Home = () => {
  const { user, onLogin, onLogout } = useContext(UserContext)

  const handleOnChange = (key, value) => onLogin({
    ...user,
    [key]: value
  })

  // const saveFirstname = ({ target }) => onLogin({
  //   firstname: target.value,
  //   lastname,
  //   email,
  // })

  // const saveLastname = ({ target }) => onLogin({
  //   firstname,
  //   lastname: target.value,
  //   email,
  // })

  // const saveEmail = ({ target }) => onLogin({
  //   firstname,
  //   lastname,
  //   email: target.value,
  // })

  return (
    <Fragment>
      <BadWay />
      <GoodWay />
      <hr />
      <div>{user.firstname}, {user.lastname}, {user.email}</div>
      <div>
        <TextInput textColor="red" type="text" placeholder="firstname" onChange={({ target }) => handleOnChange("firstname", target.value)} />
        <TextInput disabled type="text" placeholder="lastname" onChange={({ target }) => handleOnChange("lastname", target.value)} />
        <TextInput type="text" placeholder="email" onChange={({ target }) => handleOnChange("email", target.value)} />

        {/*
          <input type="text" placeholder="lastname" onChange={saveLastname} />
          <input type="text" placeholder="email" onChange={saveEmail} />
        */}

        <button onClick={onLogout}>Reset</button>
      </div>
    </Fragment>
  )
}

export default Home;
