import React from 'react'
import "../Style/style.css"

function Row(props) {
    return (
        <div className="row row-space">{props.children}
        </div>
    )
}

export default Row
