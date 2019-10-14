import React from 'react'
import './SortContainer.css'

const SortContainer = (props) => {
    return (
        <>
            <div className="SortContMain">
                <div class="container">
                    {
                        props.children
                    }
                </div>
            </div>
            
        </>
    )
}

export default SortContainer;