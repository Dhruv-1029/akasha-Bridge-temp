Akasha Bridge (Wormhole Connect v3)

Production-ready Next.js app integrating Wormhole Connect v3 with your existing UI.

Setup

1. Copy env file:

```
cp env.example .env.local
```

2. Fill in:

- NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
- NEXT_PUBLIC_ALCHEMY_API_KEY

3. Install and run:

```
npm i
npm run dev
```

Build

```
npm run build && npm start
```

Notes

- UI remains unchanged; only logic wiring for Wormhole v3 added.
- RPCs are prefilled with Alchemy endpoints for multiple networks.
- Assets are under public/images.
