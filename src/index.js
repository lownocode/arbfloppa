import React from "react"
import ReactDOM from "react-dom/client"
import SnackbarProvider from "react-simple-snackbar"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Web3Modal } from "@web3modal/react"
import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum"
import { WagmiConfig, createClient, configureChains } from "wagmi"
import { arbitrum, mainnet } from "wagmi/chains"
import Modal from "react-modal"

import "./styles/root.css"
import { routes } from "./data/routes"
import { config } from "./data"

const chains = [arbitrum, mainnet]

const { provider, webSocketProvider } = configureChains(
    chains,
    [w3mProvider({ projectId: config.walletConnectProjectId })]
)

const wagmiClient = createClient({
    autoConnect: true,
    provider,
    connectors: w3mConnectors({
        projectId: config.walletConnectProjectId,
        version: 1,
        chains
    }),
    webSocketProvider,
})

const ethereumClient = new EthereumClient(wagmiClient, chains)

const root = ReactDOM.createRoot(document.getElementById("root"))
const router = createBrowserRouter(routes)

Modal.setAppElement("#root")
root.render(
    <React.StrictMode>
        <SnackbarProvider>
            <WagmiConfig client={wagmiClient}>
                <RouterProvider router={router} />
            </WagmiConfig>

            <Web3Modal
                projectId={config.walletConnectProjectId}
                ethereumClient={ethereumClient}
                themeMode={"dark"}
            />
        </SnackbarProvider>
    </React.StrictMode>
)