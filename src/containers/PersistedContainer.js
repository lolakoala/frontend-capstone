import Persisted from '../components/Persisted/Persisted.js';
import { connect } from 'react-redux';

const mapStateToProps =  store => ({
  currentUser: store.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Persisted);
