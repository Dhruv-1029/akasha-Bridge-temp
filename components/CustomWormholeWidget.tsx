/// <reference types="react" />
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
import React from 'react';
import dynamic from 'next/dynamic';

const WormholeConnect = dynamic(
  () =>
    import('@wormhole-foundation/wormhole-connect').then(mod => ({
      default: (mod as any).default || mod,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading bridge...</p>
      </div>
    ),
  }
) as unknown as React.ComponentType<any>;

export interface WormholeConfig {
  network: 'Mainnet';
  rpcs?: Record<string, string>;
  ui: Record<string, unknown>;
}

export interface WormholeTheme {
  mode?: 'light' | 'dark';
  font?: string;
  primary?: string;
  secondary?: string;
  background?: string;
  backgroundSecondary?: string;
  text?: string;
  textSecondary?: string;
  error?: string;
  success?: string;
}

interface CustomWormholeWidgetProps {
  config: WormholeConfig;
  theme: WormholeTheme;
  className?: string;
  onServiceStatus?: (status: {
    isVisible: boolean;
    message: string;
    type: 'info' | 'warning' | 'error';
  }) => void;
}

export const CustomWormholeWidget: React.FC<CustomWormholeWidgetProps> = ({
  config,
  theme,
  className = '',
}) => {
  return (
    <div
      className={`custom-wormhole-widget ${className}`}
      data-testid="custom-wormhole-widget"
      style={{ position: 'relative' }}
    >
      <WormholeConnect config={config as any} theme={theme as any} />
    </div>
  );
};
