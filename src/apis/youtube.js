import axios from "axios";

const KEY = 'AIzaSyA6fSTORFHv-7HJ3kjhNVyIsW51Ui7i15Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})