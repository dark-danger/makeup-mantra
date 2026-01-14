'use client';

export default function Footer() {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-gradient-to-b from-background-dark to-black py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-playfair font-bold gradient-text mb-4">
                            Makeup Mantra
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Professional bridal and party makeup services in Karnal. Making you look stunning for your special moments.
                        </p>
                        {/* Instagram - Prominent */}
                        <a
                            href="https://www.instagram.com/makeupmantrabyjyoti?igsh=dG1tb3J3czF1NTd3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all hover-lift"
                        >
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <span className="text-white font-semibold text-sm">Follow Us</span>
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                                >
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('services')}
                                    className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                                >
                                    Services
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('gallery')}
                                    className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                                >
                                    Gallery
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('testimonials')}
                                    className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                                >
                                    Testimonials
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
                        <div className="space-y-3 text-sm text-gray-400">
                            <p>Jyoti Mehta</p>
                            <p>
                                <a href="tel:9034683944" className="hover:text-primary-light transition-colors">
                                    9034683944
                                </a>
                            </p>
                            <p>381, Moti Nagar, Karnal</p>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdF_vhfkIpdvmwyR4DPh2mgVp9L4FlIT8-oJryOdrlWDZ0K7w/viewform?usp=publish-editor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-primary-light to-primary-dark text-white font-semibold rounded-full hover-lift text-sm"
                            >
                                Book Appointment
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-8"></div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm">
                    <p>© 2026 Makeup Mantra - Designed by Jyoti Mehta</p>
                    <p className="mt-2">
                        <a
                            href="https://www.instagram.com/makeupmantrabyjyoti?igsh=dG1tb3J3czF1NTd3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-light hover:text-accent-gold transition-colors"
                        >
                            @makeupmantrabyjyoti
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
