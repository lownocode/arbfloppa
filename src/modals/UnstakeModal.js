import React, { useState } from "react"
import { useAccount, useContractRead } from "wagmi"
import { ethers } from "ethers"
import { useWeb3Modal } from "@web3modal/react"

import "../styles/modals/unstake-modal.css"
import { config } from "../data"
import { Modal } from "../components"
import { AIFLOPPABonusPoolContract } from "../data/contracts"

export const UnstakeModal = (props) => {
    const [ amount, setAmount ] = useState("")

    const account = useAccount()
    const stakingView = useContractRead({
        ...AIFLOPPABonusPoolContract,
        functionName: "getUserViews",
        args: [account.address]
    })?.data?.[0]
    const web3Modal = useWeb3Modal()

    const stakedAmount = stakingView?.["stakedAmount"]?.div(
        ethers.BigNumber.from(10).pow(6)
    )?.toString() || 0

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
            <div className={"unstake-modal-head"}>
                Withdraw Staking
            </div>

            <div className={"unstake-modal-card-container"}>
                <div className={"unstake-modal-card-divide"}>
                    <div>
                        Unstake
                    </div>
                    <div>
                        In Stake: {stakedAmount} {config.tokenName}
                    </div>
                </div>

                <div style={{ height: 8 }} />

                <div className={"unstake-modal-card-divide"}>
                    <input
                        placeholder={"0"}
                        value={amount}
                        onChange={e => onChangeAmount(e)}
                    />

                    <div
                        className={"unstake-modal-card-max-button"}
                        onClick={() => setAmount(stakedAmount)}
                    >
                        Max
                    </div>
                </div>
            </div>

            <div
                className={"unstake-modal-button"}
                onChange={() => approve()}
            >
                Approve
            </div>
        </Modal>
    )
}