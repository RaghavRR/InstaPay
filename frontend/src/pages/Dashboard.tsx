import React from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    return <div>
        <Appbar />
        <div>
            <Balance value={"50,000"} />
            <Users />
        </div>
    </div>
}