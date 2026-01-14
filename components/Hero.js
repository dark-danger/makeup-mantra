'use client';

export default function Hero() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-purple to-primary-dark opacity-90"></div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto animate-fade-in">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-4 md:mb-6 leading-tight">
                    <span className="gradient-text">Makeup Mantra</span>
                </h1>

                <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-playfair mb-3 md:mb-4 text-accent-rose">
                    Where Beauty Meets Perfection
                </p>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-300 font-light">
                    Professional Bridal & Party Makeup by Jyoti Mehta
                </p>

                <button
                    onClick={scrollToContact}
                    className="group relative px-10 py-4 bg-gradient-to-r from-primary-light to-primary-dark text-white text-lg font-semibold rounded-full overflow-hidden hover-lift shadow-2xl"
                >
                    <span className="relative z-10">Book Appointment</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                {/* Instagram Follow Link */}
                <a
                    href="https://www.instagram.com/makeupmantrabyjyoti?igsh=dG1tb3J3czF1NTd3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors mt-6"
                >
                    <svg className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="font-medium">Follow us @makeupmantrabyjyoti</span>
                </a>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-accent-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
}
