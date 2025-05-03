import React, { useState, useEffect } from "react";
import axios from "axios";

export const Balance = () => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/v1/account/balance", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((res) => {
                setBalance(res.data.balance);
            });
    }, []);

    return (
        <div className="flex items-center justify-between mx-6 mt-6 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="font-semibold text-lg text-gray-800">Your Balance</div>
            <div className="font-bold text-2xl text-green-500">Rs {balance.toFixed(2)}</div>
        </div>
    );
};
