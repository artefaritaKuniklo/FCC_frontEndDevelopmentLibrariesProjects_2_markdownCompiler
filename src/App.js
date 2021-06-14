import React from "react";
import "./App.scss";
import marked from "marked";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      html: "",
    };
    this.syncText = this.syncText.bind(this);
  }
  componentDidMount() {}
  syncText = (e) => {
    this.setState((prevState) => {
      return Object.assign({}, prevState, { text: e.target.value });
    });
    this.setState((prevState) => {
      let htmlContent = marked(prevState.text);
      return Object.assign({}, prevState, {
        html: <div dangerouslySetInnerHTML={{ __html: htmlContent }} />,
      });
    });
  };
  render() {
    return (
      <div className="App">
        <nav>
          <h2>Markdown Compiler</h2>
        </nav>
        <div id="panel">
          <textarea id="editor" onChange={this.syncText}></textarea>
          <div id="preview">{this.state.html}</div>
        </div>
      </div>
    );
  }
}

export default App;
