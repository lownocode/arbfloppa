import React from "react"

export const Medium = ({ color = "#fff", size = 15 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 48 48"
        >
            <g>
                <path fill="none" d="M0 0H48V48H0z"></path>
                <path
                    d="M2 40.2l5.3-6.1v-21L2.6 7.8V7h12.5l10 21.2L33.9 7H46v.8l-4 3.7v25.1l4 3.6v.8H28.6v-.8l4.1-4.8V16.6L22.7 41h-1.3L9.8 17.1v16.8l5.3 6.3v.8H2z"
                    fill={color}
                ></path>
            </g>
        </svg>
    )
}