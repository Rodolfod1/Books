import React from 'react'
import "../Style/style.css"

const Col = (props) => {
    return (
        <div className="col-sm">{props.children}
        </div>
    )
}

export default Col
