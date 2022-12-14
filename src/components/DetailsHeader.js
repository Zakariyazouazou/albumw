import React from 'react';
import { Link } from 'react-router-dom';
import { RiArchiveDrawerLine } from "react-icons/ri";

const Mini_details =({useparam , data})=>{
  for (var i = 0 ; i < data.length-2 ; i++){
    if(data[i].artists[0]?.adamid==useparam) {
      return (
        <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">
          {data[i]?.artists.map(details =>(
              <p className='inline-block mr-2'>{details.alias}</p>
          )) }
        </p>
        {!useparam && (
          <Link to={`/artists/${data[i]?.artists[0]?.adamid}`}>
            <p className="text-base text-gray-400 mt-2">{data?.subtitle}</p>
          </Link>
        )}
         
        <p className="text-base text-gray-400 mt-2">
             {
                useparam? data[i].share.subject : data[i].subtitle
             }
        </p>
        
      </div>
        
      )
           
      

    }
  }

}



const DetailsHeader = ({ artistId, artistData, songData,image}) => {
  
return(
  <>
      <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

    <div className="absolute inset-0 flex items-center">
      <img
        alt="profile"
        src={image}
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />
      <Mini_details 
        useparam={artistId}
        data={artistData}
      
      />
    </div>
   
   
    <div className="w-full sm:h-44 h-24"/>
    </div>
</>
)

};

export default DetailsHeader;

