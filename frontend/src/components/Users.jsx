import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState(""); 

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, [filter]);

    return (
        <>
            <div className="font-bold mt-6 text-2xl text-gray-800 mx-6">
                Users
            </div>

            <div className="my-4 mx-6">
                <input 
                    onChange={(e) => setFilter(e.target.value)} 
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-5 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
            </div>

            {/* Handle Empty User List */}
            <div className="space-y-4 mx-6 mt-6">
                {users.length === 0 ? (
                    <div className="text-center text-gray-500 text-lg">No users found</div>
                ) : (
                    users.map(user => <User key={user._id} user={user} />)
                )}
            </div>
        </>
    );
};

function User({ user }) {
    const navigate = useNavigate();
    

    return (
        <div className="flex justify-between items-center p-4 border-b border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
                <div className="rounded-full h-16 w-16 bg-blue-500 text-white flex justify-center items-center text-2xl font-semibold">
                    {user.firstName[0].toUpperCase()}
                </div>
                <div className="flex flex-col">
                    <div className="text-xl font-semibold text-gray-800">
                        {user.firstName} {user.lastName}
                    </div>
                    <div className="text-sm text-gray-600">
                        {user.email}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <Button 
                    onClick={() => {
                        navigate(`/send?id=${user._id}&name=${user.firstName}`);
                    }} 
                    label={
                        <>
                            <i className="fas fa-money-bill-wave mr-2"></i> Send Money
                        </>
                    }
                    className="w-40 py-3 px-6 bg-wh text-white rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out flex justify-center items-center space-x-2"
                />
            </div>
        </div>
    );
}
