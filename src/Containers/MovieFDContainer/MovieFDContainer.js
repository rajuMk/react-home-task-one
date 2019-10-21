import React from 'react';
import './MovieFDContainer.css'

const MovieFDContainer = (props) =>{

    return(
        <>
            <div class="mt-3 sortByMain">
                {
                props.children
                }
            </div>
        </>
    )
}

// class App extends Component{
//     state = {
//         movies: [],
//         filteredMovies: [],
//         searchBy: "title",
//         sortBy: "releaseDate"
//       }
// }

export default MovieFDContainer;