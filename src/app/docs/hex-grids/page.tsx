import Link from 'next/link';
import Image from 'next/image';

export default function HexGridsDocs() {
  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/marketplace" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            Back to Store
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/mp/HexGrids.png"
              alt="Hex Grids"
              width={64}
              height={64}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-4xl font-bold text-white">Hex Grids Documentation</h1>
              <p className="text-gray-400">C++ plugin for hexagon grid systems in Unreal Engine</p>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.unrealengine.com/marketplace/en-US/product/05e7a0e674824987abbd98905aab2cfd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              View on Marketplace
            </a>
            <a
              href="/marketplace"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Back to Marketplace
            </a>
          </div>
        </div>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Getting Started</h2>
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Installation</h3>
            <ol className="text-gray-300 space-y-3">
              <li>1. Add the plugin to your preferred engine version via the Unreal Launcher</li>
              <li>2. Open your Unreal project and navigate to Settings → Plugins</li>
              <li>3. Find the HexGrids plugin in the Aperture9 category</li>
              <li>4. Tick the enable box and restart your Unreal project</li>
            </ol>
            
            <div className="mt-6">
              <Image
                src="/images/mp/HexGridsTut01.png"
                alt="Plugin Installation"
                width={600}
                height={400}
                className="rounded-lg border border-gray-700"
              />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Accessing Plugin Content</h3>
            <p className="text-gray-300 mb-4">
              Once your project has loaded, you need to enable plugin content visibility:
            </p>
            <ol className="text-gray-300 space-y-2 mb-4">
              <li>1. Navigate to the bottom right of your content browser</li>
              <li>2. Open View Options</li>
              <li>3. Tick "Show Engine Content" and "Show Plugin Content"</li>
              <li>4. Scroll down to find the HexGrids Content folder</li>
            </ol>
            <div className="bg-blue-600/20 border border-blue-400/30 rounded p-3">
              <p className="text-blue-300 text-sm">
                💡 <strong>Tip:</strong> Right-click the HexGrids folder and choose "Add to Favourites" for easy future access.
              </p>
            </div>
          </div>
        </section>

        {/* Example Maps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Example Maps</h2>
          <p className="text-gray-300 mb-6">
            The plugin includes several example maps to demonstrate different use cases:
          </p>
          
          <div className="grid gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Demo Room</h3>
              <p className="text-gray-300">
                Contains a wide assortment of Hex Grid examples showing individual functions and complex setups 
                such as AI-driven movement across the hex board. This should be your prime reference for learning 
                how to use the available functions.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Multi Instance Example</h3>
              <p className="text-gray-300">
                Demonstrates a complex setup showing how to utilize multiple Instanced Static Meshes at once 
                to build a single hex grid. This is the most performant method but requires advanced setup.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Overview</h3>
              <p className="text-gray-300">
                Shows the most basic usage with a Simple Hex Grid in default settings, plus patch notes 
                for the grid updates.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Runtime Map Builder</h3>
              <p className="text-gray-300">
                Example of how to load and save Hex Grid Maps, plus enabling users/developers to create 
                custom grid shapes at runtime.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Showcase</h3>
              <p className="text-gray-300">
                Highly animated grid demonstrating functions in action and ways to manipulate the grid itself. 
                Great for animating grid loading or applying modifications to tiles.
              </p>
            </div>
          </div>
        </section>

        {/* Basic Usage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Basic Usage</h2>
          
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Adding Hex Grids to Your World</h3>
            <ol className="text-gray-300 space-y-3">
              <li>1. Navigate to the HexGrids/Blueprints folder in the plugin content</li>
              <li>2. Use the general HexGrids blueprint as your starting point</li>
              <li>3. Copy the blueprint to your project content folder for easy access</li>
              <li>4. Drag and drop the HexGrid BP into your world</li>
              <li>5. Adjust the details panel to get your desired grid shape and size</li>
            </ol>
            
            <div className="bg-yellow-600/20 border border-yellow-400/30 rounded p-3 mt-4">
              <p className="text-yellow-300 text-sm">
                ⚠️ <strong>Performance Tip:</strong> Type values instead of dragging sliders in the details panel, 
                as construction script re-runs can become laggy with slider adjustments.
              </p>
            </div>
          </div>
        </section>

        {/* Blueprint Functions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Core Blueprint Functions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Delete Grid</h3>
              <p className="text-gray-300">
                The first function in the chain. Cleans up the grid from any previous construction script runs. 
                Very handy at runtime when modifying grid size - clean up the old grid and re-run the chain 
                to make the grid fully modifiable at runtime.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Generate Grid</h3>
              <p className="text-gray-300">
                The core of grid generation. This generates the data grid, which is ultimately an array of coordinates. 
                This de-couples the grid concept from the mesh side, so you don't even need meshes - you can work 
                with it purely as a data-only grid and run grid logic with a single landscape as the floor.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Populate Grid</h3>
              <p className="text-gray-300">
                Generates the mesh to visualize the grid. Supports both Instanced Static Mesh and Static Mesh Components. 
                You'll want to customize this function most for your own uses to control what meshes are generated and what they do.
              </p>
              <div className="bg-blue-600/20 border border-blue-400/30 rounded p-3 mt-3">
                <p className="text-blue-300 text-sm">
                  💡 <strong>Blueprint Tip:</strong> You can swap out the AddStaticMesh approach for SpawnActorFromClass 
                  to spawn blueprint actors for each tile (requires moving PopulateGrid to BeginPlay).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Static Meshes vs ISM */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Static Meshes vs Instanced Static Mesh</h2>
          
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Choosing Your Approach</h3>
            <p className="text-gray-300 mb-4">
              When using meshes for your tiles, you need to decide between Static Mesh Components and 
              Instanced Static Mesh Components (ISM).
            </p>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 rounded p-4">
                <h4 className="text-green-400 font-semibold mb-3">✅ ISM Benefits</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Super cheap to render</li>
                  <li>• Grid can be 10x larger than normal mesh grids</li>
                  <li>• Excellent memory efficiency</li>
                  <li>• Perfect for mobile development</li>
                  <li>• Ideal for large grids</li>
                </ul>
              </div>
              
              <div className="bg-gray-900/50 rounded p-4">
                <h4 className="text-red-400 font-semibold mb-3">❌ ISM Limitations</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Copy of a single mesh only</li>
                  <li>• Cannot use different tile designs</li>
                  <li>• More suited for grid visualization</li>
                  <li>• Artwork placed separately on top</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">ISM Meta (UE 4.24+)</h3>
            <p className="text-gray-300">
              New in UE 4.24/4.25 is the concept of adding meta tags to your ISMs. This empowers you to make 
              ISMs more unique in material design, adding some customization possibilities to the performant ISM approach.
            </p>
          </div>
        </section>

        {/* Support */}
        <section>
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              For additional support, questions, or feature requests, don't hesitate to get in touch.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Support
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
