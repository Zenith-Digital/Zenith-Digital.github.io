import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAB Store - Zenith Digital',
  description: 'Professional Unreal Engine plugins and assets available on the FAB Store by Zenith Digital.',
};

export default function FABStore() {
  const activeProducts = [
    {
      title: "Hex Grids",
      image: "/images/mp/HexGrids.png",
      description: "Hex Grids is a C++ plugin that makes working with hexagon grids easy. All core functionality is written in C++ for maximum performance, and almost all functions are exposed to blueprint via function libraries. Four maps explain how to use the plugin with many examples.",
      category: "Tool",
      status: "Active",
      storeLink: "https://www.unrealengine.com/marketplace/en-US/product/05e7a0e674824987abbd98905aab2cfd",
      docLink: "/docs/hex-grids",
      features: ["C++ Performance", "Blueprint Support", "Example Maps", "Well Commented"],
    },
    {
      title: "UMG Subtitles",
      image: "/images/mp/UMGSubtitles.png",
      description: "The UMG Subtitle Hook plugin utilizes the native subtitle system, but reroutes the final subtitle into UMG components - SubtitleTextBlock and SubtitleRichTextBlock. This lets you better customize subtitles for improved control and readability.",
      category: "UI Tool",
      status: "Active",
      storeLink: "https://www.unrealengine.com/marketplace/en-US/product/native-subtitles-into-umg",
      docLink: "/docs/umg-subtitles",
      features: ["Native Integration", "UMG Customization", "Rich Text Support", "Drag & Drop"],
    },
    {
      title: "Ultimate RTS Camera",
      image: "/images/mp/RTSCamera.png",
      description: "The Ultimate RTS Camera is a full featured camera system for RTS style games. It supports dynamic detection between keyboard and gamepad, with full support for each. Also includes mobile support with drag, pinch, zoom, and 2-finger rotate.",
      category: "Camera System",
      status: "Active",
      storeLink: "https://www.unrealengine.com/marketplace/en-US/product/ae03a0fb7c5940a690cd477adfd65da9",
      docLink: "/docs/rts-camera",
      features: ["Multi-Input Support", "Mobile Compatible", "Fully Replicated", "Smooth Interpolation"],
    },
    {
      title: "Spline Sweeper",
      image: "/images/mp/SplineSweeper.jpg",
      description: "The sweep component allows you to quickly generate spline meshes to sweep the given spline. Just one node is required to call the sweep functionality, and it can run in construction script or at runtime. Comes with a set of sweep profiles.",
      category: "Mesh Tool",
      status: "Active",
      storeLink: "https://www.unrealengine.com/marketplace/en-US/product/4841d1af3b0c49c3a56fdbd343d86b93",
      docLink: "/docs/spline-sweeper",
      features: ["One Node Operation", "Runtime Compatible", "Custom Profiles", "Auto Cleanup"],
    },
    {
      title: "Sacks (Asset Pack)",
      image: "/images/mp/Sacks.png",
      description: "This pack contains 4 physically accurate burlap sacks, originally created with a cloth simulation to achieve a fully realistic look and baked down to a static mesh for performance.",
      category: "Asset Pack",
      status: "Active",
      storeLink: "https://www.unrealengine.com/marketplace/en-US/product/af680e0ccb6149ca8877d09fe585ec68",
      docLink: null,
      features: ["Cloth Simulation", "Physically Accurate", "Performance Optimized", "Ready to Use"],
    },
    {
      title: "Dynamic Responsive Rope Bridges",
      image: "/images/mp/bridges/RopeBridge_Thumb.png",
      description: "Dynamic rope bridge, responsive to players and environment. Modular, easily customizable, and optimized for performance. Perfect for creating interactive bridge systems in your games.",
      category: "Interactive System",
      status: "Active",
      storeLink: "https://www.fab.com/listings/5516684a-2702-4e07-bf6a-ad5798c741d3",
      docLink: "/docs/rope-bridges",
      features: ["Player Responsive", "Environmental Physics", "Modular Design", "Performance Optimized"],
    },
  ];

  const discontinuedProducts = [
    {
      title: "Python Scripts Collection Menu",
      image: "/images/mp/ScriptsCollection.png",
      description: "This plugin adds a scripts drop down menu to the unreal editor, allowing you to execute previously made python scripts from one place without having to manually find them each time or relying on the scripts history.",
      category: "Editor Tool",
      status: "Discontinued",
      storeLink: "https://www.unrealengine.com/marketplace/en-US/product/cb9d23f6654749c3b1f007f93d50ebb8",
      docLink: null,
      features: ["Editor Integration", "Script Management", "Quick Access", "History Independent"],
    },
    {
      title: "In Game Log Display",
      image: "/images/mp/GameLog.png",
      description: "A C++ plugin that exposes the system output log to blueprint, using an interactive 3D widget to visualise the log. Perfect for VR development where checking logs is cumbersome.",
      category: "Debug Tool",
      status: "Discontinued",
      storeLink: "https://www.unrealengine.com/marketplace/en-US/product/9b2ee798b6a743a3898512e54f119c38",
      docLink: null,
      features: ["VR Friendly", "3D Widget", "Blueprint Exposed", "System Integration"],
    },
    {
      title: "Dynamic Switching Icon Pack",
      image: "/images/mp/IconPack.png",
      description: "A set of PC, Xbox One and PS4 Icons in a minimalist Light Theme. Auto switch frame detects the currently active device and updates icons accordingly.",
      category: "UI Assets",
      status: "Discontinued",
      storeLink: "https://www.unrealengine.com/marketplace/en-US/product/df28f544b4644a60b08729921d3ca5bf",
      docLink: null,
      features: ["Auto Detection", "Multi-Platform", "Light Theme", "110 Icons"],
    },
  ];

  return (
    <main className="min-h-screen bg-[color:var(--canvas)] pt-24">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(93,228,255,0.12),_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl text-white mb-6">FAB Store</h1>
            <p className="text-xl text-[color:var(--muted)] max-w-3xl mx-auto mb-8">
              Professional tools, plugins, and assets for Unreal Engine development.
              Each product includes documentation and support.
            </p>
            <a
              href="https://www.fab.com/sellers/Zenith%20Digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[color:var(--accent)] hover:bg-[color:var(--accent-strong)] text-black font-semibold py-3 px-8 text-lg transition-colors"
            >
              Visit Our FAB Store Profile
            </a>
          </div>

          <section className="mb-20">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-12 text-center">Active Products</h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {activeProducts.map((product, index) => (
                <article key={index} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] overflow-hidden group">
                  <div className="relative h-48 overflow-hidden bg-[color:var(--surface-2)]">
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 1280px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold text-black bg-[color:var(--accent)]">
                        {product.status}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold text-[color:var(--accent-strong)] bg-[color:var(--glow)] border border-[color:var(--line)]">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                    <p className="text-[color:var(--muted)] mb-4 text-sm leading-relaxed line-clamp-3">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 rounded text-xs font-medium text-[color:var(--accent-strong)] bg-[color:var(--glow)]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {product.storeLink && (
                        <a
                          href={product.storeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-full bg-[color:var(--accent)] hover:bg-[color:var(--accent-strong)] text-black font-semibold py-2 px-4 text-center text-sm transition-colors"
                        >
                          View on FAB
                        </a>
                      )}
                      {product.docLink && (
                        <a
                          href={product.docLink}
                          className="flex-1 rounded-full border border-[color:var(--line)] bg-[color:var(--surface-2)] hover:text-white text-[color:var(--muted)] font-semibold py-2 px-4 text-center text-sm transition-colors"
                        >
                          Documentation
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-20 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-8">
            <h2 className="font-display text-3xl text-white mb-8 text-center">Product Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[color:var(--glow)] border border-[color:var(--line)]">
                  <svg className="w-8 h-8 text-[color:var(--accent-strong)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Development Tools</h3>
                <p className="text-[color:var(--muted)] text-sm">Plugins and utilities to streamline your workflow.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[color:var(--glow)] border border-[color:var(--line)]">
                  <svg className="w-8 h-8 text-[color:var(--accent-strong)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Camera Systems</h3>
                <p className="text-[color:var(--muted)] text-sm">Professional camera solutions for multiple genres.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[color:var(--glow)] border border-[color:var(--line)]">
                  <svg className="w-8 h-8 text-[color:var(--accent-strong)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">UI Components</h3>
                <p className="text-[color:var(--muted)] text-sm">Enhanced UI systems and customizable interfaces.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[color:var(--glow)] border border-[color:var(--line)]">
                  <svg className="w-8 h-8 text-[color:var(--accent-strong)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Asset Packs</h3>
                <p className="text-[color:var(--muted)] text-sm">High-quality 3D assets and interactive systems.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-3xl text-white mb-4 text-center">Discontinued Products</h2>
            <p className="text-[color:var(--muted)] text-center mb-8">
              Legacy products no longer actively maintained.
            </p>
            <div className="grid lg:grid-cols-2 gap-8">
              {discontinuedProducts.map((product, index) => (
                <article key={index} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] overflow-hidden opacity-90">
                  <div className="relative h-40 overflow-hidden bg-[color:var(--surface-2)]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold text-black bg-[color:var(--accent)]">
                        {product.status}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold text-[color:var(--accent-strong)] bg-[color:var(--glow)] border border-[color:var(--line)]">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{product.title}</h3>
                    <p className="text-[color:var(--muted)] mb-4 text-sm leading-relaxed">{product.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 rounded text-xs text-[color:var(--muted)] bg-[color:var(--surface-2)]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <a
                      href={product.storeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface-2)] hover:text-white text-[color:var(--muted)] font-semibold py-2 px-4 text-center text-sm transition-colors block"
                    >
                      View on FAB
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="rounded-2xl border border-[color:var(--line)] bg-[radial-gradient(circle_at_top,_rgba(93,228,255,0.18),_transparent_65%)] p-8">
              <h2 className="font-display text-3xl text-white mb-4">Need Support?</h2>
              <p className="text-xl text-[color:var(--muted)] mb-6">
                All active products come with documentation and community support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="rounded-full bg-[color:var(--accent)] hover:bg-[color:var(--accent-strong)] text-black font-semibold py-3 px-8 transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="https://www.fab.com/sellers/Zenith%20Digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] hover:text-white text-[color:var(--muted)] font-semibold py-3 px-8 transition-colors"
                >
                  Browse All Products
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
