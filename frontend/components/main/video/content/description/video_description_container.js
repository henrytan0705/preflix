import { connect } from 'react-redux';
import VideoDescription from './video_description.jsx';
import { retrieveVideo } from '../../../../../actions/video_actions'

const msp = state => {
    // debugger
    return {
        // video: Object.values(state.videoPlayer)[0]
    }
}

const mdp = dispatch => {
    return {
        // retrieveVideo: id => dispatch(retrieveVideo(id))
    }
}

export default connect(msp, mdp)(VideoDescription);