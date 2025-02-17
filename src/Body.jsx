// using spread operator
import { AnimeCard } from "./AnimeCard";
import { Items } from "./constants";

import "./App.css";


export const Body = () => {
    return (

        <div className='body'>

            {Items.map(item => (
                <AnimeCard key={item.id} {...item} />
                // <AnimeCard key={item.id} cardItem={item} />

            ))}

        </div>
    )
}
