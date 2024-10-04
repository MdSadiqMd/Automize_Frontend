'use client';

import React, { useState, useEffect } from 'react';
import { Zap, X, Menu } from 'lucide-react';

import { Button } from './ui/button';
import CustomLabel from './ui/customLabel';
import { ModeToggle } from './ui/toggle';

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Zap className="h-8 w-8 text-pink-500" />
                        <CustomLabel className="bg-pink-500">Automize</CustomLabel>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#features" className="text-sm font-medium hover:text-pink-500 transition-colors">
                            Features
                        </a>
                        <a href="#how-it-works" className="text-sm font-medium hover:text-pink-500 transition-colors">
                            How It Works
                        </a>
                        <a href="#pricing" className="text-sm font-medium hover:text-pink-500 transition-colors">
                            Pricing
                        </a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <ModeToggle />
                        <Button
                            className="bg-pink-500"
                            variant="syntaxui"
                        >
                            Sign Up
                        </Button>
                        <button
                            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            <span className="sr-only">Toggle menu</span>
                        </button>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <a
                                href="#features"
                                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-pink-500 hover:text-white transition-colors"
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-pink-500 hover:text-white transition-colors"
                            >
                                How It Works
                            </a>
                            <a
                                href="#pricing"
                                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-pink-500 hover:text-white transition-colors"
                            >
                                Pricing
                            </a>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Navbar;