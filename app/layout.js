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
    title: 'Makeup Mantra - Professional Bridal Makeup in Karnal | Jyoti Mehta',
    description: 'Premium bridal and party makeup services in Karnal by Jyoti Mehta. Specializing in HD makeup, airbrush makeup, and personalized beauty looks for your special occasions.',
    keywords: 'bridal makeup Karnal, party makeup, Jyoti Mehta, makeup artist Karnal, HD makeup, airbrush makeup, wedding makeup',
    authors: [{ name: 'Jyoti Mehta' }],
    creator: 'Jyoti Mehta',
    publisher: 'Makeup Mantra',
    openGraph: {
        title: 'Makeup Mantra - Professional Bridal Makeup in Karnal',
        description: 'Premium bridal and party makeup services by Jyoti Mehta',
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
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
