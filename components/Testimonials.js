export default function Testimonials() {
    const testimonials = [
        {
            name: 'Priya Sharma',
            review: 'Best bridal makeup in Karnal! Totally loved my look.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        },
        {
            name: 'Anjali Verma',
            review: 'Jyoti Mehta is extremely professional and talented.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
        },
        {
            name: 'Neha Kapoor',
            review: 'Highly recommended for wedding and party makeup.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
        },
    ];

    return (
        <section id="testimonials" className="py-20 px-6 bg-gradient-to-b from-background-dark to-background-purple">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 gradient-text">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Read testimonials from our happy clients
                    </p>
                </div>

                {/* Testimonials grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-2xl p-8 hover-lift animate-scale-in"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Quote icon */}
                            <div className="text-5xl text-primary-light mb-4 opacity-50">"</div>

                            {/* Review text */}
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                                {testimonial.review}
                            </p>

                            {/* Star rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-accent-gold fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Client info */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary-light">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">{testimonial.name}</p>
                                    <p className="text-sm text-gray-400">Verified Client</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
