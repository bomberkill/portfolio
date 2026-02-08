import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#030014] text-foreground font-inter">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
            </div>

            <div className="relative z-10 text-center px-6">
                <h1 className="text-[120px] md:text-[200px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                    404
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Lost in Space?
                </h2>
                <p className="text-foreground/60 text-lg mb-12 max-w-md mx-auto">
                    The page you are looking for seems to have drifted into a black hole. Let&apos;s get you back on course.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all group hover:scale-105"
                >
                    <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    <span>Return Home</span>
                </Link>
            </div>
        </div>
    );
}
