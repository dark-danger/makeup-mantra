export default function Services() {
    const services = [
        {
            title: 'Bridal Makeup in Karnal',
            description: 'Stunning bridal looks that make your special day unforgettable with long-lasting, camera-ready perfection. Best bridal makeup artist in Karnal.',
            icon: '👰',
            gradient: 'from-pink-500 to-rose-500',
        },
        {
            title: 'Party Makeup Services',
            description: 'Glamorous party makeup for all occasions in Karnal, designed to make you stand out and feel confident.',
            icon: '💃',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Engagement & Reception Looks',
            description: 'Elegant and sophisticated makeup for your engagement and reception ceremonies.',
            icon: '💍',
            gradient: 'from-rose-500 to-red-500',
        },
        {
            title: 'HD / Airbrush Makeup Karnal',
            description: 'Flawless, high-definition makeup using advanced airbrush techniques for a picture-perfect finish. Professional airbrush makeup in Karnal.',
            icon: '✨',
            gradient: 'from-amber-500 to-orange-500',
        },
    ];

    return (
        <section id="services" className="py-20 px-6 bg-gradient-to-b from-background-dark to-background-purple">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 gradient-text">
                        Our Services
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Discover our range of professional makeup services tailored to make you look and feel your absolute best
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative glass-effect rounded-2xl p-8 hover-lift cursor-pointer animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className={`text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-playfair font-bold mb-4 text-white">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Gradient border on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>

                            {/* Bottom accent line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
