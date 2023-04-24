import React from "react"

import "../styles/panels/lp.css"
import { Panel } from "../components"
import { config } from "../data"
import floppa from "../assets/floppa.png"
import { Arbitrum, Ethereum } from "../assets/icons"

const cardItems = [
    {
        title: "TVL",
        value: "$1,313,064.248"
    },
    {
        title: "APY",
        value: "13,258.07 %"
    },
    {
        title: "Pending Rewards",
        value: "12,783.419 ARB"
    },
    {
        title: "Issued Rewards",
        value: "169,347.217 ARB"
    },
]

export const LP = () => {
    const renderCardItems = cardItems.map(({ title, value }) => {
        return (
            <div key={title}>
                <div className={"lp-card-item-title"}>
                    {title}
                </div>
                <div className={"lp-card-item-value"}>
                    {value}
                </div>
            </div>
        )
    })

    return (
        <Panel>
            <center>
                <div className={"lp-placeholder-head"}>
                    Staking LP to Earn ARB
                </div>
                <div className={"lp-placeholder-description"}>
                    From the community, give back to the community.
                </div>
            </center>

            <div style={{ height: 100 }} />

            <center>
                <div className={"lp-cards-container"} style={{ minWidth: "70%" }}>
                    <div className={"lp-card-container"}>
                        <div className={"lp-card-head"}>
                            {config.tokenName}/ETH
                        </div>
                        <div className={"lp-card-body"}>
                            {renderCardItems}
                        </div>
                    </div>

                    <div className={"lp-second-cards-container"}>
                        <div
                            className={"lp-card-container"}
                            style={{ flex:1 }}
                        >
                            <div className={"lp-card-head"}>
                                My {config.tokenName}/ETH LP
                            </div>
                            <div className={"lp-card-body"}>
                                <div style={{ width: "100%" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <img
                                            style={{ width: 35, height: 35 }}
                                            alt={"floppa"}
                                            src={floppa}
                                        />
                                        <div style={{ width: 8 }} />
                                        <Ethereum size={35}/>
                                    </div>

                                    <div style={{ height: 15 }} />

                                    <b>
                                        $0.000
                                    </b>

                                    <div style={{ height: 15 }} />

                                    <div className={"lp-buttons-box"}>
                                        <div className={"lp-button-start-staking"}>
                                            Start Staking
                                        </div>

                                        <div className={"lp-button-remove-lp"}>
                                            Remove LP
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={"lp-card-container"}
                            style={{ flex: 1 }}
                        >
                            <div className={"lp-card-head"}>
                                My Rewards
                            </div>
                            <div className={"lp-card-body"}>
                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Arbitrum size={35} />
                                    </div>

                                    <div style={{ height: 15 }} />

                                    <b>
                                        0.000 ARB
                                    </b>

                                    <div style={{ height: 15 }} />

                                    <div className={"lp-buttons-box"}>
                                        <div className={"lp-button-connect-wallet"}>
                                            Connect Wallet
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>

            <div style={{ height: 150 }} />
        </Panel>
    )
}