
import { data } from 'autoprefixer';
import React from 'react';
import { useParams } from 'react-router-dom';
import { dataSong } from '../Data/Data';

import { useSelector ,useDispatch } from 'react-redux';
import { DetailsHeader, Error,SongCard, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';



const ArtistDetails = () => {


   const {id} = useParams() 
   console.log('id '+id)
   const dispatch = useDispatch();
   const { activeSong , isPlaying } = useSelector((state) => state.player);
   console.log("this is  "+ dataSong[0].artists[0]?.adamid)
   for (var i = 0 ; i < dataSong.length-2 ; i++){
    if(dataSong[i]?.artists[0]?.adamid==id) {
        return (
            <>
               
                    <div className="flex flex-col">
                            <DetailsHeader
                                artistId={id}
                                artistData={dataSong}
                                image={dataSong[i].images?.background}
                            />
                            <RelatedSongs
                                data={dataSong[i].share}
                                artisteData={dataSong[i]}
                                artistId={id}
                                specialId={id}
                                isPlaying={isPlaying}
                                activeSong={activeSong}
                            
                            />
                           
                                   <SongCard
                                       key={dataSong[i].key}
                                       i={i}
                                       data={dataSong}
                                       song={dataSong[i]}
                                       isPlaying={isPlaying}
                                       activeSong={activeSong}
                  
                                   />
                 
                             
                </div>
            
            </>
            )
    }   
}

    }


    export default ArtistDetails;