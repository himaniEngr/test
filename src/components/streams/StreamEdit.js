import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formValues from "redux-form/lib/formValues";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    // console.log(props, "props");
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps, "*************");
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
