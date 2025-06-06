"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"

interface ChatProps {
  roomId: string
}

interface Message {
  id: string
  userId: string
  userName: string
  userAvatar: string
  text: string
  timestamp: number
}

export function Chat({ roomId }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // In a real implementation, we would sync with Firebase
  useEffect(() => {
    // Simulate fetching messages from Firebase
    console.log(`Fetching messages for room ${roomId}`)

    // Mock data
    const mockMessages = [
      {
        id: "msg1",
        userId: "user1",
        userName: "User #1847",
        userAvatar: "/placeholder.svg?height=40&width=40&text=1847",
        text: "Hey everyone! Ready to study?",
        timestamp: Date.now() - 1000 * 60 * 30, // 30 minutes ago
      },
      {
        id: "msg2",
        userId: "user2",
        userName: "User #2956",
        userAvatar: "/placeholder.svg?height=40&width=40&text=2956",
        text: "Yes! I'm having trouble with the algorithms section though.",
        timestamp: Date.now() - 1000 * 60 * 25, // 25 minutes ago
      },
      {
        id: "msg3",
        userId: "user3",
        userName: "User #3421",
        userAvatar: "/placeholder.svg?height=40&width=40&text=3421",
        text: "I can help with that. Let's go through it together during our session.",
        timestamp: Date.now() - 1000 * 60 * 20, // 20 minutes ago
      },
      {
        id: "msg4",
        userId: "user4",
        userName: "User #1234",
        userAvatar: "/placeholder.svg?height=40&width=40&text=1234",
        text: "Great! I've set the timer for 25 minutes. Let's focus on algorithms first.",
        timestamp: Date.now() - 1000 * 60 * 15, // 15 minutes ago
      },
    ]

    setTimeout(() => {
      setMessages(mockMessages)
    }, 500)

    // In a real implementation, we would use Firebase listeners
    // return () => unsubscribe()
  }, [roomId])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newMessage.trim()) return

    const message: Message = {
      id: `msg${Date.now()}`,
      userId: "user4", // Current user
      userName: "User #1234",
      userAvatar: "/placeholder.svg?height=40&width=40&text=1234",
      text: newMessage,
      timestamp: Date.now(),
    }

    setMessages([...messages, message])
    setNewMessage("")

    // In a real implementation, we would add this to Firebase
  }

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-2 ${message.userId === "user4" ? "flex-row-reverse" : ""}`}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={message.userAvatar || "/placeholder.svg"} alt={message.userName} />
                <AvatarFallback>{message.userName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className={`max-w-[70%] ${message.userId === "user4" ? "text-right" : ""}`}>
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-xs text-slate-500">{formatTimestamp(message.timestamp)}</span>
                  <span className="text-sm font-medium">{message.userName}</span>
                </div>
                <div
                  className={`rounded-lg p-3 ${
                    message.userId === "user4"
                      ? "bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100"
                      : "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form onSubmit={handleSendMessage} className="border-t border-slate-200 p-4 dark:border-slate-700">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  )
}
