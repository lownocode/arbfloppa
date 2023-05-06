import React, { useState } from "react"
import { ethers } from "ethers"
import { useAccount, useContractRead } from "wagmi"
import { useWeb3Modal } from "@web3modal/react"

import "../styles/modals/stake-modal.css"
import { Modal } from "../components"
import { config } from "../data"
import { AIFLOPPATokenContract } from "../data/contracts"

export const StakeModal = (props) => {
    const [ amount, setAmount ] = useState("")

    const account = useAccount()
    const balance = useContractRead({
        ...AIFLOPPATokenContract,
        functionName: "balanceOf",
        args: [account.address]
    })?.data?.div(ethers.BigNumber.from(10).pow(6))?.toString() || 0
    const web3Modal = useWeb3Modal()

    const onChangeAmount = e => {
        if(!e.target.value.match(/^(\d+)?(\.)?(\d+)?$/)) return

        setAmount(e.target.value)
    }

    const approve = () => {
        if (!account.isConnected) {
            return web3Modal.open()
        }
    }

    return (
        <Modal {...props}>
            <div className={"stake-modal-head"}>
                Start Staking
            </div>

            <div className={"stake-modal-card-container"}>
                <div className={"stake-modal-card-divide"}>
                    <div>
                        Stake
                    </div>
                    <div>
                        Balance: {balance} {config.tokenName}
                    </div>
                </div>

                <div style={{ height: 8 }} />

                <div className={"stake-modal-card-divide"}>
                    <input
                        placeholder={"0"}
                        value={amount}
                        onChange={e => onChangeAmount(e)}
                    />

                    <div
                        className={"stake-modal-card-max-button"}
                        onClick={() => setAmount(balance)}
                    >
                        Max
                    </div>
                </div>
            </div>

            {
                balance === "0" && (
                    <a
                        className={"stake-modal-card-insufficient-balance"}
                        target={"_blank"}
                        href={config.links.buyToken}
                    >
                        Insufficient balance. Get {config.tokenName}
                    </a>
                )
            }

            <div
                className={"stake-modal-button"}
                onClick={() => approve()}
            >
                Approve
            </div>
        </Modal>
    )
}