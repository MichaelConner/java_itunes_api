import React from 'react';
import SongDetail from './SongDetail'

const ChartDetail = (props) => {
    if(props.songs == null || props.songs.length === 0) {
    return <p>Loading...</p>
    }
    return(
        <div>
            {props.songs.map((song, index) => {
            return(
             <SongDetail
                title={song['im:name'].label}
            />
    )
   })}
   </div>
   )
};

export default ChartDetail;