import { connect } from 'react-redux';
import { createTodo } from '../actions/TodoActions';
import NewTodo from '../components/AddTodo';

const mapDispatchToProps = dispatch => ({
  dispatch,
  onAddTodo: todo => dispatch(createTodo(todo)),
});

export default connect(
  null,
  mapDispatchToProps
)(NewTodo);