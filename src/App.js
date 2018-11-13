import React, { Component } from "react";

const options = [
  { candidate: "Barack Obama", rank: 0 },
  { candidate: "George Bush", rank: 0 },
  { candidate: "Hillary Clinton", rank: 0 },
  { candidate: "Bernie Sanders", rank: 0 },
  { candidate: "Marco Rubio", rank: 0 },
  { candidate: "Donald Trump", rank: 0 }
];

const containerStyles = {
  width: "250px",
  margin: "0 auto",
  padding: "15px"
};
const buttonStyles = {
  padding: "5px",
  textAlign: "center",
  backgroundColor: "#d8d8d8",
  fontWeight: "bold",
  cursor: "pointer"
};
const clearStyles = {
  ...buttonStyles,
  marginBottom: "15px"
};
const optionStyles = {
  marginBottom: "5px",
  cursor: "pointer"
};
const rankStyles = {
  ...buttonStyles,
  display: "inline-block",
  width: "20px",
  height: "20px",
  marginRight: "5px"
};
const submitStyles = {
  ...buttonStyles,
  marginTop: "15px",
  backgroundColor: "#00b06f",
  color: "white"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { options, totalRank: 0, submitted: false };
  }

  handleClear = () => {
    const { options } = this.state;
    options.forEach(option => (option.rank = 0));
    this.setState({ options, totalRank: 0, submitted: false });
  };

  handleClick = optionIndex => {
    let { options, totalRank } = this.state;
    if (options[optionIndex].rank) {
      totalRank--;
      options.forEach(option => {
        if (option.rank > options[optionIndex].rank) {
          option.rank--;
        }
      });
      options[optionIndex].rank = 0;
    } else {
      totalRank++;
      options[optionIndex].rank += totalRank;
    }
    this.setState({ options, totalRank });
  };

  handleSubmit = () => {
    this.setState({ submitted: !this.state.submitted });
  };

  render() {
    return (
      <div style={containerStyles}>
        <div onClick={this.handleClear} style={clearStyles}>
          Clear all
        </div>
        {this.state.options.map((option, i) => (
          <div
            key={`${option.candidate}-${i}`}
            onClick={() => this.handleClick(i)}
            style={optionStyles}
          >
            <div style={rankStyles}>
              <div style={{ opacity: option.rank ? 1 : 0 }}>{option.rank}</div>
            </div>
            {option.candidate}
          </div>
        ))}
        <div onClick={this.handleSubmit} style={submitStyles}>
          {this.state.submitted ? "Nice!" : "Submit"}
        </div>
      </div>
    );
  }
}

export default App;
