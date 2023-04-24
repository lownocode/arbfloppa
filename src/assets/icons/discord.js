import React from "react"

export const Discord = ({ color = "#fff", size= 15 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill={color}
                d="M18.59 5.89c-1.23-.57-2.54-.99-3.92-1.23-.17.3-.37.71-.5 1.04-1.46-.22-2.91-.22-4.34 0-.14-.33-.34-.74-.51-1.04-1.38.24-2.69.66-3.92 1.23-2.48 3.74-3.15 7.39-2.82 10.98 1.65 1.23 3.24 1.97 4.81 2.46.39-.53.73-1.1 1.03-1.69-.57-.21-1.11-.48-1.62-.79.14-.1.27-.21.4-.31 3.13 1.46 6.52 1.46 9.61 0 .13.11.26.21.4.31-.51.31-1.06.57-1.62.79.3.59.64 1.16 1.03 1.69 1.57-.49 3.17-1.23 4.81-2.46.39-4.17-.67-7.78-2.82-10.98h-.02zm-9.75 8.78c-.94 0-1.71-.87-1.71-1.94 0-1.07.75-1.94 1.71-1.94s1.72.87 1.71 1.94c0 1.06-.75 1.94-1.71 1.94zm6.31 0c-.94 0-1.71-.87-1.71-1.94 0-1.07.75-1.94 1.71-1.94s1.72.87 1.71 1.94c0 1.06-.75 1.94-1.71 1.94z"
            ></path>
        </svg>
    )
}