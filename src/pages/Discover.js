
import {dataSong} from '../Data/Data'
import { genres } from '../assets/constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React , {useEffect , useState} from 'react';
import { Error, Loader, SongCard } from '../components';
var isFetching = false



const Discover = () =>{
     const [data , setData ] = useState([]) ; 
     const genretitel = 'pop'
     const { activeSong, isPlaying } = useSelector((state) => state.player);


  return (
      
         <div className='flex flex-col'>
            <div className='w-full flex justify-between sm:flex-row flex-col mt-4 mb-10'>
               <h2 className="font-bold text-3xl text-white text-left">Dicover {genretitel}</h2>


               <select 
                   onChange={()=>{}}
                   value=""
                   className='bg-black text-gray-300 text-sm rounded-lg outline-none sm:mt-0 mt-5'
               >
                  {genres.map((genre)=>{
                   return <option key={genre.value} value={genre.value}>{genre.title}</option>
                  })}
                 
               </select>
            </div>
            
            

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
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
        )
 }
    

export default Discover;
