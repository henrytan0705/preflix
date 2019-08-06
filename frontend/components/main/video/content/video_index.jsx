import React from 'react'
import VideoIndexItemContainer from './video_index_item_container';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.retrieveVideos();
    }

    render() {
        if(!this.props.videos) return null;
        let videos = this.props.videos;
        
        let videoItems = Object.values(videos).map((video,idx) => {
            return (<VideoIndexItemContainer key={idx} video={video}/>)
        }) 
      
        return (
            <div className="video-index scrolling-wrapper">
                {videoItems}
                {videoItems}
                {videoItems}
                {videoItems}
                {/* <VideoIndexItemContainer/> */}
                {/* <VideoIndexItemContainer video={this.state.videos[2]}/> */}
            </div>
        )
    }
}

export default VideoIndex;