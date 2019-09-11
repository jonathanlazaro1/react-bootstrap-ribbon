import React from "react";

class Ribbon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mobileCurrentGroup: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({ mobileCurrentGroup: ev.target.value * 1 });
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <div className="d-md-none ribbon p-2">
          <div className="row">
            <div className="col">
              <select className="form-control" onChange={this.handleChange}>
                {React.Children.map(children, (item, index) => {
                  return (
                    <option key={index} value={index}>
                      {item.props.title}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {children &&
            React.Children.map(children, (item, index) => (
              <div
                key={index}
                className={`ribbon-group ${item.props.colClass ||
                  "col"} mobile-ribbon-item ${
                  index === this.state.mobileCurrentGroup ? "active" : ""
                }`}
              >
                <div className="row justify-content-center">
                  {item.props.children}
                </div>
              </div>
            ))}
        </div>
        <div className="ribbon d-none d-md-block pb-1">
          <div className="row">{children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Ribbon;
