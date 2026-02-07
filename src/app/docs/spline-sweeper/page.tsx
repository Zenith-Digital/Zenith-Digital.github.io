import Link from 'next/link';
import Image from 'next/image';

export default function SplineSweeperDoc() {
  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/marketplace" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            Back to Store
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Spline Sweeper</h1>
          <div className="w-24 h-1 bg-blue-400 mb-6"></div>
          <p className="text-xl text-gray-300 mb-8">
            A powerful mesh generation tool that creates complex geometries by sweeping profiles along spline paths with just one node.
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-800 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Links</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://www.unrealengine.com/marketplace/en-US/product/4841d1af3b0c49c3a56fdbd343d86b93"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors text-center"
            >
              View on Marketplace
            </a>
            <Link 
              href="/contact"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded transition-colors text-center"
            >
              Get Support
            </Link>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <p className="text-gray-300 mb-6">
              The Spline Sweeper component revolutionizes mesh generation in Unreal Engine by allowing you to create complex 
              geometries with a single node call. Simply define a spline path and a sweep profile, and the component handles 
              the rest - generating optimized meshes that can be used in construction scripts or at runtime.
            </p>
            <h3 className="text-xl font-bold text-white mb-4">Key Features:</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>One Node Operation:</strong> Generate complex meshes with a single function call</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>Runtime Compatible:</strong> Works in construction scripts and during gameplay</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>Custom Profiles:</strong> Includes preset profiles and supports custom sweep shapes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>Auto Cleanup:</strong> Efficient memory management and mesh optimization</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Setup Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Setup Guide</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">1. Installation</h3>
                <p className="text-gray-300 mb-4">
                  Download from the Unreal Engine Marketplace and enable the Spline Sweeper plugin in your project settings.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">2. Component Setup</h3>
                <p className="text-gray-300 mb-4">
                  Add the Spline Sweeper component to your Actor:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>Create a new Actor Blueprint</li>
                  <li>Add a Spline Sweeper Component</li>
                  <li>Add a Spline Component for the path</li>
                  <li>Configure the sweep settings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">3. Spline Configuration</h3>
                <p className="text-gray-300 mb-4">
                  Set up your spline path:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>Define spline points in 3D space</li>
                  <li>Adjust tangent handles for smooth curves</li>
                  <li>Set spline point types (Linear, Curve, Constant)</li>
                  <li>Configure spline density and resolution</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">4. Profile Selection</h3>
                <p className="text-gray-300 mb-4">
                  Choose or create your sweep profile:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>Select from built-in profiles (Rectangle, Circle, I-Beam, etc.)</li>
                  <li>Import custom 2D shapes</li>
                  <li>Adjust profile scaling and orientation</li>
                  <li>Configure UV mapping settings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">5. Generate Mesh</h3>
                <p className="text-gray-300 mb-4">
                  Call the sweep function to generate your mesh:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>Use in Construction Script for design-time generation</li>
                  <li>Call at runtime for dynamic mesh creation</li>
                  <li>Apply materials and collision settings</li>
                  <li>Optimize mesh for performance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Built-in Profiles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Built-in Sweep Profiles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">Basic Shapes</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Rectangle</li>
                <li>• Circle</li>
                <li>• Triangle</li>
                <li>• Hexagon</li>
                <li>• Star shapes</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">Structural</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• I-Beam</li>
                <li>• L-Bracket</li>
                <li>• T-Profile</li>
                <li>• Channel</li>
                <li>• Angle iron</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">Architectural</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Pipe</li>
                <li>• Tube</li>
                <li>• Rail</li>
                <li>• Molding</li>
                <li>• Trim</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Common Use Cases</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Level Design</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Roads and pathways</li>
                  <li>• Architectural elements</li>
                  <li>• Structural beams and supports</li>
                  <li>• Decorative moldings</li>
                  <li>• Custom geometry creation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Game Objects</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Pipes and tubing systems</li>
                  <li>• Rails and tracks</li>
                  <li>• Cables and wiring</li>
                  <li>• Organic shapes and terrain</li>
                  <li>• Procedural generation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Advanced Features</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Runtime Generation</h3>
                <p className="text-gray-300 mb-4">
                  Generate meshes dynamically during gameplay for procedural content, interactive systems, or user-generated content.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Profile Import</h3>
                <p className="text-gray-300 mb-4">
                  Import custom 2D shapes from external tools or create them programmatically for unique sweep profiles.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">UV Mapping Control</h3>
                <p className="text-gray-300 mb-4">
                  Advanced UV mapping options ensure textures apply correctly to generated meshes with proper scaling and alignment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Performance Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Built-in optimization features including LOD generation, mesh simplification, and efficient memory management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Support</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <p className="text-gray-300 mb-6">
              Need help with the Spline Sweeper? Our development team provides comprehensive support for setup, customization, and optimization.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Contact Support</h3>
                <p className="text-gray-400 mb-4">Get expert assistance with implementation</p>
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Compatibility</h3>
                <p className="text-gray-400 mb-2">Engine Versions: UE4.26+ and UE5.0+</p>
                <p className="text-gray-400 mb-2">Platforms: All supported UE platforms</p>
                <p className="text-gray-400">Usage: Construction Script and Runtime</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
