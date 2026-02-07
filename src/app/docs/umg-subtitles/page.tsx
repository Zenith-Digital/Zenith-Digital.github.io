import Link from 'next/link';
import Image from 'next/image';

export default function UMGSubtitlesDoc() {
  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/marketplace" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            Back to Store
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">UMG Subtitles</h1>
          <div className="w-24 h-1 bg-blue-400 mb-6"></div>
          <p className="text-xl text-gray-300 mb-8">
            The UMG Subtitle Hook plugin utilizes the native subtitle system, but reroutes the final subtitle into UMG components for better customization and control.
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-800 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Links</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://www.unrealengine.com/marketplace/en-US/product/native-subtitles-into-umg"
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
              The UMG Subtitle Hook plugin bridges the gap between Unreal Engine's native subtitle system and UMG (Unreal Motion Graphics). 
              Instead of using the default subtitle rendering, this plugin routes subtitles through custom UMG components, giving you complete 
              control over styling, positioning, and behavior.
            </p>
            <h3 className="text-xl font-bold text-white mb-4">Key Features:</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>Native Integration:</strong> Works seamlessly with Unreal's built-in subtitle system</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>UMG Customization:</strong> Full control over subtitle appearance and behavior</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>Rich Text Support:</strong> Advanced text formatting capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>Drag & Drop:</strong> Easy to implement with minimal setup required</span>
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
                  Download and install the plugin from the Unreal Engine Marketplace. Enable it in your project's Plugin settings.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">2. Widget Setup</h3>
                <p className="text-gray-300 mb-4">
                  Create a new UMG Widget Blueprint and add either:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li><strong>SubtitleTextBlock:</strong> For simple text subtitles</li>
                  <li><strong>SubtitleRichTextBlock:</strong> For rich formatted text with styles</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">3. Configuration</h3>
                <p className="text-gray-300 mb-4">
                  Configure the subtitle components in your widget:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>Set font, size, and color properties</li>
                  <li>Configure positioning and alignment</li>
                  <li>Set up timing and fade effects</li>
                  <li>Customize background and border styling</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">4. Integration</h3>
                <p className="text-gray-300 mb-4">
                  Add your subtitle widget to your HUD or main UI. The plugin will automatically route native subtitles 
                  through your custom UMG components when audio with subtitle data is played.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customization */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Customization Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Text Styling</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Custom fonts and sizes</li>
                <li>• Color and opacity control</li>
                <li>• Outline and shadow effects</li>
                <li>• Rich text formatting</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Layout Control</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Position and alignment</li>
                <li>• Padding and margins</li>
                <li>• Background styling</li>
                <li>• Border and frame options</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Animation</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Fade in/out effects</li>
                <li>• Slide animations</li>
                <li>• Timing controls</li>
                <li>• Custom transitions</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Accessibility</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• High contrast options</li>
                <li>• Scalable text sizes</li>
                <li>• Readable fonts</li>
                <li>• Color customization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Support</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <p className="text-gray-300 mb-6">
              Need help with the UMG Subtitles plugin? We're here to assist you with setup, customization, and troubleshooting.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Contact Support</h3>
                <p className="text-gray-400 mb-4">Get direct help from our development team</p>
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
                <p className="text-gray-400">Network: Single-player and Multiplayer</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
