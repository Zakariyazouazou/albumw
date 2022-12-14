import React from 'react';
import { Link } from 'react-router-dom';
import { dataSong } from '../Data/Data';
import PlayPause from './PlayPause';
import {FaSnapchatSquare} from 'react-icons/fa'
import {SiGravatar} from 'react-icons/si'
import { GiJewelCrown} from 'react-icons/gi' 
import { AiFillTwitterCircle} from 'react-icons/ai'

import { AiFillPlaySquare} from 'react-icons/ai'
import { GiLoveSong} from 'react-icons/gi'
import {  GiPoisonGas} from 'react-icons/gi' 



const SongBar = ({artisteData,specialId, song, data, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
     console.log('this '+data.subject); 
  return (
            <>
            <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
              <Link to="/top-artists">
                 <p className="text-xl font-bold text-white">
                 <GiPoisonGas className='text-3xl float-left mr-2'/> {data.subject}
                 </p>
               </Link>               
            </div>
            <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
            <Link to={`/songs/${artisteData.key}`}>
               <p className="text-xl font-bold text-white">
               <GiLoveSong className='text-3xl float-left mr-2'/>  {data.text}
               </p>
             </Link>               
            </div>
            <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
            <a href="https://www.shazam.com/track/632531170/unholy" target='_blank'>
               <p className="text-xl font-bold text-white">
               <AiFillPlaySquare className='text-3xl float-left mr-2'/> Shazem Link to My songs
               </p>
             </a>               
            </div>
            <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
            <a href={data.html} target='_blank'>
               <p className="text-xl font-bold text-white">
               <AiFillTwitterCircle className='text-3xl float-left mr-2'/> My Twitter : {artisteData.subtitle}
               </p>
             </a>               
            </div>
            <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
              <a target='_blank' href={data.twitter}>
                <p className="text-xl font-bold text-white">
                <GiJewelCrown className='text-3xl float-left mr-2'/> welcome to my html 
                </p>
              </a>               
            </div>
            <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
              <a target='_blank' href={data.avatar}>
                <p className="text-xl font-bold text-white">
                <SiGravatar className='text-3xl float-left mr-2'/> avatar project : {artisteData.title}
                </p>
              </a>               
            </div>
            <div className={`w-full flex flex-row items-center hover:bg-[#461ecb] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
              <a target='_blank' href={data.snapchat}>
                <p className="text-xl font-bold text-white">
                   <FaSnapchatSquare className='text-3xl float-left mr-2'/> hello to My snapchat name : {artisteData.subtitle}
                </p>
              </a>               
            </div>
              
            
            </>
    );
      }

export default SongBar;


