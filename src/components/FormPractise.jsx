import React from "react";

class FormPractise extends React.Component {
  state = {
    title: "React",
    text: "Hello there",
  };

  handleClick = (e) => {
    // this.setState({
    //   title: e.target.value,
    // });

    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else {
      console.log("Nothing here");
    }
  };
  render() {
    const { title, text } = this.state;
    console.log(title, text);
    return (
      <>
        <div>
          <form>
            <input
              name={title}
              type="text"
              value={title}
              onChange={this.handleClick}
            ></input>

            <br></br>
            <br></br>

            <textarea
              name="text"
              type="textarea"
              value={text}
              onChange={this.handleClick}
            ></textarea>
          </form>
        </div>
      </>
    );
  }
}

export default FormPractise;
