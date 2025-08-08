// Network configuration and UI/theme assembly drawing from OLD/NEW wormhole files

export const getNetwork = (): 'Mainnet' => 'Mainnet';

export const getRpcConfig = () => {
  const rpcs: Record<string, string> = {};
  rpcs.Ethereum = `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? ''}`;
  rpcs.Solana = `https://solana-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? ''}`;
  rpcs.Arbitrum = `https://arb-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? ''}`;
  rpcs.Base = `https://base-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? ''}`;
  rpcs.Sui = 'https://sui-mainnet.blockvision.org';
  rpcs.Bsc = 'https://bsc-dataseed1.binance.org';
  rpcs.Optimism = `https://opt-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? ''}`;
  rpcs.Polygon = `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? ''}`;
  rpcs.Avalanche = 'https://api.avax.network/ext/bc/C/rpc';
  rpcs.Celo = 'https://forno.celo.org';
  rpcs.Moonbeam = 'https://rpc.api.moonbeam.network';
  rpcs.Kaia = 'https://public-node-api.klaytnapi.com/v1/cypress';
  rpcs.Scroll = `https://scroll-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? ''}`;
  rpcs.Mantle = 'https://rpc.mantle.xyz';
  rpcs.Berachain = 'https://artio.rpc.berachain.com';
  rpcs.Mezo = 'https://mainnet.mezo.public.validationcloud.io';
  rpcs.Aptos = 'https://fullnode.mainnet.aptoslabs.com/v1';
  rpcs.XLayer = 'https://rpc.xlayer.tech';
  rpcs.WorldChain = `https://worldchain-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? ''}`;
  rpcs.Linea = `https://linea-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? ''}`;
  rpcs.Sonic = 'https://mainnet.sonic.game';
  rpcs.SeiEVM = 'https://rpc.sei.io';
  rpcs.Fantom = 'https://rpc.ftm.tools';
  rpcs.Unichain = 'https://rpc-mainnet.unichain.world';
  return rpcs;
};

export const createWormholeConfig = (isDark: boolean = false) => {
  // —— Optional handlers (from template) ——
  const validateTransferHandler = async (_details: unknown) => {
    return { isValid: true } as const;
  };
  const isRouteSupportedHandler = (_route: unknown) => true;
  const isTokenSupportedHandler = (_chain: unknown, _token: unknown) => true;
  const filterRoutes = (allRoutes: string[]) => allRoutes;

  return {
    // —— Core ——
    network: getNetwork(),
    rpcs: getRpcConfig(),

    // —— Optional: Coingecko passthrough (per template) ——
    coingecko: {
      apiKey: process.env.NEXT_PUBLIC_CG_API_KEY,
      customUrl: 'https://api.coingecko.com/api/v3',
    },

    // —— Chains whitelist (optional; defaults work if omitted) ——
    chains: ['Ethereum', 'Solana', 'Polygon'],

    // —— Tokens & metadata (optional; left empty by default) ——
    tokens: [] as Array<string | [string, string]>,
    tokensConfig: {} as Record<string, unknown>,
    wrappedTokens: {} as Record<string, unknown>,

    // —— Routes (leave empty to use defaults, as in template comments) ——
    routes: [],

    // —— Transaction settings (optional) ——
    transactionSettings: {},

    // —— UI (kept minimal; UI of site unchanged) ——
    ui: {
      title: 'Easy Money Bridge',
      getHelpUrl: 'https://discord.gg/wormhole',
      defaultInputs: {},
      menu: [],
      showHamburgerMenu: false,
      walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
      explorer: 'https://wormhole.com/explorer',
      searchTx: { enabled: true, placeholder: 'Search by transaction hash...' },
      partnerLogo: isDark ? '/images/logoWhite.svg' : '/images/logo.svg',
    },

    // —— Event handler (optional hooks per template) ——
    eventHandler: async (event: string, details: unknown) => {
      switch (event) {
        case 'transfer.initiate':
        case 'transfer.start':
        case 'transfer.error':
        case 'transfer.complete':
          // eslint-disable-next-line no-console
          console.log('[Connect event]', event, details);
          break;
      }
    },

    // —— Hook registrations ——
    validateTransferHandler,
    isRouteSupportedHandler,
    isTokenSupportedHandler,
    filterRoutes,
  } as Record<string, unknown>;
};

export const createWormholeTheme = (isDark: boolean = true) => {
  return {
    mode: isDark ? 'dark' : 'light',
    primary: '#1ABC9C',
    secondary: '#F39C12',
    input: '#FFFFFF',
    text: isDark ? '#EEEEEE' : '#1a202c',
    textSecondary: isDark ? '#BBBBBB' : '#4a5568',
    background: isDark ? '#2C3E50' : '#ffffff',
    error: '#E74C3C',
    success: '#2ECC71',
    font: 'Inter, sans-serif',
    borderRadius: '8px',
    spacing: '16px',
    breakpoints: { sm: '480px', md: '768px', lg: '1024px' },
  } as Record<string, unknown>;
};

export const validateConfig = (config: {
  network?: string;
  ui?: { walletConnectProjectId?: string | undefined };
}) => {
  const errors: string[] = [];
  if (!config.network) errors.push('Network configuration is required');
  if (
    !process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID &&
    !config.ui?.walletConnectProjectId
  )
    errors.push(
      'WalletConnect project ID is required in environment or ui configuration'
    );
  return errors;
};
