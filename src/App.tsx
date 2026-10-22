/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedMenu } from './components/FeaturedMenu';
import { AboutSection } from './components/AboutSection';
import { FoodGallery } from './components/FoodGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowToOrder } from './components/HowToOrder';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal, LightboxPhoto } from './components/LightboxModal';
import { ConfigModal } from './components/ConfigModal';
import { DEFAULT_BUSINESS_CONFIG, BusinessConfig, createWhatsAppUrl } from './config/business';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [config, setConfig] = useState<BusinessConfig>(() => {
    try {
      const saved = localStorage.getItem('soujis_kitchen_config_v1');
      if (saved) {
        return { ...DEFAULT_BUSINESS_CONFIG, ...JSON.parse(saved) };
      }
    } catch {
      // Fallback to defaults
    }
    return DEFAULT_BUSINESS_CONFIG;
  });

  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<LightboxPhoto | null>(null);
  const [configModalOpen, setConfigModalOpen] = useState(false);

  const handleSaveConfig = (newConfig: BusinessConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('soujis_kitchen_config_v1', JSON.stringify(newConfig));
    } catch {
      // Ignore write errors
    }
  };

  const handleResetConfig = () => {
    setConfig(DEFAULT_BUSINESS_CONFIG);
    try {
      localStorage.removeItem('soujis_kitchen_config_v1');
    } catch {
      // Ignore write errors
    }
  };

  const floatingWhatsAppUrl = createWhatsAppUrl(
    config.whatsAppNumber,
    "Hi Souji's Kitchen! I would like to enquire about your homemade food items."
  );

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D1F17] flex flex-col font-sans selection:bg-[#8A3D24]/15 selection:text-[#8A3D24]">
      {/* Top Navigation */}
      <Navbar config={config} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero config={config} />

        {/* Featured Menu Section */}
        <FeaturedMenu
          config={config}
          onSelectPhotoPreview={(photo) => setActiveLightboxPhoto(photo)}
        />

        {/* About Souji’s Kitchen Section */}
        <AboutSection config={config} />

        {/* Food Gallery Section */}
        <FoodGallery
          config={config}
          onSelectPhoto={(photo) => setActiveLightboxPhoto(photo)}
        />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* How to Order 3-Step Guide */}
        <HowToOrder config={config} />

        {/* Contact Section */}
        <ContactSection config={config} />
      </main>

      {/* Footer */}
      <Footer config={config} onOpenConfig={() => setConfigModalOpen(true)} />

      {/* Lightbox Modal for enlarged photo previews */}
      <LightboxModal
        photo={activeLightboxPhoto}
        onClose={() => setActiveLightboxPhoto(null)}
        config={config}
      />

      {/* Config / Owner Settings Modal for real-time contact updates */}
      <ConfigModal
        isOpen={configModalOpen}
        onClose={() => setConfigModalOpen(false)}
        config={config}
        onSave={handleSaveConfig}
        onReset={handleResetConfig}
      />

      {/* Subtle floating WhatsApp action for mobile & desktop */}
      <aside aria-label="Quick WhatsApp Action" className="fixed bottom-6 right-6 z-30">
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1DA851] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Order on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline font-semibold text-xs tracking-wide">
            Order on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
