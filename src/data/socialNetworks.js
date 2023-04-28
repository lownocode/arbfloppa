import React from "react"

import { Discord, Telegram } from "../assets/icons"
import { config } from "./config"

export const socialNetworks = [
    {
        color: "#5865F2",
        icon: <Discord size={20} />,
        link: config.links.discord
    },
    {
        color: "#2AABEE",
        icon: <Telegram size={20} />,
        link: config.links.telegram
    },
]