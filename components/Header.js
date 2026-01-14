'use client';

import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { name: 'About', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Gallery', id: 'gallery' },
        { name: 'Testimonials', id: 'testimonials' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass-effect shadow-2xl py-3'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-xl md:text-2xl font-playfair font-bold gradient-text hover:scale-105 transition-transform"
                    >
                        Makeup Mantra
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-gray-300 hover:text-primary-light transition-colors font-medium"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* Instagram & Book Now - Desktop */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Instagram Link - Prominent */}
                        <a
                            href="https://www.instagram.com/makeupmantrabyjyoti?igsh=dG1tb3J3czF1NTd3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all hover-lift"
                        >
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <span className="text-white font-semibold text-sm">@makeupmantrabyjyoti</span>
                        </a>

                        {/* Book Now Button */}
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdF_vhfkIpdvmwyR4DPh2mgVp9L4FlIT8-oJryOdrlWDZ0K7w/viewform?usp=publish-editor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-gradient-to-r from-primary-light to-primary-dark text-white font-semibold rounded-full hover-lift shadow-lg"
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-white hover:text-primary-light transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 glass-effect rounded-2xl p-6 animate-fade-in">
                        <nav className="flex flex-col gap-4 mb-6">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-left text-gray-300 hover:text-primary-light transition-colors font-medium py-2"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </nav>

                        {/* Mobile Instagram & Book Now */}
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://www.instagram.com/makeupmantrabyjyoti?igsh=dG1tb3J3czF1NTd3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                @makeupmantrabyjyoti
                            </a>

                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdF_vhfkIpdvmwyR4DPh2mgVp9L4FlIT8-oJryOdrlWDZ0K7w/viewform?usp=publish-editor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-gradient-to-r from-primary-light to-primary-dark text-white font-semibold rounded-full text-center"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
