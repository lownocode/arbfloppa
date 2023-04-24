import React from "react"

export const ArrowUpRight = ({ color = "#fff", size = 15 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M444.4 98.21l-143.1 351.1C292.9 468.5 275.2 480 256 480c-28.84 0-48.02-23.1-48.02-47.1V273.8H48c-22.94 0-42.67-16.22-47.09-38.75-4.437-22.5 7.688-44.1 28.92-53.69l351.1-143.1c17.86-7.343 38.45-3.188 52.11 10.5C447.6 59.74 451.8 80.3 444.4 98.21z"></path>
        </svg>
    )
}