// the fonts that will be used throughout the application
// Import the Inter font from the next/font/google module - this will be the primary font.
import { Inter } from 'next/font/google';
// Import the Lusitana font from the next/font/google module - this will be the secondary font.
import { Lusitana } from 'next/font/google';


export const inter = Inter({ subsets: ['latin'] }); // specify the latin subset for the Inter font
export const lusitana = Lusitana({ // specify the font weights and subsets for the Lusitana font
    weight: ["400", "700"], // specify the font weights for the Lusitana font
    subsets: ['latin'], // specify the latin subset for the Lusitana font
});
