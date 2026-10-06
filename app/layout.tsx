import type { Metadata } from 'next';
import { site } from '../content/site';
import './globals.css';
export const metadata: Metadata = { title: site.title, description: site.description, icons: { icon: '/favicon.svg' }, robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
