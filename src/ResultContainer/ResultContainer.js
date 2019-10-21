import React from 'react'
import './ResultContainer.css'

const ResultContainer = (props) => {
    return (
        <>
            <div className="ResultContMain">
               
                {
                    props.children
                }
               
            </div>
            
        </>
    )
}

export default ResultContainer;