/**
 * Application Constants
 * Centralized configuration for environment variables and common values
 */

// Environment Configuration
export const ENV_CONFIG = {
  NODE_ENV: process.env.NODE_ENV || 'development',
} as const;

// Development Configuration
export const DEV_CONFIG = {
  ENABLE_DEBUG_LOGS: ENV_CONFIG.NODE_ENV === 'development',
  ENABLE_ERROR_LOGS: true, // Always enable error logs
} as const;
