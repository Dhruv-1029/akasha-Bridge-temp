# Easy Money Bridge

A cross-chain bridge application built with Next.js, React, and Wormhole Connect v3.0.

## Environment Setup

1. Copy the environment example file:

```bash
cp env.example .env.local
```

2. Update the environment variables in `.env.local`:

- `NEXT_PUBLIC_WORMHOLE_NETWORK`: Set to 'mainnet', 'testnet', or 'devnet'
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`: Your WalletConnect project ID
- `NODE_ENV`: Set to 'development' or 'production'

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables (see above)

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Supported Chains

- **EVM Chains**: Ethereum, BSC, Polygon, Avalanche, Arbitrum, Optimism, Base, Fantom
- **Non-EVM Chains**: Solana, Sui, Aptos, Bera, Sei
