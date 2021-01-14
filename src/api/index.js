import axios from 'axios';

export const fetchVideos = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${process.env.REACT_APP_API_KEY}`;

    try {
        const data = await axios.get(url)
        console.log(data.data.items)
        return data.data.items;
    } catch (error) {
        return 'error'
    }
}