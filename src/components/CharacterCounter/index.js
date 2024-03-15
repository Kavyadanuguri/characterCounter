import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {textInput: '', itemsList: []}

  getInput = event => {
    this.setState({textInput: event.target.value})
  }

  getInputLength = event => {
    event.preventDefault()
    const {textInput} = this.state
    const textData = {id: uuidV4(), text: textInput}
    this.setState(prevState => ({
      itemsList: [...prevState.itemsList, textData],
    }))
    this.setState({textInput: ''})
  }

  render() {
    const {textInput, itemsList} = this.state
    const isValue = itemsList.length === 0

    return (
      <div className="bg-container">
        <div className="container1">
          <div className="con1">
            <h1 className="heading1">Count the characters like a Boss...</h1>
          </div>
          {isValue ? (
            <img
              className="image1"
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <ul className="ul-container">
              {itemsList.map(each => (
                <li key={each.id} className="list-container">
                  <p className="list-p1">
                    {each.text} : {each.text.length}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="container2">
          <h1 className="heading2">Character Counter</h1>
          <form onSubmit={this.getInputLength} className="input-container">
            <input
              value={textInput}
              className="input1"
              placeholder="Enter the Characters here"
              type="text"
              onChange={this.getInput}
            />
            <button className="btn1" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
