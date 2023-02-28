import React, {useState, useRef} from 'react'
import Autocomplete from './autocomplete'



export default function searchBar({CitiesObj}:any) {
    const [autoComplete, setAutoComplete]=useState([]);

    //function used by autocomplete component
    const clearAutocomplete=()=>{
        setAutoComplete([]);
    }
    
    // when typed into input field, return matching cities array and set to state which is passed to Autocomplete component
    function handleAutocomplete(event:any){
       
        if (event.target.value.toLowerCase().trim()===""){
            setAutoComplete([]);
            return;
        }

        const results=CitiesObj.filter((city:any)=>{
            return city.name.toLowerCase().trim().startsWith(event.target.value.toLowerCase().trim());
        });

        //append clearAutocomplete function to first element inside matching cities list
results[0].clearInput=clearAutocomplete;

        setAutoComplete(results);
        
    };
  return (
      <div className="flex h-full w-full items-center">
            <div className="flex w-full border border-purple-200 rounded">
                <input
                onChange={handleAutocomplete}
                    type="text"
                    className="w-full px-4 py-2 bg-purple-100 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="london, bratislava..."
                />
                
               
        <Autocomplete AutocompleteProps={autoComplete}></Autocomplete>
                <button className="transition hover:text-white hover:bg-purple-800 px-4 text-violet-800 bg-white border-l rounded ">
                    Search
                </button>
            </div>
            
        </div>
        
  )
}
