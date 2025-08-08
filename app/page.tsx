'use client';

import React, { useState, useMemo } from 'react';
import { CustomWormholeWidget } from '../components/CustomWormholeWidget';
import { ThemeToggle } from '../components/ThemeToggle';
import { AppThemeProvider } from '../components/ThemeProvider';
import { useTheme } from '../hooks/useTheme';
import Image from 'next/image';
import {
  createWormholeConfig,
  createWormholeTheme,
  validateConfig,
} from '../config/wormhole';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [serviceStatus, setServiceStatus] = useState<{
    isVisible: boolean;
    message: string;
    type: 'info' | 'warning' | 'error';
  }>({
    isVisible: false,
    message: '',
    type: 'info',
  });
  const { isDark, toggleTheme, mounted } = useTheme();

  const { config, theme } = useMemo(() => {
    const config = createWormholeConfig(isDark);
    const theme = createWormholeTheme(isDark);
    const configErrors = validateConfig(config as any);
    if (configErrors.length > 0)
      console.error('Configuration errors:', configErrors);
    return { config, theme };
  }, [isDark]);

  if (!mounted) {
    return (
      <div className="app">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontSize: '16px',
            color: '#667eea',
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  return (
    <AppThemeProvider isDark={isDark}>
      <div className="app">
        <header className="header">
          <div className="container">
            <div className="header-content">
              <Image
                src="/images/logoGreen.svg"
                alt="Easy Money Bridge"
                width={160}
                height={40}
                style={{ marginTop: '6px' }}
              />
              <nav className="nav-links">
                <a href="#bridge">Bridge</a>
                <a href="#features">Features</a>
                <a href="#features">About</a>
              </nav>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="header-actions">
                  <ThemeToggle
                    isDark={isDark}
                    onToggle={toggleTheme}
                    className="theme-toggle-header"
                  />
                </div>
                <button
                  className="mobile-menu-btn"
                  onClick={() => setIsMobileMenuOpen(v => !v)}
                >
                  ☰
                </button>
              </div>
            </div>
          </div>
        </header>

        {isMobileMenuOpen && (
          <div
            className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          >
            <div className="mobile-nav-content">
              <button
                className="mobile-nav-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
              <nav className="nav-links">
                <a href="#bridge" onClick={() => setIsMobileMenuOpen(false)}>
                  Bridge
                </a>
                <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>
                  Features
                </a>
                <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </a>
              </nav>
            </div>
          </div>
        )}

        <main className="main">
          <div className="container" id="bridge">
            <div className="hero-section fade-in-up">
              <h1 className="hero-title">Cross-Chain Bridge</h1>
              <p className="hero-subtitle">
                Seamlessly transfer your assets across multiple blockchain
                networks with the power of Akasha. Fast, secure, and reliable
                cross-chain transfers.
              </p>
              <div className="bridge-card fade-in-up">
                <h2>Bridge Your Assets</h2>
                <div className="wormhole-connect-container">
                  <CustomWormholeWidget
                    config={config as any}
                    theme={theme as any}
                    onServiceStatus={setServiceStatus as any}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        <section className="features" id="features">
          <div className="container">
            <div className="hero-section">
              <h2
                className="hero-title"
                style={{ fontSize: '2.5rem', marginBottom: '20px' }}
              >
                Why Choose Easy Money Bridge?
              </h2>
              <p className="hero-subtitle" style={{ marginBottom: '40px' }}>
                Experience the future of cross-chain transfers with our advanced
                features
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card fade-in-up">
                <div className="feature-icon">🚀</div>
                <h3 className="feature-title">Lightning Fast</h3>
                <p className="feature-description">
                  Complete your cross-chain transfers in seconds with our
                  optimized infrastructure.
                </p>
              </div>
              <div className="feature-card fade-in-up">
                <div className="feature-icon">🔒</div>
                <h3 className="feature-title">Secure & Reliable</h3>
                <p className="feature-description">
                  Built on Akasha&apos;s battle-tested protocol with
                  multi-signature security.
                </p>
              </div>
              <div className="feature-card fade-in-up">
                <div className="feature-icon">🌐</div>
                <h3 className="feature-title">Multi-Chain Support</h3>
                <p className="feature-description">
                  Bridge between Ethereum, Solana, Polygon, BSC, and many more
                  networks.
                </p>
              </div>
              <div className="feature-card fade-in-up">
                <div className="feature-icon">💰</div>
                <h3 className="feature-title">Low Fees</h3>
                <p className="feature-description">
                  Competitive fees with transparent pricing and no hidden costs.
                </p>
              </div>
              <div className="feature-card fade-in-up">
                <div className="feature-icon">📱</div>
                <h3 className="feature-title">Mobile Friendly</h3>
                <p className="feature-description">
                  Responsive design that works perfectly on desktop and mobile
                  devices.
                </p>
              </div>
              <div className="feature-card fade-in-up">
                <div className="feature-icon">🔄</div>
                <h3 className="feature-title">Easy to Use</h3>
                <p className="feature-description">
                  Simple and intuitive interface for seamless cross-chain
                  transfers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <p>&copy; 2024 Easy Money Bridge. Powered by Akasha.</p>
              <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                Secure cross-chain transfers across multiple blockchain networks
              </p>
            </div>
          </div>
        </footer>
      </div>
    </AppThemeProvider>
  );
}
