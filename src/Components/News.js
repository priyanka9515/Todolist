import React, { Component } from "react";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isloaded: false,
    };
  }
  componentDidMount() {
    fetch("https://newsapi.org/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isloaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isloaded, items } = this.state;
    if (isloaded) {
      return <div>loading</div>;
    } else {
      return <div className="App">data is loaded</div>;
    }
  }
}

export default News;
