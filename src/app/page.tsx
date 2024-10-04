"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Zap, Workflow, Sparkles, BarChart } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

type CustomLabelProps = {
	children: React.ReactNode;
	className?: string;
};

const CustomLabel: React.FC<CustomLabelProps> = ({ children, className = "" }) => (
	<div className={`inline-block px-4 py-2 rounded-full font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] ${className}`}>
		{children}
	</div>
);

function Page() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
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
						<button
							onClick={() => setTheme(theme === "light" ? "dark" : "light")}
							className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
						>
							{theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
							<span className="sr-only">Toggle theme</span>
						</button>
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
			<main className="flex-grow">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Automate Your Workflow with
									<CustomLabel className="bg-purple-500 mt-2">Automize</CustomLabel>
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
									Connect your apps, automate your work, and boost productivity like never before. Automize makes it easy to streamline your processes.
								</p>
							</div>
							<div className="space-x-4">
								<Button className="bg-pink-500" variant="syntaxui">Get Started for Free</Button>
								<Button className="bg-purple-500" variant="syntaxui">Watch Demo</Button>
							</div>
						</div>
					</div>
				</section>
				<section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
					<div className="container px-4 md:px-6">
						<CustomLabel className="bg-pink-500 mb-12 mx-auto">Key Features</CustomLabel>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="flex flex-col items-center text-center p-6 bg-pink-100 dark:bg-pink-900 rounded-lg shadow-lg transition-transform hover:scale-105">
								<div className="mb-4 p-3 bg-pink-500 rounded-full text-white">
									<Workflow className="h-8 w-8" />
								</div>
								<h3 className="text-xl font-bold mb-2 text-pink-500">Easy Integration</h3>
								<p className="text-gray-600 dark:text-gray-300">Connect over 3000+ apps with just a few clicks</p>
							</div>
							<div className="flex flex-col items-center text-center p-6 bg-purple-100 dark:bg-purple-900 rounded-lg shadow-lg transition-transform hover:scale-105">
								<div className="mb-4 p-3 bg-purple-500 rounded-full text-white">
									<Sparkles className="h-8 w-8" />
								</div>
								<h3 className="text-xl font-bold mb-2 text-purple-500">Powerful Automation</h3>
								<p className="text-gray-600 dark:text-gray-300">Create complex workflows with our intuitive interface</p>
							</div>
							<div className="flex flex-col items-center text-center p-6 bg-blue-100 dark:bg-blue-900 rounded-lg shadow-lg transition-transform hover:scale-105">
								<div className="mb-4 p-3 bg-blue-500 rounded-full text-white">
									<BarChart className="h-8 w-8" />
								</div>
								<h3 className="text-xl font-bold mb-2 text-blue-500">Real-time Monitoring</h3>
								<p className="text-gray-600 dark:text-gray-300">Track and analyze your automations with detailed insights</p>
							</div>
						</div>
					</div>
				</section>
				<section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-700">
					<div className="container px-4 md:px-6">
						<CustomLabel className="bg-purple-500 mb-12 mx-auto">How It Works</CustomLabel>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="flex flex-col items-center text-center">
								<CustomLabel className="bg-pink-500 mb-4 w-16 h-16 flex items-center justify-center text-2xl">1</CustomLabel>
								<h3 className="text-xl font-bold mb-2">Connect Your Apps</h3>
								<p className="text-gray-600 dark:text-gray-300">Choose from our wide selection of app integrations</p>
							</div>
							<div className="flex flex-col items-center text-center">
								<CustomLabel className="bg-purple-500 mb-4 w-16 h-16 flex items-center justify-center text-2xl">2</CustomLabel>
								<h3 className="text-xl font-bold mb-2">Design Your Workflow</h3>
								<p className="text-gray-600 dark:text-gray-300">Use our drag-and-drop interface to create custom automations</p>
							</div>
							<div className="flex flex-col items-center text-center">
								<CustomLabel className="bg-blue-500 mb-4 w-16 h-16 flex items-center justify-center text-2xl">3</CustomLabel>
								<h3 className="text-xl font-bold mb-2">Sit Back and Relax</h3>
								<p className="text-gray-600 dark:text-gray-300">Let Automize handle your tasks while you focus on what matters</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<CustomLabel className="bg-pink-500 mb-4">Ready to Automize Your Work?</CustomLabel>
								<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
									Join thousands of professionals who are saving time and increasing productivity with Automize.
								</p>
							</div>
							<div className="w-full max-w-sm space-y-2">
								<Button
									className="w-full bg-pink-500"
									variant="syntaxui"
								>
									Start Your Free Trial
								</Button>
								<p className="text-xs text-gray-500 dark:text-gray-400">No credit card required</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="w-full border-t border-gray-200 dark:border-gray-800 py-6 bg-white dark:bg-gray-950">
				<div className="container flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="flex items-center gap-2">
						<Zap className="h-6 w-6 text-pink-500" />
						<p className="text-sm text-gray-500 dark:text-gray-400">
							© 2024 Automize. All rights reserved.
						</p>
					</div>
					<nav className="flex gap-4 sm:gap-6">
						<a className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400 transition-colors" href="#">
							Terms of Service
						</a>
						<a className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400 transition-colors" href="#">
							Privacy Policy
						</a>
						<a className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400 transition-colors" href="#">
							Contact Us
						</a>
					</nav>
				</div>
			</footer>
		</div>
	);
}

export default Page;