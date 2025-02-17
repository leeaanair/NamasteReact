import { IMG_URL } from "./constants";

import "./App.css";


// const AnimeCard = ({cardItem}) => {
//     return (
//         <div className='anime-card'>
//             <img className="item-image" src={cardItem.img} alt='anime' />
//             <h2>{cardItem.name}</h2>
//             <h3>Rating: {cardItem.rating}</h3>
//             <h3>Studio: {cardItem.studio}</h3>
//             <h3>Demographic: {cardItem.demographic}</h3>
//         </div>
//     )
// }


//destructuring
export const AnimeCard = ({img, name, rating, studio, demographic}) => {
    return (
        <div className='anime-card'>
            <img className="item-image" src={IMG_URL + img} alt='anime' />
            <h2>{name}</h2>
            <h3>Rating: {rating}</h3>
            <h3>Studio: {studio}</h3>
            <h3>Demographic: {demographic}</h3>
        </div>
    )
}
