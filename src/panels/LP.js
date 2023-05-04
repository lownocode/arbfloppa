import React from "react"
import { ethers } from "ethers"
import { useAccount, useContractRead } from "wagmi"

import "../styles/panels/lp.css"
import { Panel } from "../components"
import { config } from "../data"
import floppa from "../assets/floppa.png"
import { Arbitrum, Ethereum } from "../assets/icons"
import { NitroPoolContract } from "../data/contracts"

const cardItems = [
    {
        title: "TVL",
        value: "$-"
    },
    {
        title: "APY",
        value: "- %"
    },
    {
        title: "Pending Rewards",
        value: "- ARB"
    },
    {
        title: "Issued Rewards",
        value: "- ARB"
    },
]

export const LP = () => {
    const account = useAccount()
    const pendingRewardsData = useContractRead({
        ...NitroPoolContract,
        functionName: "pendingRewards",
        watch: true,
        args: [account.address]
    })
    const pendingRewards = pendingRewardsData?.data?.[0] ?? ethers.BigNumber.from(0)


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
                                        $-
                                    </b>

                                    <div style={{ height: 15 }} />

                                    <div className={"lp-buttons-box"}>
                                        <a
                                            className={"lp-button-start-staking"}
                                            target={"_blank"}
                                            href={config.links.lpProcessingURL}
                                        >
                                            Add LP
                                        </a>

                                        <a
                                            className={"lp-button-remove-lp"}
                                            target={"_blank"}
                                            href={config.links.lpProcessingURL}
                                        >
                                            Remove LP
                                        </a>
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
                                        {
                                            ethers.utils.formatUnits(
                                                pendingRewards.div(
                                                    ethers.BigNumber.from(10).pow(15)
                                                ).mul(
                                                    ethers.BigNumber.from(10).pow(15)
                                                ), 18
                                            )
                                        } ARB
                                    </b>

                                    <div style={{ height: 15 }} />

                                    <div className={"lp-buttons-box"}>
                                        <a
                                            className={"lp-button-connect-wallet"}
                                            target={"_blank"}
                                            href={config.links.lpProcessingURL}
                                        >
                                            Harvest
                                        </a>
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
