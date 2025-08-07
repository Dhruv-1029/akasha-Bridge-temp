'use client';

import React, { useState } from 'react';
import CustomWormholeWidget from '../components/CustomWormholeWidget';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { ThemeToggle } from '../components/ThemeToggle';
import { useTheme } from '../hooks/useTheme';
import Image from 'next/image';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <ErrorBoundary>
      <div className='app'>
        {/* Header */}
        <header className='header'>
          <div className='container'>
            <div className='header-content'>
              {/* <div className=''> </div> */}
              <Image
                src='/images/logoGreen.svg'
                alt='Easy Money Bridge'
                width={160}
                height={40}
                style={{ marginTop: '6px' }}
              />
              {/* <div style={{fontSize:'28px', fontWeight:'bold'}}>AKASHA</div> */}

              {/* Desktop Navigation */}
              <nav className='nav-links'>
                {/* <a href='#home'>Home</a> */}
                <a href='#bridge'>Bridge</a>
                <a href='#features'>Features</a>
                <a href='#features'>About</a>
              </nav>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Theme Toggle */}
                <div className='header-actions'>
                  <ThemeToggle
                    isDark={isDark}
                    onToggle={toggleTheme}
                    className='theme-toggle-header'
                  />
                </div>

                {/* Mobile Menu Button */}
                <button className='mobile-menu-btn' onClick={toggleMobileMenu}>
                  ☰
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div
            className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          >
            <div className='mobile-nav-content'>
              <button
                className='mobile-nav-close'
                onClick={toggleMobileMenu}
                aria-label='Close menu'
              >
                ✕
              </button>
              <nav className='nav-links'>
                {/* <a href='#home' onClick={toggleMobileMenu}>Home</a> */}
                <a href='#bridge' onClick={toggleMobileMenu}>
                  Bridge
                </a>
                <a href='#features' onClick={toggleMobileMenu}>
                  Features
                </a>
                <a href='#features' onClick={toggleMobileMenu}>
                  About
                </a>
              </nav>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className='main'>
          <div className='container' id='bridge'>
            <div className='hero-section fade-in-up'>
              <h1 className='hero-title'>Cross-Chain Bridge</h1>
              <p className='hero-subtitle'>
                Seamlessly transfer your assets across multiple blockchain
                networks with the power of Akasha. Fast, secure, and reliable
                cross-chain transfers.
              </p>

              {/* Bridge Card */}
              <div className='bridge-card fade-in-up'>
                <h2>Bridge Your Assets</h2>
                <div className='wormhole-connect-container'>
                  <ErrorBoundary>
                    <CustomWormholeWidget />
                  </ErrorBoundary>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section className='features' id='features'>
          <div className='container'>
            <div className='hero-section'>
              <h2
                className='hero-title'
                style={{ fontSize: '2.5rem', marginBottom: '20px' }}
              >
                Why Choose Easy Money Bridge?
              </h2>
              <p className='hero-subtitle' style={{ marginBottom: '40px' }}>
                Experience the future of cross-chain transfers with our advanced
                features
              </p>
            </div>

            <div className='features-grid'>
              <div className='feature-card fade-in-up'>
                <div className='feature-icon'>🚀</div>
                <h3 className='feature-title'>Lightning Fast</h3>
                <p className='feature-description'>
                  Complete your cross-chain transfers in seconds with our
                  optimized infrastructure.
                </p>
              </div>

              <div className='feature-card fade-in-up'>
                <div className='feature-icon'>🔒</div>
                <h3 className='feature-title'>Secure & Reliable</h3>
                <p className='feature-description'>
                  Built on Akasha&apos;s battle-tested protocol with
                  multi-signature security.
                </p>
              </div>

              <div className='feature-card fade-in-up'>
                <div className='feature-icon'>🌐</div>
                <h3 className='feature-title'>Multi-Chain Support</h3>
                <p className='feature-description'>
                  Bridge between Ethereum, Solana, Polygon, BSC, and many more
                  networks.
                </p>
              </div>

              <div className='feature-card fade-in-up'>
                <div className='feature-icon'>💰</div>
                <h3 className='feature-title'>Low Fees</h3>
                <p className='feature-description'>
                  Competitive fees with transparent pricing and no hidden costs.
                </p>
              </div>

              <div className='feature-card fade-in-up'>
                <div className='feature-icon'>📱</div>
                <h3 className='feature-title'>Mobile Friendly</h3>
                <p className='feature-description'>
                  Responsive design that works perfectly on desktop and mobile
                  devices.
                </p>
              </div>

              <div className='feature-card fade-in-up'>
                <div className='feature-icon'>🔄</div>
                <h3 className='feature-title'>Easy to Use</h3>
                <p className='feature-description'>
                  Simple and intuitive interface for seamless cross-chain
                  transfers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className='footer'>
          <div className='container'>
            <div className='footer-content'>
              <p>&copy; 2024 Easy Money Bridge. Powered by Akasha.</p>
              <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                Secure cross-chain transfers across multiple blockchain networks
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}
