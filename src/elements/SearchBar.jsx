import React, { useRef, useEffect, useState } from 'react';

const SearchComponent = ({ searchType, setSearchType, searchTerm, setSearchTerm, toggleMobileMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(searchType);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleSearchTypeChange = (value) => {
    setSelectedOption(value);
    setSearchType(value);
    setIsOpen(false); // Close dropdown after selecting an option
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log()
  };

  return (
    <div className="flex md:order-2   py-2   space-x-1 md:space-x-2 rtl:space-x-reverse">
      {/* Filter dropdown */}
      <div className="relative  inline-block text-right" ref={dropdownRef}>
        <div>
          <button
            type="button"
            className="inline-flex justify-center items-center w-full rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isOpen ? 'true' : 'false'}
            onClick={handleDropdownToggle}
          >
            {selectedOption === 'location' ? (
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                />
              </svg>
            ) : (
              // Blood group SVG or icon can be added here
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 30.646 30.646"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M16.458,0.584C16.197,0.218,15.773,0,15.323,0c-0.451,0-0.874,0.217-1.137,0.584c-2.808,3.919-9.843,14.227-9.843,19.082
                      c0,6.064,4.915,10.98,10.979,10.98c6.065,0,10.981-4.916,10.981-10.98C26.304,14.811,19.266,4.503,16.458,0.584z M11.467,25.881
                      c-0.3,0.357-0.732,0.542-1.167,0.542c-0.345,0-0.695-0.118-0.981-0.358c-4.329-3.646-2.835-9.031-2.769-9.26
                      c0.234-0.809,1.073-1.273,1.886-1.042c0.808,0.231,1.274,1.075,1.045,1.881c-0.047,0.175-0.982,3.743,1.804,6.089
                      C11.927,24.275,12.01,25.236,11.467,25.881z M14.464,28.91c-0.893,0-1.62-0.727-1.62-1.62c0-0.896,0.727-1.621,1.62-1.621
                      c0.896,0,1.62,0.726,1.62,1.621C16.084,28.185,15.359,28.91,14.464,28.91z"/>
                  </g>
                </g>
              </svg>
            )}
          </button>
        </div>
        {/* Dropdown menu */}
        {isOpen && (
          <div
            className="origin-top-right absolute left-2 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              <button
                onClick={() => handleSearchTypeChange('location')}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center"
                role="menuitem"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  />
                </svg>
                Location
              </button>
              <button
                onClick={() => handleSearchTypeChange('blood')}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center"
                role="menuitem"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 30.646 30.646"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path d="M16.458,0.584C16.197,0.218,15.773,0,15.323,0c-0.451,0-0.874,0.217-1.137,0.584c-2.808,3.919-9.843,14.227-9.843,19.082
                        c0,6.064,4.915,10.98,10.979,10.98c6.065,0,10.981-4.916,10.981-10.98C26.304,14.811,19.266,4.503,16.458,0.584z M11.467,25.881
                        c-0.3,0.357-0.732,0.542-1.167,0.542c-0.345,0-0.695-0.118-0.981-0.358c-4.329-3.646-2.835-9.031-2.769-9.26
                        c0.234-0.809,1.073-1.273,1.886-1.042c0.808,0.231,1.274,1.075,1.045,1.881c-0.047,0.175-0.982,3.743,1.804,6.089
                        C11.927,24.275,12.01,25.236,11.467,25.881z M14.464,28.91c-0.893,0-1.62-0.727-1.62-1.62c0-0.896,0.727-1.621,1.62-1.621
                        c0.896,0,1.62,0.726,1.62,1.621C16.084,28.185,15.359,28.91,14.464,28.91z"/>
                    </g>
                  </g>
                </svg>
                Blood Group
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search..."
        className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-4 py-2 mr-1"
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* Search button */}
      <button
        type="button"
        className="text-white bg-custom-red hover:bg-custom-red focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-custom-red dark:focus:ring-custom-red"
      >
        Search
      </button>
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
        onClick={toggleMobileMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchComponent;
