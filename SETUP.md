# Setup Guide for Easy Money Bridge

## Environment Variables Setup

To fix the "Please select a quote" issue, you need to set up the required environment variables.

### 1. Create Environment File

Create a `.env.local` file in the root directory with the following content:

```bash
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id_here
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_api_key_here
NEXT_PUBLIC_ANKR_API_KEY=your_ankr_api_key_here
NODE_ENV=development
```

### 2. Get API Keys

#### WalletConnect Project ID

1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Create a new project
3. Copy the Project ID

#### Alchemy API Key

1. Go to [Alchemy](https://www.alchemy.com/)
2. Create an account and a new app
3. Copy the API Key

#### Ankr API Key (Optional)

1. Go to [Ankr](https://www.ankr.com/)
2. Create an account
3. Get your API key

### 3. Update Environment File

Replace the placeholder values in `.env.local` with your actual API keys:

```bash
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=1234567890abcdef1234567890abcdef
NEXT_PUBLIC_ALCHEMY_API_KEY=your_actual_alchemy_key_here
NEXT_PUBLIC_ANKR_API_KEY=your_actual_ankr_key_here
NODE_ENV=development
```

### 4. Restart Development Server

After updating the environment variables, restart your development server:

```bash
npm run dev
```

## Troubleshooting Quote Issues

### Check Console for Errors

Open your browser's developer console (F12) and look for:

- Environment variable warnings
- Quote request logs
- Error messages

### Common Issues and Solutions

1. **"Please select a quote" error**
   - Make sure all API keys are properly set
   - Check that the Mayan routes package is installed
   - Verify RPC endpoints are accessible

2. **No quotes appearing**
   - Check browser console for errors
   - Ensure you have sufficient balance
   - Try refreshing the page

3. **RPC connection issues**
   - The app now uses fallback RPC endpoints if API keys are not set
   - For better performance, use the provided API keys

### Testing the Bridge

1. Connect your wallet
2. Select Polygon as source chain
3. Select Solana as destination chain
4. Select USDT as the token
5. Enter amount (3.6 USDT)
6. Wait for quotes to load
7. Select a quote
8. Confirm transaction

## Support

If you're still experiencing issues:

1. Check the browser console for detailed error messages
2. Ensure all dependencies are properly installed
3. Verify your API keys are valid and have sufficient quota
