import React, { useState } from "react"
import { useAccount, useContractRead } from "wagmi"
import { useWeb3Modal } from "@web3modal/react"
import { ethers } from "ethers"

import "../styles/panels/earn.css"
import { Panel } from "../components"
import { config } from "../data"
import floppa from "../assets/floppa.png"
import { AIFLOPPABonusPoolContract, AIFLOPPATokenContract } from "../data/contracts"
import { UnstakeModal, StakeModal } from "../modals"

const cardItems = [
    {
        title: "Current Staking",
        value: "- AIFLOPPA"
    },
    {
        title: "APY",
        value: "- %"
    },
]

export const Earn = () => {
    const [ isOpenStakeModal, setOpenStakeModal ] = useState(false)
    const [ isOpenUnstakeModal, setOpenUnstakeModal ] = useState(false)

    const web3Modal = useWeb3Modal()
    const account = useAccount()
    const stakingView = useContractRead({
        ...AIFLOPPABonusPoolContract,
        functionName: "getUserViews",
        args: [account.address]
    })
    const mainView = stakingView?.data?.[0] ?? {
        stakedAmount: ethers.BigNumber.from(0),
        unclaimedRewards: ethers.BigNumber.from(0)
    }

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

    const actionWithConnectedWallet = (callback) => {
        if (!account.isConnected) {
            return web3Modal.open()
        }

        callback()
    }

    return (
        <Panel>
            <StakeModal
                isOpen={isOpenStakeModal}
                onClose={() => setOpenStakeModal(!isOpenStakeModal)}
            />
            <UnstakeModal
                isOpen={isOpenUnstakeModal}
                onClose={() => setOpenUnstakeModal(!isOpenUnstakeModal)}
            />

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
                                        {
                                            mainView["stakedAmount"].div(
                                                ethers.BigNumber.from(10).pow(6)
                                            ).toString()
                                        } {config.tokenName}
                                    </b>

                                    <div style={{ height: 15 }} />

                                    <div className={"earn-buttons-box"}>
                                        <div
                                            className={"earn-button-stake"}
                                            onClick={() => actionWithConnectedWallet(() => setOpenStakeModal(true))}
                                        >
                                            Stake
                                        </div>
                                        <div
                                            className={"earn-button-unstake"}
                                            onClick={() => actionWithConnectedWallet(() => setOpenUnstakeModal(true))}
                                        >
                                            Unstake
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
                                        {
                                            mainView["unclaimedRewards"].div(
                                                ethers.BigNumber.from(10).pow(6)
                                            ).toString()
                                        } {config.tokenName}
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
