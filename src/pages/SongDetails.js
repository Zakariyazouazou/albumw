import { data } from 'autoprefixer';
import React from 'react';
import { useParams } from 'react-router-dom';
import { dataSong } from '../Data/Data';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';

const SongDetails = () => {
   const {songid} = useParams() 
   const dispatch = useDispatch();
   const { activeSong , isPlaying } = useSelector((state) => state.player);
   const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
   for (var i = 0 ; i < dataSong.length-2 ; i++){
    if(dataSong[i].key==songid) {
        return (
            <div>
              <Loader/>
              <br />
               <h1 className='font-bold text-white text-center'>we serching for  {dataSong[i].title} {dataSong[i].subtitle}</h1>
            </div>
            )
    }   
}

    }

export default SongDetails;
