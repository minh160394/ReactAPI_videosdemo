import axios from 'axios';
const Key = 'AIzaSyAoOngjugZWm8Y3PVjFYKskuWgHtuq6OT0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: Key
    }
});