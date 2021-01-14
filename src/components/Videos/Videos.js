import React from 'react';
import './Videos.css';
import VideoCard from './VideoCard/VideoCard.jsx';
import moment from 'moment'

function Videos({title, data}) {
    if(!data){
        return '...Loading'
    }

    return (
        <div className="videos">
            <h2 className="videos__title">{title}</h2>
            <div className="videos__videos">
               {data.map((el, i) => {
                   return(
                       <VideoCard
                        image={el.snippet.thumbnails.medium.url}
                        title={el.snippet.title}
                        channel={el.snippet.channelTitle}
                        timestamp={moment(el.snippet.publishedAt).fromNow()} />
                   )
               })}
                {/* <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard /> */}
            </div>
        </div>
    )
}

export default Videos
