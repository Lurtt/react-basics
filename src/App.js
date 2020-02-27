import React, { Component, Fragment } from 'react';

import './App.css';
import Headline from './Headline'
import useToggleMessage from './hooks/useToggleMessage'
import PokemonList from './PokemonList'

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

const App = () => {

  return (
    <Fragment>
      <Headline>My Frist App</Headline>
      <BadWay />
      <GoodWay />
      <PokemonList />
    </Fragment>
  )
}

export default App;
