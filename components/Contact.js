export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 bg-gradient-to-b from-background-purple to-background-dark">
            <div className="max-w-4xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 gradient-text">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Book your appointment today and let us make you look stunning
                    </p>
                </div>

                {/* Contact card */}
                <div className="glass-effect rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl animate-scale-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        {/* Left side - Contact info */}
                        <div className="space-y-6 md:space-y-8">
                            {/* Owner */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Owner</p>
                                    <p className="text-white text-lg font-semibold">Jyoti Mehta</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                                    <a href="tel:9034683944" className="text-white text-lg font-semibold hover:text-primary-light transition-colors">
                                        9034683944
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Address</p>
                                    <p className="text-white text-lg font-semibold">381, Moti Nagar, Karnal</p>
                                </div>
                            </div>
                        </div>

                        {/* Right side - CTA */}
                        <div className="flex flex-col justify-center items-center md:items-start space-y-6">
                            <div className="text-center md:text-left">
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    Ready to transform your look? Call us now to book your appointment and experience the magic of professional makeup artistry.
                                </p>
                                {/* Instagram Handle - Prominent */}
                                <a
                                    href="https://www.instagram.com/makeupmantrabyjyoti?igsh=dG1tb3J3czF1NTd3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-semibold"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    @makeupmantrabyjyoti
                                </a>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                <a
                                    href="tel:9034683944"
                                    className="group relative px-8 py-3 bg-gradient-to-r from-primary-light to-primary-dark text-white text-base font-semibold rounded-full overflow-hidden hover-lift shadow-2xl inline-flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="relative z-10">Call Now</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>

                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSdF_vhfkIpdvmwyR4DPh2mgVp9L4FlIT8-oJryOdrlWDZ0K7w/viewform?usp=publish-editor"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-3 bg-gradient-to-r from-accent-gold to-amber-600 text-white text-base font-semibold rounded-full overflow-hidden hover-lift shadow-2xl inline-flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span className="relative z-10">Book Online</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
