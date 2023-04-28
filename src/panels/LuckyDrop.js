import React from "react"

import "../styles/panels/lucky-drop.css"
import { Panel } from "../components"
import { config } from "../data"
import floppa from "../assets/floppa.png"
import { Arbitrum, ArrowUpRight } from "../assets/icons"

const cardItems = [
    {
        title: "Total Distributed ARB",
        value: "52,744.559"
    },
    {
        title: "Total Prize Pool",
        value: "377.005"
    },
    {
        title: "Current Round",
        value: "125.668"
    },
    {
        title: "Total Players",
        value: "5,376"
    },
    {
        title: "Total Winners",
        value: "125"
    },
]

const randPlayers = [
    {
        purchase: 100,
        weight: 100,
        wallet: "0xd...0f05",
        date: "2023.04.23 18:55:28"
    },
    {
        purchase: 111,
        weight: 444,
        wallet: "0xd...0f05",
        date: "2023.04.23 18:55:28"
    }
]

const randWinners = [
    {
        reward: 100,
        wallet: "0xd...0f05",
        date: "2023.04.23 18:55:28"
    },
    {
        reward: 222,
        wallet: "0xd...0f05",
        date: "2023.04.23 18:55:28"
    }
]

export const LuckyDrop = () => {
    const renderStatisticsItems = cardItems.map(({ title, value }) => {
        return (
            <div key={title}>
                <div className={"ld-card-item-title"}>
                    {title}
                </div>
                <div className={"ld-card-item-value"}>
                    {value}
                </div>
            </div>
        )
    })

    const renderRecentPlayers = randPlayers.map((player, index) => {
        return (
            <div
                className="ld-table-row"
                key={"player-" + index}
            >
                <div className="ld-table-cell">
                    <div>
                        {player.wallet}
                    </div>
                    <div className={"ld-recent-players-date"}>
                        {player.date}
                    </div>
                </div>
                <div className="ld-table-cell">
                    <b>{player.purchase}</b>
                </div>
                <div className="ld-table-cell">
                    <b>{player.weight}</b>
                </div>
                <div className="ld-table-cell">
                    <div className={"ld-recent-players-tx-icon"}>
                        <ArrowUpRight color={"var(--accent)"} />
                    </div>
                </div>
            </div>
        )
    })

    const renderRecentWinners = randWinners.map((player, index) => {
        return (
            <div
                className="ld-table-row"
                key={"player-" + index}
            >
                <div className="ld-table-cell">
                    <div>
                        {player.wallet}
                    </div>
                    <div className={"ld-recent-players-date"}>
                        {player.date}
                    </div>
                </div>
                <div className="ld-table-cell">
                    <b>{player.reward}</b>
                </div>
                <div className="ld-table-cell">
                    <div className={"ld-recent-players-tx-icon"}>
                        <ArrowUpRight color={"var(--accent)"} />
                    </div>
                </div>
            </div>
        )
    })

    /* TODO remove return on next line */
    return (
        <Panel>
            <div
                style={{
                    textAlign: "center",
                    marginTop: 100
                }}
            >
                <div
                    style={{
                        fontWeight: "bold",
                        fontSize: "1.7rem"
                    }}
                >
                    We are actively working on it
                </div>
                <div
                    style={{
                        color: "var(--text-secondary)"
                    }}
                >
                    Coming soon...
                </div>
            </div>
        </Panel>
    )

    return (
        <Panel>
            <center>
                <div className={"ld-reward-container"}>
                    <div className={"ld-reward-head"}>
                        52,744.559 ARB
                    </div>
                    <div className={"ld-reward-subhead"}>
                        Total Rewards Distributed
                    </div>

                    <div className={"ld-reward-description"}>
                        When you purchase {config.tokenName}, you will receive a ticket with a weight determined
                        by the purchase amount. ARB airdrop will be distributed every half hour.
                        The algorithm is open-source. Good luck to you!
                    </div>

                    <a
                        className={"ld-button-view-rules"}
                        target={"_blank"}
                        href={config.links.luckyDropRules}
                    >
                        View Rules
                    </a>
                </div>
            </center>

            <div style={{ height: 100 }} />

            <center>
                <div className={"ld-cards-container"} style={{ minWidth: "70%" }}>
                    <div className={"ld-card-container"}>
                        <div className={"ld-card-head"}>
                            Statistics
                        </div>
                        <div className={"ld-card-body"}>
                            {renderStatisticsItems}
                        </div>
                    </div>

                    <div className={"ld-second-cards-container"}>
                        <div
                            className={"ld-card-container"}
                            style={{ flex:1 }}
                        >
                            <div className={"ld-card-head"}>
                                My Wallet
                            </div>
                            <div className={"ld-card-body"}>
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

                                    <div className={"ld-buttons-box"}>
                                        <a
                                            className={"ld-button-buy"}
                                            target={"_blank"}
                                            href={config.links.buyToken}
                                        >
                                            Buy {config.tokenName}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={"ld-card-container"}
                            style={{ flex: 1 }}
                        >
                            <div className={"ld-card-head"}>
                                My Rewards
                            </div>
                            <div className={"ld-card-body"}>
                                <div style={{ flex: 1 }}>
                                    <Arbitrum size={35} />

                                    <div style={{ height: 15 }} />

                                    <b>
                                        0.000 ARB
                                    </b>

                                    <div style={{ height: 15 }} />

                                    <div className={"ld-buttons-box"}>
                                        <div className={"ld-button-view-rewards"}>
                                            View
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"ld-second-cards-container"}>
                        <div
                            className={"ld-card-container"}
                            style={{ flex: 1 }}
                        >
                            <div className={"ld-card-head"}>
                                Recent Players
                            </div>
                            <div className={"ld-card-body"} style={{ padding: 20 }}>
                                <div className={"ld-table"}>
                                    <div className="ld-table-row">
                                        <div className="ld-table-cell">Players</div>
                                        <div className="ld-table-cell">Purchase</div>
                                        <div className="ld-table-cell">Weight</div>
                                        <div className="ld-table-cell">Tx</div>
                                    </div>

                                    <div style={{ height: 10 }} />

                                    {renderRecentPlayers}
                                </div>
                            </div>
                        </div>

                        <div
                            className={"ld-card-container"}
                            style={{ flex: 1 }}
                        >
                            <div className={"ld-card-head"}>
                                Recent Winners
                            </div>
                            <div className={"ld-card-body"} style={{ padding: 20 }}>
                                <div className={"ld-table"}>
                                    <div className="ld-table-row">
                                        <div className="ld-table-cell">Players</div>
                                        <div className="ld-table-cell">Rewards</div>
                                        <div className="ld-table-cell">Tx</div>
                                    </div>

                                    <div style={{ height: 10 }} />

                                    {renderRecentWinners}
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