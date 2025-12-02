import React from "react";

export default class Form extends React.Component {
  state = {
    title: "Javascript",
    text: "Hello there! How are you?",
    library: "Angular",
    isAwesome: true,
  };

  handleChange = (e) => {
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log("Nothing here!");
    }
  };

  submitHandler = (e) => {
    const { title, text, library, isAwesome } = this.state;

    e.preventDefault();
    console.log(title, text, library, isAwesome);
  };

  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <>
        <div>
          <form onSubmit={this.submitHandler}>
            <input type="text" value={null}></input>
            <input
              name="title"
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={this.handleChange}
            />

            <br></br>
            <br></br>

            <textarea
              name="textArea"
              type="textarea"
              value={text}
              onChange={this.handleChange}
            ></textarea>

            <br></br>
            <br></br>

            <select value={library} onChange={this.handleChange}>
              <option value={"React"}>React</option>
              <option value={"Angular"}>Angular</option>
            </select>

            <br></br>
            <br></br>

            <input
              type="checkbox"
              checked={isAwesome}
              onChange={this.handleChange}
            ></input>

            <br></br>
            <br></br>

            <input type="submit" value={"Submit"}></input>
          </form>
        </div>
      </>
    );
  }
}
