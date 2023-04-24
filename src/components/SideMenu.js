import React from "react"
import classnames from "classnames"
import { useLocation, useNavigate } from "react-router-dom"
import { useAccount } from "wagmi"
import { useWeb3Modal } from "@web3modal/react"

import "../styles/components/side-menu.css"
import { CloseCircle } from "../assets/icons"
import { routesButtons } from "../data"

export const SideMenu = ({ isActive, onClose }) => {
    const location = useLocation()
    const navigate = useNavigate()

    const { address: walletAddress = "", isConnected } = useAccount()
    const web3Modal = useWeb3Modal()

    const address = walletAddress.substring(0, 4) + "..." + walletAddress.substring(walletAddress.length - 4)

    const sideMenuClasses = classnames("side-menu", {
        "side-menu--active": isActive,
    })
    const sideMenuContentClasses = classnames("side-menu-content", {
        "side-menu-content--active": isActive,
    })

    const renderRoutesButtons = routesButtons.map((button) => {
        return (
            <div
                key={button.route}
                className={"side-menu-routes-button"}
                onClick={() => {
                    onClose()
                    navigate(button.route, { replace: true })
                }}
            >
                {button.title}

                {
                    location.pathname === button.route && (
                        <div className={"side-menu-routes-button-bubble"} />
                    )
                }
            </div>
        )
    })

    return (
        <aside className={sideMenuClasses}>
            <div className="side-menu-overlay" onClick={onClose} />
            <div className={sideMenuContentClasses}>
                <div className={"side-menu-close-button-container"}>
                    <div
                        className={"side-menu-close-button"}
                        onClick={() => onClose()}
                    >
                        <CloseCircle size={22} color={"var(--grey)"}/>
                    </div>
                </div>

                <div className={"side-menu-routes-buttons-container"}>
                    {renderRoutesButtons}
                </div>
                {
                    isConnected ? (
                        <div
                            className={"side-menu-connected-wallet-button"}
                            onClick={() => web3Modal.open()}
                        >
                            <div className={"side-menu-connected-wallet-button--wallet"}>
                                {address}
                            </div>
                            <div className={"side-menu-connected-wallet-button--connected"}>
                                Connected
                            </div>
                        </div>
                    ) : (
                        <div
                            className={"side-menu-connect-wallet-button"}
                            onClick={() => web3Modal.open()}
                        >
                            Connect Wallet
                        </div>
                    )
                }
            </div>
        </aside>
    )
}