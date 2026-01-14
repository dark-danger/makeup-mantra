import Image from 'next/image';

export default function Gallery() {
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop',
            alt: 'Bridal Makeup Look 1',
        },
        {
            url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop',
            alt: 'Party makeup services Karnal - Professional makeup artist',
        },
        {
            url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop',
            alt: 'Professional makeup artist Karnal - HD makeup application',
        },
        {
            url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
            alt: 'Wedding makeup artist Karnal - Bridal beauty',
        },
        {
            url: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&h=600&fit=crop',
            alt: 'Engagement makeup artist Karnal - Reception makeup',
        },
        {
            url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=600&fit=crop',
            alt: 'Airbrush makeup Karnal - HD makeup finish',
        },
    ];

    return (
        <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-background-purple to-background-dark">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 gradient-text">
                        Our Gallery
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore our portfolio of stunning makeup transformations
                    </p>
                </div>

                {/* Gallery grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover-lift cursor-pointer animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <Image
                                src={image.url}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {image.alt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
