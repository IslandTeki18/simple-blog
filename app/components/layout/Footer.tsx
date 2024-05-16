import React from 'react'

type Props = {}

export const Footer = (props: Props) => {
    return (
        <footer className="footer footer-center p-4 bg-neutral text-base-content fixed bottom-0">
            <aside>
                <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    )
}