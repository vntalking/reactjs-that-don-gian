import { connect } from 'react-redux';
import { changeTheme } from '../actions/changeThemeAction';
import Footer from '../../components/layout/Footer';

const mapDispatchToProps = dispatch => ({
  dispatch,
  changeColorTheme: color => dispatch(changeTheme(color)),
});

function mapStateToProps(state){
  return {
    themeColor: state.color
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);