/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Security } from './components/Security';
import { Architecture } from './components/Architecture';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DeploymentModal } from './components/DeploymentModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden relative grid-bg">
      <div className="scanline" />
      <ThreeBackground />
      <Navbar onDeployClick={() => setIsModalOpen(true)} />
      <main className="relative z-10">
        <Hero onDeployClick={() => setIsModalOpen(true)} />
        <BentoGrid />
        <Security />
        <Architecture />
        <Contact />
      </main>
      <Footer />
      <DeploymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
