import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);

    

    return (
        <div className="relative bg-gradient-to-br from-[#6a82fb] to-[#fc5c7d] min-h-screen flex items-center justify-center overflow-hidden">
            {/* Transparent gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#9d4edd] to-transparent opacity-50"></div>

            <div className="bg-white shadow-2xl rounded-2xl px-8 py-10 w-full max-w-md z-10 backdrop-blur-lg">
                <div className="flex flex-col space-y-4 mt-6">
                    <h2 className="text-3xl font-bold text-center text-[#6a82fb]">Send Money</h2>
                </div>
                
                <div className="flex items-center space-x-4 mt-6">
                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-3xl text-white">{name[0].toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-semibold">{name}</h3>
                </div>
                
                <div className="space-y-6 mt-8">
                    <div className="space-y-2">
                        <label
                            htmlFor="amount"
                            className="text-sm font-medium leading-none text-gray-700"
                        >
                            Amount (in Rs)
                        </label>
                        <input
                            onChange={(e) => setAmount(e.target.value)}
                            type="number"
                            className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6a82fb] transition duration-200 ease-in-out"
                            id="amount"
                            placeholder="Enter amount"
                        />
                    </div>

                    <button
                    onClick={() => {
                        axios
                            .post(
                                "http://localhost:3000/api/v1/account/transfer",
                                { to: id, amount },
                                {
                                    headers: {
                                        Authorization: "Bearer " + localStorage.getItem("token"),
                                    },
                                }
                            )
                            .then((response) => {
                                alert("Transfer Successful!");
                                window.location.href = "/dashboard";  // 👈 Redirect back
                            })
                            .catch((error) => {
                                alert("Error occurred during transfer.");
                            });
                    }}
                    
                        className="w-full py-3 bg-[#6a82fb] text-white rounded-lg shadow-md hover:bg-[#5a6bdf] transition duration-200 ease-in-out"
                    >
                        Initiate Transfer
                    </button>
                </div>
            </div>
        </div>
    );
};
