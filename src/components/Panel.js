import React from "react"
import { Header, Footer } from "./index"

export const Panel = ({ children }) => {
    return (
        <div style={{ padding: "var(--panel-padding)" }}>
            <Header />

            <div style={{ marginTop: "var(--header-height)" }} />
            <div style={{ minHeight: "100vh" }}>
                {children}
            </div>

            <Footer />
        </div>
    )
}