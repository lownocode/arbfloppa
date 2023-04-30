import React from "react"
import { useSnackbar } from "react-simple-snackbar"
import { useAccount } from "wagmi"

import "../styles/panels/home.css"
import { Panel, ProgressLine } from "../components"
import { config } from "../data"
import floppa from "../assets/floppa.png"
import pepe2 from "../assets/pepe2.png"
import card1 from "../assets/card_1.png"
import chart from "../assets/chart.svg"

const statisticsItems = [
    {
        name: "AISHIB Total Supply",
        value: 20202002,
    },
    {
        name: "AISHIB Currency Supply",
        value: 20202002,
    },
    {
        name: "AISHIB Total Burn",
        value: 0,
    },
    {
        name: "AISHIB Trading Volume",
        value: 20202002,
    },
    {
        name: "Lucky Drop Reward $ARB",
        value: 5,
    },
    {
        name: "AISHIB Accumulated $ARB",
        value: 8,
    },
]
const cards = [
    {
        title: "AISHIB",
        image: card1
    },
    {
        title: "AISCODE",
        image: card1
    },
    {
        title: "NFT Prologue",
        image: card1
    },
    {
        title: "AISHIB Vault",
        image: card1
    }
]

export const Home = () => {
    const { address, isConnected } = useAccount()
    const [ openSnackbar ] = useSnackbar({
            style: {
                backgroundColor: "var(--snackbar-background)",
                border: "1px solid var(--snackbar-border)",
                textAlign: "center",
                borderRadius: 10
            }
        })

    const renderStatisticsItems = statisticsItems.map((item, index) => {
        return (
            <div
                key={"item-" + index}
                className={"home-statistics-item-container"}
            >
                <div className={"home-statistics-item-value"}>
                    {item.value}
                </div>
                <div className={"home-statistics-item-name"}>
                    {item.name}
                </div>
            </div>
        )
    })

    const renderCards = cards.map((card, index) => {
        return (
            <div
                key={"card-" + index}
                className={"home-card"}
                style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                }}
            >
                <div className={"home-card-title-container"}>
                    <div className={"home-card-title-head"}>
                        {card.title}
                    </div>
                    <div className={"home-card-title-subhead"}>
                        Commin soon...
                    </div>
                </div>
            </div>
        )
    })

    const inviteFriends = async () => {
        if (!isConnected) {
            return openSnackbar("You need to connect wallet!")
        }

        const text = window.location.origin + "?i=" + address

        await navigator.clipboard.writeText(text)
        openSnackbar("URL was copied to clipboard!")
    }

    const claimAirdrop = async () => {
        if (!isConnected) {
            return openSnackbar("You need to connect wallet!")
        }

        const file = await import(`../signs/${address.substring(0, 4).toLowerCase()}.json`)

        if (!file || !file[address]) {
            return openSnackbar("You are not participating in the airdrop")
        }

        openSnackbar("You are participating in the airdrop")
    }

    return (
        <Panel>
            <div className={"home-preview"}>
                <center>
                    <div className={"home-hexagon-logo"}>
                        <img
                            src={floppa}
                            alt={"floppa"}
                            style={{ width: 50, height: 50 }}
                        />
                    </div>
                </center>
                <div style={{ height: 50 }} />

                <center>
                    <div className={"home-placeholder-head"}>
                        Proudly Launch on Arbitrum
                    </div>

                    <div className={"home-placeholder-description"}>
                        Co-built by AI creatures and our community
                    </div>
                </center>
            </div>

            <div className={"home-claim-container"}>
                <div className={"home-claim-first-part"}>
                    <div className={"home-claim-head"}>
                        You can claim {config.tokenName} now!
                    </div>
                    <div className={"home-claim-description"}>
                        A total of 210,000,000,000,000,000 {config.tokenName} tokens are now available to be claimed
                        by those who have claimed the ARB airdrop.
                        {config.tokenName} tokens that have not been claimed within 31 days will be used for the
                        Community Long-Term Incentive Reward Program. The {config.tokenName} will be distributed to
                        the top contributors of Arbitrum community and burned.
                    </div>
                </div>

                <div className={"home-claim-second-part-container"}>
                    <div className={"home-claim-second-part"}>
                        <div className={"home-claim-second-part-progress"}>
                            <div style={{ marginRight: 15 }}>
                                Received
                            </div>
                            <div>
                                210,000T
                            </div>
                        </div>

                        <ProgressLine percent={15} />

                        <div className={"home-claim-second-part-time"}>
                            2023.04.15 09:00 (UTC+0) - 2023.05.15 09:00 (UTC+0)
                        </div>
                    </div>

                    <div style={{ marginTop: 10 }} />

                    <div className={"home-claim-input-box"}>
                        <input
                            placeholder={"Enter a..."}
                        />
                    </div>

                    <div className={"home-claim-buttons-container"}>
                        <div
                            className={"home-claim-button"}
                            onClick={() => claimAirdrop()}
                        >
                            Check my airdrop eligibility
                        </div>
                        <div
                            className={"home-claim-button"}
                            onClick={() => inviteFriends()}
                        >
                            Invite Friends
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: 100 }} />

            <div className={"home-whatis-container"}>
                <div className={"home-whatis-image"}>
                    <img
                        src={pepe2}
                        alt={"pepe"}
                    />
                </div>

                <div className={"home-whatis-text-container"}>
                    <div className={"home-whatis-head"}>
                        What is {config.tokenName}?
                    </div>
                    <div className={"home-whatis-description"}>
                        {config.tokenName} is a deflationary token. It will be used by {config.tokenName}
                        ecosystem applications. The total supply is 210,000,000,000,000,000 tokens.
                        {config.tokenName} belongs to everyone in the Arbitrum community and is also a necessary key
                        to unlock the future chapters of the {config.tokenName} story.
                        {config.tokenName} has a 15% burning tax, so adjusting your slippage tolerance to around 20% is
                        suggested when buying/selling to ensure your successful transactions. Every time you
                        buy {config.tokenName}, you will receive a Lucky Drop ticket with a chance to win an ARB prize
                        based on the purchase amount. You can also stake your {config.tokenName} to earn more.
                    </div>

                    <div className={"home-whatis-contract"}>
                        Contract: {config.contract}
                    </div>

                    <div className={"home-whatis-buttons-container"}>
                        <div className={"home-whatis-buy-button"}>
                            Buy {config.tokenName}
                        </div>

                        <div className={"home-whatis-docs-button"}>
                            View Docs
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: 100 }} />

            <div className={"home-chart"}>
                <img
                    alt={"chart"}
                    src={chart}
                />
            </div>

            <div style={{ height: 100 }} />

            <div>
                <div className={"home-statistics-head"}>
                    Statistics
                </div>
                <div className={"home-statistics-subhead"}>
                    Join the industry leaders to discuss where the markets are heading. We accept token payments.
                </div>

                <div className={"home-statistics-items-container"}>
                    {renderStatisticsItems}
                </div>
            </div>

            <div style={{ height: 100 }} />

            <div className={"home-cards-container"}>
                {renderCards}
            </div>

            <div style={{ height: 100 }} />
        </Panel>
    )
}