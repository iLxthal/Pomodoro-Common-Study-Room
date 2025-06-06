"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft } from "lucide-react"
import { PomodoroTimer } from "@/components/pomodoro-timer"
import { SharedNotes } from "@/components/shared-notes"
import { Chat } from "@/components/chat"

export default function StudyRoomPage({ params }: { params: { id: string } }) {
  const roomId = params.id
  const [roomData, setRoomData] = useState({
    name: "Computer Science Study Group",
    subject: "Computer Science",
    participants: [
      { id: "user1", name: "User #1847", avatar: "/placeholder.svg?height=40&width=40&text=1847" },
      { id: "user2", name: "User #2956", avatar: "/placeholder.svg?height=40&width=40&text=2956" },
      { id: "user3", name: "User #3421", avatar: "/placeholder.svg?height=40&width=40&text=3421" },
      { id: "user4", name: "User #1234", avatar: "/placeholder.svg?height=40&width=40&text=1234" },
    ],
  })

  // In a real implementation, we would fetch room data from Firebase
  useEffect(() => {
    // Simulate fetching room data
    console.log(`Fetching data for room ${roomId}`)
    // In a real app, we would use Firebase to listen for room updates
  }, [roomId])

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <header className="border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="/rooms">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">{roomData.name}</h1>
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              {roomData.subject}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {roomData.participants.map((participant, index) => (
                  <Avatar key={participant.id} className="border-2 border-white dark:border-slate-800">
                    <AvatarImage src={participant.avatar || "/placeholder.svg"} alt={participant.name} />
                    <AvatarFallback>
                      {participant.name.includes("#") ? participant.name.split("#")[1] : participant.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="ml-2 text-sm text-slate-600 dark:text-slate-300">
                {roomData.participants.length} participants
              </span>
            </div>
            <span className="text-sm text-slate-600 dark:text-slate-300">User #1234</span>
            <Link href="/">
              <Button variant="outline">Exit</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex flex-1 flex-col gap-6 p-4 lg:flex-row">
        <div className="flex w-full flex-col gap-6 lg:w-2/3">
          <PomodoroTimer />

          <Tabs defaultValue="notes" className="flex-1">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="notes">Shared Notes</TabsTrigger>
              <TabsTrigger value="chat">Chat</TabsTrigger>
            </TabsList>
            <TabsContent value="notes" className="h-[500px] overflow-y-auto border rounded-md mt-2">
              <SharedNotes roomId={roomId} />
            </TabsContent>
            <TabsContent value="chat" className="h-[500px] overflow-y-auto border rounded-md mt-2">
              <Chat roomId={roomId} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-full lg:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>Room Participants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {roomData.participants.map((participant) => (
                  <div key={participant.id} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={participant.avatar || "/placeholder.svg"} alt={participant.name} />
                      <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{participant.name}</p>
                      <p className="text-sm text-slate-500">{participant.name === "You" ? "You (Active)" : "Active"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
