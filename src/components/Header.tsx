import React from "react";
import { Search, Sun, UserCircle2 } from "lucide-react"; // icons

interface HeaderProps {
  onSearch: (searchTerm: string) => void; // Pass search term to parent
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value); // Pass value to parent component
  };

  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-gray-700 bg-gray-900">
      {/* Left: Logo */}
      <div className="flex items-center ml-24">
        <span className="text-2xl font-bold">📒</span>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 mx-6 flex justify-center">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Right: Theme toggle + Profile */}
      <div className="flex items-center gap-4 mr-24">
        <button className="p-2 rounded-full hover:bg-gray-700">
          <Sun className="w-6 h-6 text-white" />
        </button>
        <UserCircle2 className="w-10 h-10 text-gray-300" />
      </div>
    </header>
  );
};

export default Header;
