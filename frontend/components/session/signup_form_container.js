import { connect } from 'react-redux';
import SessionForm from './sesions_form';
import { signup } from '../../actions/session_actions.js';

const msp = state => {
    return {
        user: state.user,
        formType: "Signup"
    }
}

const mdp = dispatch => {
    return {
        signup: user => dispatch(signup(user))
    }
}

export default connect(msp, mdp)(SessionForm);