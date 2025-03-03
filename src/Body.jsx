// using spread operator
import { AnimeCard } from "./AnimeCard";
import { Items } from "./constants";

import "./App.css";
import { useState } from "react";

// state
/*

*/
// hook
/* for eg. useState */
// useState

export const Body = () => {

    const [searchText, setSearchText] = useState("Naruto");

    const [animeList, setAnimeList] = useState(Items);

    //useState returns an array. first element of the array is the searchText variable.
    // you put the initital value of searchText in useState


    const filterData = (text) => {

        const filterList = Items.filter(
            (item) => {
                console.log(item.name); 
                return item.name.toLowerCase().includes(text);
            }
        )
        console.log(filterList);
        return filterList;
    }

    return (
        <>
            <div className="search-container">

                {/* React has one way data-binding, we need two way data binding */}
                {/* whenever input is changed, onChangeInput function will be called. 
                which has event as an input. 
                onChange is a default parameter. */}
                {/* onChange={(e) => onChangeInput} */}

                <input type="text" placeholder="Search" 
                className="search-input" 
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)} />


                {/* onClick={() => {
                (isClicked === "true") ? setIsClicked("false"):setIsClicked("true");
                }}  */}


                <button className="search-btn" 
                onClick={() => setAnimeList(filterData(searchText))}
                > Search</button>
            </div>
            <div className='body'>
                {animeList.map(item => (
                    <AnimeCard key={item.id} {...item} />
                    // <AnimeCard key={item.id} cardItem={item} />

                ))}

            </div>
        </>
    )
}
