import React from "react";
import Glasses from "./Glasses";

class GlassesBrowser extends React.Component {

  componentDidMount() {
  }
  
  renderGlasses = () => {
    return this.props.glasses.map((glasses, index) => {
      return <Glasses glasses={glasses} key={index} />;
    });
  };
  render() {
    console.log(this.props.glasses[0])
    return (
      <>
        <div className="container">
          <div className="row">{this.renderGlasses()}</div>
        </div>
      </>
    );
  }
}

export default GlassesBrowser;
