import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/actions/courseActions";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  }

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({course});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //this.props.actions.createCourse(this.state.course);
    this.props.createCourse(this.state.course);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input 
          type="text" 
          value={this.state.course.title}
          onChange={this.handleChange}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map( course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  //actions: PropTypes.object.isRequired
  createCourse: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return { courses: state.courses }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(courseActions, dispatch)
//   }
// }

const mapDispatchToProps = {
  createCourse: courseActions.createCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
