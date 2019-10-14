// @flow
import ReactDOM from "react-dom";
import React from "react";

type $Props = any;
type $State = any;

class App extends React.Component<$Props, $State> {
  render() {
    return <div>Hi World again!</div>;
  }
}
// document.getElementById("root") could be null so
// $FlowIgnore
ReactDOM.render(<App />, document.getElementById("root"));
