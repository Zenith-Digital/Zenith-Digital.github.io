import Link from 'next/link';
import Image from 'next/image';

export default function RopeBridgesDocs() {
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
              src="/images/mp/bridges/RopeBridge_Thumb.png"
              alt="Dynamic Rope Bridges"
              width={64}
              height={64}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-4xl font-bold text-white">Dynamic Rope Bridges</h1>
              <p className="text-gray-400">Responsive rope bridge system for Unreal Engine</p>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="/marketplace"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Back to Marketplace
            </a>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The Dynamic Rope Bridge is a revolutionary digital asset that dynamically responds to players, 
              environmental elements like wind, and objects on its path. Designed for versatility, it's modular, 
              allowing customization in length and appearance with any meshes.
            </p>
            <p className="text-gray-300">
              It's optimized for high performance with a special sleep system for enhanced efficiency. 
              Easy to integrate, it comes as a single drag-and-drop blueprint.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
          <div className="grid gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Ready to Use</h3>
                  <p className="text-gray-300">
                    Drag-and-drop solution. Customize your details and you're done. No complex setup required.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Dynamic Response</h3>
                  <p className="text-gray-300">
                    Responds dynamically to players or objects. Looks organic and realistic when characters run across it.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Optional Wind System</h3>
                  <p className="text-gray-300">
                    Add additional atmospheric movement with the optional wind system, at a small performance cost.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Performance Optimized</h3>
                  <p className="text-gray-300">
                    Optimized as much as possible. Just 1 single physics component, the rest uses ISMs, spline meshes, or static meshes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">How to Use</h2>
          
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Installation & Setup</h3>
            <ol className="text-gray-300 space-y-3">
              <li>1. Install the pack from the Unreal Engine Marketplace</li>
              <li>2. In the content browser, navigate to RopeBridges/Blueprints</li>
              <li>3. Drag the Rope Bridge blueprint into your world</li>
              <li>4. Position it at the start of your bridge location</li>
              <li>5. Select the 3D Vector widget (purple diamond) and move it to the end of your bridge</li>
            </ol>
            
            <div className="bg-yellow-600/20 border border-yellow-400/30 rounded p-3 mt-4">
              <p className="text-yellow-300 text-sm">
                ⚠️ <strong>Note:</strong> Not all elements of the bridge will draw in the editor. 
                The bridge only supports physics and some other features at runtime.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Configuration</h3>
            <p className="text-gray-300 mb-4">
              The details panel contains the most common attributes to customize. Most of these have tooltips 
              that will explain more when you mouse over them.
            </p>
            <p className="text-gray-300">
              Drop down the "Posts and Ropes" section to customize those specific elements.
            </p>
          </div>
        </section>

        {/* Mesh Customization */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Mesh Customization</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Bridge Slats</h3>
              <p className="text-gray-300 mb-4">
                Bridge slats can be customized in the details panel and support random meshes. 
                Add one or more meshes to the <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">Bridge Mesh Slat List</code>.
              </p>
              
              <div className="bg-gray-900/50 rounded p-4 mb-4">
                <h4 className="text-blue-300 font-semibold mb-2">Orientation Guidelines:</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• The bridge is X forward</li>
                  <li>• On a bridge slat, the Y axis points down the board</li>
                </ul>
              </div>

              <div className="bg-blue-600/20 border border-blue-400/30 rounded p-4">
                <h4 className="text-blue-300 font-semibold mb-2">Re-orientation Tip:</h4>
                <p className="text-gray-300 text-sm">
                  Use UE5 modeling tools to re-orient your axis: Drag your mesh into the world, zero its transform, 
                  rotate 90° in Z for correct bridge orientation, then use the "BakeRS" tool to burn that rotation into the mesh.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Posts</h3>
              <p className="text-gray-300 mb-4">
                Posts can be set directly in the details panel. Their position matches the lower rope offsets.
              </p>
              <div className="bg-yellow-600/20 border border-yellow-400/30 rounded p-3">
                <p className="text-yellow-300 text-sm">
                  ⚠️ <strong>Material Note:</strong> Posts use an Instanced Static Mesh Component, so your material 
                  will need ISM usage added if it shows up untextured.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Rope Customization</h3>
              <p className="text-gray-300 mb-4">
                The rope is set within the blueprint and is not exposed in the details panel. This is because it uses 
                a Spline Mesh Component, making it ideal to stick with the default 1cm_Tube mesh.
              </p>
              
              <div className="bg-gray-900/50 rounded p-4">
                <h4 className="text-blue-300 font-semibold mb-2">Advanced Customization:</h4>
                <ol className="text-gray-300 space-y-2 text-sm">
                  <li>1. Open the <code className="bg-gray-700 px-1 rounded text-blue-300">Update Rope</code> function (singular, not Update Ropes)</li>
                  <li>2. Find the <code className="bg-gray-700 px-1 rounded text-blue-300">Add Spline Mesh Component</code> node</li>
                  <li>3. Select it and override as needed</li>
                  <li>4. Update material usage to include "Spline Mesh Component" if changing materials</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Notes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Performance Considerations</h2>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Optimization Features</h3>
            <ul className="text-gray-300 space-y-3">
              <li>• <strong>Single Physics Component:</strong> Only one physics component handles all bridge dynamics</li>
              <li>• <strong>Efficient Rendering:</strong> Uses ISMs, spline meshes, and static meshes for optimal performance</li>
              <li>• <strong>Sleep System:</strong> Special sleep system enhances efficiency when bridge is not in use</li>
              <li>• <strong>Modular Design:</strong> Customizable length and appearance without performance penalties</li>
            </ul>
          </div>
        </section>

        {/* Upcoming Content */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">📹 YouTube Videos Coming Soon</h2>
            <p className="text-gray-300">
              Detailed video tutorials covering setup, customization, and advanced usage will be available soon.
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
