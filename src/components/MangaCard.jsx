import React from "react";

const MangaCard = ({ title, image, score, popularity, synopsis, genres }) => {
    return(
        <div>
            <h3>
                Title: {title}
            </h3>
            <img src={image} alt='mangaPic'/>
            <h5>
                Score: {score}
            </h5>
            <h5>
                Popularity: {popularity}
            </h5>
            <h5>
                Synopsis: {synopsis}
            </h5>
            <h5>
                Genre: {genres}
            </h5>
        </div>
    )
}

export default MangaCard;