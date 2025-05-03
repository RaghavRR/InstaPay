export function Button({ label, onClick }) {
    return (
        <button 
            onClick={onClick} 
            type="button" 
            className="w-full text-white bg-gradient-to-r from-[#6a82fb] to-[#fc5c7d] hover:from-[#fc5c7d] hover:to-[#6a82fb] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-8 py-4 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2"
        >
            <i className="fas fa-dollar-sign"></i> {/* Dollar sign icon for payment */}
            <span>{label}</span>
        </button>
    );
}
