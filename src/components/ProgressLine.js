import React from "react"

import "../styles/components/progress-line.css"

export const ProgressLine = ({ percent }) => {
    return (
        <div className={"progress-line-container"}>
            <div
                className={"progress-line-line"}
                style={{ width: `${percent}%` }}
            />
        </div>
    )
}