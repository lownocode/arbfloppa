import React from "react"
import { Header, Footer } from "./index"

export const Panel = ({ children }) => {
    return (
        <>
            <Header />

            <div style={{ marginTop: "var(--header-height)" }} />

            <div
                style={{
                    padding: "var(--panel-padding)",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div style={{ maxWidth: 1280, flex: 1 }}>
                    {children}
                </div>
            </div>

            <Footer />
        </>
    )
}