
import { dataSong } from '../Data/Data';
import { genres } from '../assets/constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React , {useEffect , useState} from 'react';
import { Error, Loader, SongCard } from '../components';


const TopCharts = () => {
  const [data , setData ] = useState([]) ; 
  const genretitel = 'pop'
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  console.log(isPlaying)

 

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Charts</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {
        dataSong.map((song , i)=>(
           <SongCard 
               key={song.key}
               i={i}
               data={dataSong}
               song={song}
               isPlaying={isPlaying}
               activeSong={activeSong}

           />

        ))
     } 
      </div>
    </div>
  );
};

export default TopCharts;