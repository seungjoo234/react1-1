import React from "react";

export default class Eaxmple extends React.Component {
    
constructor(props) {
    super(props);

    this.state = {
      text: "당신은 어떤 과일을 좋아하나요?",
      FruitsText: "",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.text} {this.state.FruitsText}</h1>
        <button onClick={this.Apple}>사과</button>
        <button onClick={this.Orange}>오렌지</button>
        <button onClick={this.Banana}>바나나</button>
      </div>
    );
    }
    Apple = () => {
        this.setState({
            FruitsText: "사과",
        });
      };
    Orange = () => {
        this.setState({
            FruitsText: "오렌지",
        });
    };
    Banana = () => {
        this.setState({
            FruitsText: "바나나",
        });
    };
  }
