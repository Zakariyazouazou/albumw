import React from 'react';

import SongBar from './SongBar';

const RelatedSongs = ({artisteData,specialId, data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

    <div className="mt-6 w-full flex flex-col">
          <SongBar
             data={data}
             artisteData={artisteData}
             specialId={specialId}
        />  
    </div>
  </div>
);

export default RelatedSongs;





// <SongBar
//           key={`${artistId}-${song.key}-${i}`}
//           song={song}
//           i={i}
//           artistId={artistId}
//           isPlaying={isPlaying}
//           activeSong={activeSong}
//           handlePauseClick={handlePauseClick}
//           handlePlayClick={handlePlayClick}
//         />  