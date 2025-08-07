import React from 'react';
import WormholeConnect, {
  config,
  DEFAULT_ROUTES,
} from '@wormhole-foundation/wormhole-connect';

import {
  MayanRoute,
  MayanRouteSWIFT,
  MayanRouteMCTP,
  MayanRouteWH,
} from '@mayanfinance/wormhole-sdk-route';

const CustomWormholeWidget = () => {
  // WalletConnect Project ID
  const WALLETCONNECT_PROJECT_ID =
    process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

  // Block CoinGecko requests to avoid CORS and rate limiting issues
  React.useEffect(() => {
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === 'string' ? input : input.toString();

      // Block all CoinGecko requests
      if (url.includes('api.coingecko.com')) {
        console.log('Blocking CoinGecko request:', url);
        return new Response(
          JSON.stringify({ error: 'Price fetching disabled' }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }

      return originalFetch(input, init);
    };

    return () => {
      window.fetch = originalFetch;
    };
  }, []);

  // RPC configuration with Alchemy and Ankr API endpoints
  const rpcs = {
    // 1. Ethereum
    Ethereum: 'https://eth-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 2. Solana
    Solana: 'https://solana-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 3. Arbitrum
    Arbitrum: 'https://arb-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 4. Base
    Base: 'https://base-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 5. Sui
    Sui: 'https://sui-mainnet.gateway.tatum.io/',
    // 6. BSC
    Bsc: 'https://bnb-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 7. Optimism
    Optimism: 'https://opt-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 8. Unichain
    Unichain: 'https://unichain-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 9. Fantom
    Fantom: 'https://fantom-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 10. Polygon
    Polygon: 'https://polygon-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 11. Avalanche
    Avalanche: 'https://avax-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 12. Celo
    Celo: 'https://celo-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 13. Moonbeam
    Moonbeam: 'https://rpc.ankr.com/moonbeam/f2d3f72aebcb2673c12c1a9eb6d3e6085427e0f364c59f42f2daadec704ea08b',
    // 14. Klaytn
    Klaytn: 'https://1rpc.io/klay',
    // 15. Scroll
    Scroll: 'https://scroll-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 16. Mantle
    Mantle: 'https://mantle-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 17. Berachain
    Berachain: 'https://berachain-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 18. Mezo
    Mezo: 'https://mainnet.mezo.public.validationcloud.io',
    // 19. Aptos
    Aptos: 'https://rpc.ankr.com/premium-http/aptos/f2d3f72aebcb2673c12c1a9eb6d3e6085427e0f364c59f42f2daadec704ea08b/v1',
    // 20. X Layer
    Xlayer: 'https://rpc.ankr.com/xlayer/f2d3f72aebcb2673c12c1a9eb6d3e6085427e0f364c59f42f2daadec704ea08b',
    // 21. World Chain
    Worldchain: 'https://worldchain-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 22. Linea
    Linea: 'https://linea-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
    // 23. Sonic
    Sonic: 'https://sonic.drpc.org',
    // 24. SeiEVM
    Sei: 'https://sei-mainnet.g.alchemy.com/v2/GyDVBpVT-U1iQby04gZGw',
  };

  // Create routes array with all available route plugins
  const routes = [
    ...DEFAULT_ROUTES,
    MayanRoute,
    MayanRouteSWIFT,
    MayanRouteMCTP,
    MayanRouteWH,
  ] as unknown as config.WormholeConnectConfig['routes'];

  // Complete configuration with all 24 supported chains, RPCs, and routes
  const config: config.WormholeConnectConfig = {
    chains: [
      // All 24 chains in order
      'Ethereum',
      'Solana',
      'Arbitrum',
      'Base',
      'Sui',
      'Bsc',
      'Optimism',
      'Unichain',
      'Fantom',
      'Polygon',
      'Avalanche',
      'Celo',
      'Moonbeam',
      'Klaytn',
      'Scroll',
      'Mantle',
      'Berachain',
      'Mezo',
      'Aptos',
      'Xlayer',
      'Worldchain',
      'Linea',
      'Sonic',
      'Sei',
    ],
    rpcs,
    routes, // Includes default routes + Mayan routes
    ui: {
      walletConnectProjectId: WALLETCONNECT_PROJECT_ID,
      // Custom branding
      title: 'Easy Money Bridge',
    },
    // Quote fetching is enabled by default
  };

  return (
    <div className='custom-wormhole-widget wormhole-connect-wrapper'>
      <WormholeConnect config={config} />
    </div>
  );
};

export default CustomWormholeWidget;
