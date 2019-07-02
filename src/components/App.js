import React, { Component } from 'react';
import Searchbar from "./Searchbar";
import youtube from '../api/youtube';
import Videolist from './VideoList';
import VideoPlay from './VideoPlay';
export default class App extends Component {
    state = { videos: [] , selectedvideo: null};

    componentDidMount() {
        this.onSearchSubmit('reactjs');
    }
    onSearchSubmit = async search => {
        const response = await youtube.get('/search', {
            params: {
                q: search
            }
        });
       this.setState({
            videos: response.data.items,
            selectedvideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({selectedvideo : video});
    }
    render() {
        return (
            <div className="ui container">
                <Searchbar Formsubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoPlay selectedvideo={this.state.selectedvideo}/>
                        </div>
                        <div className="five wide column">
                                <Videolist onselectedvideo={this.onVideoSelect} getvideos={this.state.videos} />
                        </div>
                    </div>
                </div>
                
            
            </div>
        )
    }
}
