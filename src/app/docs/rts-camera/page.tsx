import Link from 'next/link';
import Image from 'next/image';

export default function RTSCameraDoc() {
  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/marketplace" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            Back to Store
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ultimate RTS Camera</h1>
          <div className="w-24 h-1 bg-blue-400 mb-6"></div>
          <p className="text-xl text-gray-300 mb-8">
            A comprehensive camera system designed specifically for Real-Time Strategy games with multi-platform input support and advanced features.
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-800 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Links</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://www.unrealengine.com/marketplace/en-US/product/ae03a0fb7c5940a690cd477adfd65da9"
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
              The Ultimate RTS Camera provides a complete camera solution for Real-Time Strategy games. It features intelligent 
              input detection, seamless switching between control schemes, and comprehensive platform support including mobile devices.
            </p>
            <h3 className="text-xl font-bold text-white mb-4">Key Features:</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>Multi-Input Support:</strong> Automatic detection between keyboard/mouse and gamepad</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>Mobile Compatible:</strong> Touch controls with drag, pinch zoom, and rotate gestures</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>Fully Replicated:</strong> Network-ready for multiplayer RTS games</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>Smooth Interpolation:</strong> Buttery-smooth camera movement and transitions</span>
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
                  Download from the Unreal Engine Marketplace and enable the plugin in your project settings.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">2. Pawn Setup</h3>
                <p className="text-gray-300 mb-4">
                  Create a new Pawn Blueprint or modify your existing PlayerController:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>Add the RTS Camera Component to your pawn</li>
                  <li>Set the camera as the view target</li>
                  <li>Configure input bindings for camera controls</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">3. Input Configuration</h3>
                <p className="text-gray-300 mb-4">
                  Set up input mappings for different platforms:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li><strong>Keyboard/Mouse:</strong> WASD movement, mouse for rotation and zoom</li>
                  <li><strong>Gamepad:</strong> Stick movement, triggers for zoom, shoulder buttons for rotation</li>
                  <li><strong>Mobile:</strong> Touch drag, pinch zoom, two-finger rotation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">4. Camera Bounds</h3>
                <p className="text-gray-300 mb-4">
                  Define camera movement boundaries:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>Set minimum and maximum zoom distances</li>
                  <li>Configure movement bounds for your level</li>
                  <li>Adjust pitch angle limits</li>
                  <li>Set up boundary collision volumes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Input Systems */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Input Systems</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Keyboard & Mouse</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• WASD for movement</li>
                <li>• Mouse wheel for zoom</li>
                <li>• Right-click drag for rotation</li>
                <li>• Edge scrolling support</li>
                <li>• Modifier key combinations</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Gamepad</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Left stick for movement</li>
                <li>• Right stick for rotation</li>
                <li>• Triggers for zoom in/out</li>
                <li>• Shoulder buttons for quick rotate</li>
                <li>• Configurable dead zones</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Mobile Touch</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Single finger drag to move</li>
                <li>• Pinch gesture for zoom</li>
                <li>• Two-finger rotation</li>
                <li>• Edge scrolling areas</li>
                <li>• Touch sensitivity settings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Customization */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Customization Options</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Movement Settings</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Movement speed and acceleration</li>
                  <li>• Zoom speed and limits</li>
                  <li>• Rotation speed and constraints</li>
                  <li>• Smoothing and interpolation</li>
                  <li>• Boundary enforcement</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Input Customization</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Custom key bindings</li>
                  <li>• Sensitivity adjustments</li>
                  <li>• Dead zone configuration</li>
                  <li>• Input device switching</li>
                  <li>• Platform-specific settings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Network Support */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Multiplayer Support</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <p className="text-gray-300 mb-6">
              The Ultimate RTS Camera is fully network-ready with built-in replication support for multiplayer RTS games.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Network Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Replicated camera position</li>
                  <li>• Synchronized movement</li>
                  <li>• Client-side prediction</li>
                  <li>• Lag compensation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Performance</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Optimized for multiplayer</li>
                  <li>• Minimal network overhead</li>
                  <li>• Efficient update rates</li>
                  <li>• Scalable architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Support</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <p className="text-gray-300 mb-6">
              Need assistance with the Ultimate RTS Camera? Our support team is ready to help with implementation and customization.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Contact Support</h3>
                <p className="text-gray-400 mb-4">Get help from our experienced developers</p>
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Compatibility</h3>
                <p className="text-gray-400 mb-2">Engine Versions: UE4.25+ and UE5.0+</p>
                <p className="text-gray-400 mb-2">Platforms: Windows, Mac, Linux, Mobile, Console</p>
                <p className="text-gray-400">Network: Single-player and Multiplayer</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
