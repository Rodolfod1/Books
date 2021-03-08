import React from 'react'

const ActionBtn = (props) => {
    return (
        <div>
            <a href="#" className="btn btn-primary" {...props}>{props.children}</a>
        </div>
    )
}

export default ActionBtn
