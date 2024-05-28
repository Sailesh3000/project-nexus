import React from 'react';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-9xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <SoupKitchenIcon fontSize='large' sx={{ color: 'white' }} />
            <a
              href="/"
              className="text-white rounded-md py-2 text-3xl"
              aria-current="page"
            >
              RestrO
            </a>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="/login"
              className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl"
            >
              Login
            </a>
            <a
              href="/signup"
              className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="/dashboard"
            className="text-black block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="/login"
            className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Login
          </a>
          <a
            href="/signup"
            className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
