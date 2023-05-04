import React from "react"

export const Close = ({ color = "#fff", size = 15 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
        >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g>
                    <path fillRule="nonzero" d="M0 0H24V24H0z"></path>
                    <path
                        stroke={color}
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M17 7L7 17"
                    ></path>
                    <path
                        stroke={color}
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M7 7L17 17"
                    ></path>
                </g>
            </g>
        </svg>
    )
}