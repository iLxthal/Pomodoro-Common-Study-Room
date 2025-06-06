import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Users, Clock, Plus } from "lucide-react"

export default function RoomsPage() {
  // This would be fetched from Firebase in a real implementation
  const studyRooms = [
    {
      id: "room1",
      name: "Computer Science Study Group",
      participants: 4,
      subject: "Computer Science",
      active: true,
    },
    {
      id: "room2",
      name: "Mathematics Mastery",
      participants: 2,
      subject: "Mathematics",
      active: true,
    },
    {
      id: "room3",
      name: "Biology Exam Prep",
      participants: 3,
      subject: "Biology",
      active: false,
    },
    {
      id: "room4",
      name: "History Discussion",
      participants: 1,
      subject: "History",
      active: true,
    },
    {
      id: "room5",
      name: "Physics Problem Solving",
      participants: 5,
      subject: "Physics",
      active: true,
    },
    {
      id: "room6",
      name: "Literature Analysis",
      participants: 2,
      subject: "Literature",
      active: false,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-purple-600" />
            <h1 className="text-xl font-bold">StudySync</h1>
          </Link>
          <nav className="flex items-center gap-4">
            <span className="text-sm text-slate-600 dark:text-slate-300">User #1234</span>
            <Link href="/">
              <Button variant="outline">Exit</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold">Study Rooms</h1>
            <p className="text-slate-600 dark:text-slate-300">Join an existing room or create your own</p>
          </div>
          <div className="flex gap-4">
            <Link href="/rooms/create">
              <Button className="gap-2">
                <Plus className="h-4 w-4" /> Create Room
              </Button>
            </Link>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Input placeholder="Search rooms..." className="max-w-xs" />
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              All
            </Button>
            <Button variant="outline" size="sm">
              Active
            </Button>
            <Button variant="outline" size="sm">
              My Subjects
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studyRooms.map((room) => (
            <Card key={room.id} className={room.active ? "" : "opacity-70"}>
              <CardHeader>
                <CardTitle>{room.name}</CardTitle>
                <CardDescription>Subject: {room.subject}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-slate-500" />
                  <span>{room.participants} participants</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${room.active ? "bg-green-500" : "bg-slate-400"}`}></div>
                  <span>{room.active ? "Active now" : "Inactive"}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/rooms/${room.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    {room.active ? "Join Room" : "View Room"}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
