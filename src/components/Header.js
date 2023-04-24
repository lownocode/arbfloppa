import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useWeb3Modal } from "@web3modal/react"
import { useAccount } from "wagmi"

import "../styles/components/header.css"
import floppa from "../assets/floppa.png"
import { config, routesButtons } from "../data"
import { Menu } from "../assets/icons"
import { SideMenu } from "./SideMenu"

export const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [ isSideMenuActive, setSideMenuActive ] = useState(false)

    const { address: walletAddress = "", isConnected } = useAccount()
    const web3Modal = useWeb3Modal()

    const address = walletAddress.substring(0, 4) + "..." + walletAddress.substring(walletAddress.length - 4)

    const renderButtons = routesButtons.map((button) => {
        return (
            <div
                key={button.route}
                className={
                    `header-buttons--button ${location.pathname === button.route && "header-buttons--selected"}`
                }
                onClick={() => navigate(button.route, { replace: true })}
            >
                {button.title}
            </div>
        )
    })

    return (
        <>
            <SideMenu
                isActive={isSideMenuActive}
                onClose={() => setSideMenuActive(false)}
            />
            <div className={"header-container"}>
                <div className={"header-logo-container"}>
                    <img
                        alt={"floppa"}
                        src={floppa}
                        style={{ width: 35, height: 35 }}
                    />
                    <div className={"header-logo-text"}>
                        {config.projectName}
                    </div>
                </div>

                <div className={"header-buttons-container"}>
                    {renderButtons}
                </div>

                {
                    isConnected ? (
                        <div
                            className={"header-connected-wallet-button"}
                            onClick={() => web3Modal.open()}
                        >
                            <div className={"header-connected-wallet-button--wallet"}>
                                {address}
                            </div>
                            <div className={"header-connected-wallet-button--connected"}>
                                Connected
                            </div>
                        </div>
                    ) : (
                        <div
                            className={"header-connect-wallet-button"}
                            onClick={() => web3Modal.open()}
                        >
                            Connect Wallet
                        </div>
                    )
                }

                <div
                    className={"header-menu-button"}
                    onClick={() => setSideMenuActive(!isSideMenuActive)}
                >
                    <Menu color={"var(--accent)"} size={22} />
                </div>
            </div>
        </>
    )
}