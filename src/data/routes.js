import React from "react"

import { Earn, Home, LP, LuckyDrop } from "../panels"

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/lp",
        element: <LP />
    },
    {
        path: "/earn",
        element: <Earn />
    },
    {
        path: "/ld",
        element: <LuckyDrop />
    }
]