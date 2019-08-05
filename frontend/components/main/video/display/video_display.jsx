import React from 'react';

class VideoDisplay extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.retrieveVideo(1)
    }


    render(){
        let video = this.props.video || {
            one: {
                title: "",
                description: "",
                year: "",
                photoUrl: "",
                videoUrl: "",
            }
        
        }
   
        return (
            <div className="video-display">
                <div className="video-display-item">
                    {/* <h1>{video.title}</h1> */}
                    {/* <p>{video.description}</p> */}
                    {/* <h2>{video.year}</h2> */}
                    <video className="display-video" src={video.videoUrl} autoPlay> </video>
                </div>
            </div>
        )
    }
}

export default VideoDisplay;