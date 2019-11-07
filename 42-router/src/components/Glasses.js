import React from "react";
import { NavLink } from "react-router-dom";

class Glasses extends React.Component {
  render() {
    const { image, style, maker, id } = this.props.glasses;
    return (
      <>
        <div className="col col-md-3">
          <div className="card">
            <NavLink to={`/glasses/${id}`}>
              <img className="card-img-top" src={image} />
            </NavLink>
            <div className="card-body">
              <h3>{style}</h3>
              <h4>{maker}</h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Glasses;
