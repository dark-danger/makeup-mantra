import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
})

export const metadata = {
    title: 'Best Bridal Makeup Artist in Karnal – Makeup Mantra by Jyoti Mehta',
    description: 'Professional bridal & party makeup artist in Karnal, Moti Nagar. Airbrush makeup, HD makeup for weddings, engagement & reception. Book Jyoti Mehta – 9034683944',
    keywords: 'makeup artist Karnal, bridal makeup Karnal, makeup services Moti Nagar, best makeup artist near me, wedding makeup artist Karnal, professional makeup artist Karnal, airbrush makeup Karnal, party makeup Karnal, engagement makeup artist, bridal makeup packages Karnal',
    authors: [{ name: 'Jyoti Mehta' }],
    creator: 'Makeup Mantra',
    publisher: 'Makeup Mantra',
    openGraph: {
        title: 'Best Bridal Makeup Artist in Karnal – Makeup Mantra',
        description: 'Professional bridal & party makeup services in Karnal. Expert makeup artist Jyoti Mehta specializes in HD, airbrush makeup for weddings.',
        type: 'website',
        locale: 'en_IN',
        siteName: 'Makeup Mantra',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    },
    themeColor: '#FF6B9D',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <link rel="icon" href="/favicon.ico" />
                {/* Structured Data for Local Business */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'BeautySalon',
                            name: 'Makeup Mantra',
                            '@id': 'https://makeup-mantra.vercel.app',
                            url: 'https://makeup-mantra.vercel.app',
                            telephone: '+919034683944',
                            priceRange: '$$',
                            address: {
                                '@type': 'PostalAddress',
                                streetAddress: '381, Moti Nagar',
                                addressLocality: 'Karnal',
                                addressRegion: 'Haryana',
                                postalCode: '132001',
                                addressCountry: 'IN',
                            },
                            geo: {
                                '@type': 'GeoCoordinates',
                                latitude: 29.6857,
                                longitude: 76.9905,
                            },
                            openingHoursSpecification: {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                                opens: '09:00',
                                closes: '20:00',
                            },
                            sameAs: [
                                'https://www.instagram.com/makeupmantrabyjyoti',
                            ],
                            founder: {
                                '@type': 'Person',
                                name: 'Jyoti Mehta',
                            },
                            description: 'Professional bridal and party makeup artist in Karnal. Specializing in HD makeup, airbrush makeup for weddings, engagement, and reception.',
                            areaServed: {
                                '@type': 'City',
                                name: 'Karnal',
                            },
                            hasOfferCatalog: {
                                '@type': 'OfferCatalog',
                                name: 'Makeup Services',
                                itemListElement: [
                                    {
                                        '@type': 'Offer',
                                        itemOffered: {
                                            '@type': 'Service',
                                            name: 'Bridal Makeup in Karnal',
                                            description: 'Professional bridal makeup services in Karnal',
                                        },
                                    },
                                    {
                                        '@type': 'Offer',
                                        itemOffered: {
                                            '@type': 'Service',
                                            name: 'Party Makeup',
                                            description: 'Glamorous party makeup for all occasions',
                                        },
                                    },
                                    {
                                        '@type': 'Offer',
                                        itemOffered: {
                                            '@type': 'Service',
                                            name: 'Airbrush Makeup Karnal',
                                            description: 'HD airbrush makeup services in Karnal',
                                        },
                                    },
                                ],
                            },
                        }),
                    }}
                />
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
