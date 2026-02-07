import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function DocsIndex() {
  redirect('/marketplace');

  const documentedProducts = [
    {
      title: "Hex Grids",
      image: "/images/mp/HexGrids.png",
      description: "C++ plugin for hexagon grid systems. Comprehensive documentation with examples and setup guides.",
      link: "/docs/hex-grids",
      status: "Complete",
      category: "Development Tool"
    },
    {
      title: "Dynamic Rope Bridges",
      image: "/images/mp/bridges/RopeBridge_Thumb.png",
      description: "Interactive bridge system with physics responses. Setup and customization guide available.",
      link: "/docs/rope-bridges",
      status: "Complete",
      category: "Interactive System"
    },
    {
      title: "UMG Subtitles",
      image: "/images/mp/UMGSubtitles.png",
      description: "Enhanced subtitle system for UMG. Native integration with customizable components.",
      link: "/docs/umg-subtitles",
      status: "Complete",
      category: "UI Tool"
    },
    {
      title: "Ultimate RTS Camera",
      image: "/images/mp/RTSCamera.png",
      description: "Full-featured camera system for RTS games. Multi-platform input support including mobile.",
      link: "/docs/rts-camera",
      status: "Complete",
      category: "Camera System"
    },
    {
      title: "Spline Sweeper",
      image: "/images/mp/SplineSweeper.jpg",
      description: "Quick spline mesh generation tool. One-node operation for efficient spline meshing.",
      link: "/docs/spline-sweeper",
      status: "Complete",
      category: "Mesh Tool"
    }
  ];

  const basicProducts = [
    {
      title: "Python Scripts Collection",
      image: "/images/mp/ScriptsCollection.png",
      description: "Editor productivity plugin. Organized script execution menu for Unreal Engine editor.",
      marketplaceLink: "https://www.unrealengine.com/marketplace/en-US/product/cb9d23f6654749c3b1f007f93d50ebb8",
      category: "Editor Tool"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Documentation</h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive guides and documentation for Zenith Digital's Unreal Engine marketplace products.
          </p>
        </div>

        {/* Fully Documented Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Complete Documentation</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {documentedProducts.map((product, index) => (
              <Link 
                key={index} 
                href={product.link}
                className="block bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="font-semibold">Read Documentation</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Basic Product Info */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Product Information</h2>
          <p className="text-gray-400 mb-8">
            Essential information and marketplace links for our other products. Full documentation coming soon.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {basicProducts.map((product, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-gray-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <a
                    href={product.marketplaceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center text-sm transition-colors block"
                  >
                    View on Marketplace
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Getting Started</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Installation</h3>
                <ol className="text-gray-300 space-y-2 text-sm">
                  <li>1. Purchase the product from Unreal Engine Marketplace</li>
                  <li>2. Install via Epic Games Launcher</li>
                  <li>3. Enable the plugin in your project settings</li>
                  <li>4. Restart your Unreal Engine project</li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Support</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Comprehensive documentation for major products</li>
                  <li>• Example projects and demo scenes included</li>
                  <li>• Direct support via contact form</li>
                  <li>• Community resources and tutorials</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section>
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our support team is here to help with any questions about our products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/marketplace"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
