// @flow
import ReactDOM from "react-dom";
import React from "react";

type $Props = any;
type $State = any;

class App extends React.Component<$Props, $State> {
  render() {
    return <div>Hello World</div>;
  }
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<App />, root);
}
