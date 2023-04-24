import React from "react"

import "../styles/panels/earn.css"
import { Panel } from "../components"
import { config } from "../data"
import floppa from "../assets/floppa.png"

const cardItems = [
    {
        title: "Current Staking",
        value: "25,962,930,464,540,949.618 AISHIB"
    },
    {
        title: "APY",
        value: "321.07 %"
    },
]

export const Earn = () => {
    const renderCardItems = cardItems.map(({ title, value }) => {
        return (
            <div key={title}>
                <div className={"earn-card-item-title"}>
                    {title}
                </div>
                <div className={"earn-card-item-value"}>
                    {value}
                </div>
            </div>
        )
    })

    return (
        <Panel>
            <center>
                <div className={"earn-placeholder-head"}>
                    Staking to Earn {config.tokenName}
                </div>
                <div className={"earn-placeholder-description"}>
                    From the community, give back to the community.
                </div>
            </center>

            <div style={{ height: 100 }} />

            <center>
                <div className={"earn-cards-container"} style={{ minWidth: "70%" }}>
                    <div className={"earn-card-container"}>
                        <div className={"earn-card-head"}>
                            Statistics
                        </div>
                        <div className={"earn-card-body"}>
                            {renderCardItems}
                        </div>
                    </div>

                    <div className={"earn-second-cards-container"}>
                        <div
                            className={"earn-card-container"}
                            style={{ flex:1 }}
                        >
                            <div className={"earn-card-head"}>
                                My Staking
                            </div>
                            <div className={"earn-card-body"}>
                                <div style={{ width: "100%" }}>
                                    <img
                                        style={{ width: 35, height: 35 }}
                                        alt={"floppa"}
                                        src={floppa}
                                    />

                                    <div style={{ height: 15 }} />

                                    <b>
                                        0.000 {config.tokenName}
                                    </b>

                                    <div style={{ height: 15 }} />

                                    <div className={"earn-buttons-box"}>
                                        <div className={"earn-button-start-staking"}>
                                            Start Staking
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={"earn-card-container"}
                            style={{ flex: 1 }}
                        >
                            <div className={"earn-card-head"}>
                                My Rewards
                            </div>
                            <div className={"earn-card-body"}>
                                <div style={{ flex: 1 }}>
                                    <img
                                        style={{ width: 35, height: 35 }}
                                        alt={"floppa"}
                                        src={floppa}
                                    />

                                    <div style={{ height: 15 }} />

                                    <b>
                                        0.000 {config.tokenName}
                                    </b>

                                    <div style={{ height: 15 }} />

                                    <div className={"earn-buttons-box"}>
                                        <div className={"earn-button-claim-rewards"}>
                                            Claim Rewards
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