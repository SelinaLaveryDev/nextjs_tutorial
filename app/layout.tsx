import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; // Import the Inter font from the fonts module

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >{children}</body> {/* By adding Inter to the <body> element, the font will be applied throughout your application */}
    </html>
  );
}
