// src/lib/config.ts
export const config = {
  grok: {
    apiKey: process.env.GROK_API_KEY!
  },
  appwrite: {
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    collectionId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!
  },
  rateLimiting: {
    requests: Number(process.env.RATE_LIMIT_REQUESTS) || 10,
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60000
  },
  scraping: {
    timeout: Number(process.env.PUPPETEER_TIMEOUT) || 30000,
    maxUrls: Number(process.env.MAX_URLS_PER_REQUEST) || 5
  }
}

// Validate that all required environment variables are present
const validateEnv = () => {
  const required = [
    'GROK_API_KEY',
    'NEXT_PUBLIC_APPWRITE_ENDPOINT',
    'NEXT_PUBLIC_APPWRITE_PROJECT_ID',
    'NEXT_PUBLIC_APPWRITE_DATABASE_ID',
    'NEXT_PUBLIC_APPWRITE_COLLECTION_ID'
  ]

  for (const key of required) {
    if (!process.env[key]) {
      throw new Error(`Missing required environment variable: ${key}`)
    }
  }
}

// Call this in your app's initialization
validateEnv()

export default config
