import Link from 'next/link';
import { Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-600">
        <nav className="flex flex-wrap gap-4 mb-4 md:mb-0">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
          <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
        </nav>
        <a href="https://www.facebook.com/profile.php?id=61590109041520" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-600 hover:text-primary transition-colors">
          <Facebook size={20} />
        </a>
      </div>
    </footer>
  );
}
