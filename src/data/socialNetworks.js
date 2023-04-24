import React from "react"

import { Discord, Medium, Twitter } from "../assets/icons"
import { config } from "./config"

export const socialNetworks = [
    {
        color: "#1D9BF0",
        icon: <Twitter />,
        link: config.links.twitter
    },
    {
        color: "#5865F2",
        icon: <Discord size={20} />,
        link: config.links.discord
    },
    {
        color: "#000",
        icon: <Medium />,
        link: config.links.medium
    }
]