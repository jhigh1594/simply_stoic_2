import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A3B4C] to-[#1A2634] text-white relative overflow-hidden">
      {/* Forest Silhouette Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070')] bg-cover bg-center opacity-20" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-sm text-gray-300">Daily Practitioners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <div className="text-sm text-gray-300">Journal Entries</div>
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center space-y-8">
              <h1 className="text-6xl font-bold tracking-tight">
                Simply Stoicism
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your life through daily Stoic practice. Journal with purpose, 
                reflect with wisdom, and grow with intention.
              </p>
              
              <Button 
                asChild
                size="lg"
                className="bg-[#68876D] hover:bg-[#68876D]/90 text-white px-8"
              >
                <Link href="/dashboard" className="gap-2">
                  Begin Your Journey
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-24">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Daily Reflection</h3>
                <p className="text-gray-300">
                  Start and end each day with purpose through guided morning and evening journals
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Stoic Library</h3>
                <p className="text-gray-300">
                  Access timeless wisdom with our curated collection of Stoic quotes and practices
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
                <p className="text-gray-300">
                  Monitor your growth and build lasting habits with intuitive tracking tools
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-24">
              <h2 className="text-3xl font-bold mb-6">Ready to begin your Stoic journey?</h2>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-[#65A2AB] text-[#65A2AB] hover:bg-[#65A2AB] hover:text-white"
              >
                <Link href="/dashboard">
                  Start Your Practice
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}