export const Appbar = () => {
    return (
        <div className="shadow-lg h-16 flex justify-between items-center px-6 bg-gradient-to-r from-[#6a82fb] to-[#fc5c7d]">
            {/* Logo and App Name */}
            <div className="text-[#ffdd00] text-3xl font-semibold">
                InstaPay
            </div>

            {/* User Section */}
            <div className="flex items-center space-x-6">
                <div className="text-white text-lg font-medium">
                    Hello, User
                </div>

                {/* Profile Icon */}
                <div className="rounded-full h-14 w-14 bg-white flex justify-center items-center shadow-lg hover:shadow-2xl transition-shadow duration-200 ease-in-out cursor-pointer">
                    <div className="text-[#6a82fb] text-2xl font-semibold">
                        U
                    </div>
                </div>
            </div>
        </div>
    );
};
