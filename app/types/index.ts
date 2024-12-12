// src/types/index.ts
export interface WebContent {
  url: string
  content: string
  timestamp: Date
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  sources?: string[]
  timestamp: Date
}

export interface Conversation {
  id: string
  messages: ChatMessage[]
  urls?: string[]
  userId: string
  createdAt: Date
  updatedAt: Date
}
