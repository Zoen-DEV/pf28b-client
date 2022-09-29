import React from "react";

const AnimeCard = ({ title, image, release, rating, description, genres }) => {
    return(
        <div>
            <h3>
                Title: {title}
            </h3>
            <img src={image} alt='animePic'/>
            <h5>
                Release Date: {release}
            </h5>
            <h5>
                Rating: {rating}
            </h5>
            <h5>
                Synopsis: {description}
            </h5>
            <h5>
                Genre: {genres}
            </h5>
        </div>
    )
}

export default AnimeCard;