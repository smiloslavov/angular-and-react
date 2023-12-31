import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  componentDidMount() {
    const { courses, actions, authors } = this.props;

    if (courses.length == 0)
      actions.loadCourses();

    if (authors.length == 0)
      actions.loadAuthors();
  }

  render() {
    return (
      <>
        <h2>Courses List</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  //createCourse: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return { 
    courses: state.authors.length === 0 ?
      [] :
      state.courses.map(course => {
        return { 
          ...course, 
          authorName: state.authors.find(author => author.id === course.authorId).name
        }
      }),
    authors: state.authors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch) 
    }
  }
}

// const mapDispatchToProps = {
//   createCourse: courseActions.createCourse,
// }

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
