export default function About() {
    return (
        <section id="about" className="py-20 px-6 bg-gradient-to-b from-background-purple to-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image side */}
                    <div className="relative animate-slide-up">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl hover-lift">
                            <img
                                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=800&fit=crop"
                                alt="Makeup Mantra Studio"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative border */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary-light to-accent-gold rounded-2xl -z-10 opacity-20"></div>
                    </div>

                    {/* Content side */}
                    <div className="animate-fade-in">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 gradient-text">
                            About Us
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                <span className="text-accent-gold font-semibold">Makeup Mantra</span> is a premium makeup studio based in Karnal, offering professional bridal, party, and special occasion makeup services.
                            </p>

                            <p>
                                Founded by <span className="text-primary-light font-semibold">Jyoti Mehta</span>, the studio focuses on enhancing natural beauty with high-quality products and personalized looks.
                            </p>

                            <p>
                                We believe that every individual is unique, and our mission is to bring out your inner radiance with makeup artistry that complements your personality and style.
                            </p>
                        </div>

                        {/* Stats or highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
                            <div className="text-center glass-effect rounded-xl p-3 md:p-4 hover-lift">
                                <div className="text-2xl md:text-3xl font-bold gradient-text">100+</div>
                                <div className="text-xs md:text-sm text-gray-400 mt-1">Happy Brides</div>
                            </div>
                            <div className="text-center glass-effect rounded-xl p-3 md:p-4 hover-lift">
                                <div className="text-2xl md:text-3xl font-bold gradient-text">5+</div>
                                <div className="text-xs md:text-sm text-gray-400 mt-1">Years Experience</div>
                            </div>
                            <div className="text-center glass-effect rounded-xl p-3 md:p-4 hover-lift">
                                <div className="text-2xl md:text-3xl font-bold gradient-text">Premium</div>
                                <div className="text-xs md:text-sm text-gray-400 mt-1">Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
