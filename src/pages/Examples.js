import React, { Component, Fragment } from 'react';

import Headline from '../components/Headline'
import useToggleMessage from '../hooks/useToggleMessage'

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

  return (
    <Fragment>
      <BadWay />
      <GoodWay />
    </Fragment>
  )
}

export default Home;
