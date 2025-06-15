import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = false;

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              job<span className="text-[#F83002]">Portal</span>
            </h1>
          </div>

          {/* Hamburger (mobile) */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Links - desktop */}
          <div className="hidden lg:flex gap-5 items-center">
            <ul className="flex font-medium items-center gap-6">
              <Link to="/">Home</Link>
              <Link to="/jobs">Jobs</Link>
              <Link to="/browse">Browse</Link>
            </ul>

            {!user ? (
              <div className="flex gap-4 items-center">
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline">SignUp</Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-72">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="font-semibold">Himanshu Kumar</h1>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet,
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <Button variant="link">View profile</Button>
                    <Button variant="link">Logout</Button>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <ul className="flex flex-col gap-2 font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link>
              <Link to="/browse" onClick={() => setMenuOpen(false)}>Browse</Link>
            </ul>

            {!user ? (
              <div className="flex flex-col gap-2 mt-2">
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link to="/signup" onClick={() => setMenuOpen(false)}>
                  <Button variant="outline" className="w-full">SignUp</Button>
                </Link>
              </div>
            ) : (
              <div className="mt-2 flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Himanshu Kumar</p>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet
                  </p>
                  <div className="flex gap-4 mt-2">
                    <Button variant="link" className="p-0 text-blue-500">Profile</Button>
                    <Button variant="link" className="p-0 text-red-500">Logout</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

