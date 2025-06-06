import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Clock, Users, FileText } from "lucide-react"
import UserNumberForm from "@/components/user-number-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-purple-600" />
            <h1 className="text-xl font-bold">StudySync</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20 flex flex-col items-center text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Study Together, <span className="text-purple-600">Achieve More</span>
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-slate-600 dark:text-slate-300">
            Join our collaborative study platform with real-time Pomodoro timers and shared notes to boost your
            productivity.
          </p>

          <Card className="w-full max-w-md mb-8">
            <CardHeader>
              <CardTitle>Enter Your User Number</CardTitle>
              <CardDescription>Enter any number (1-9999) to access your study account</CardDescription>
            </CardHeader>
            <CardContent>
              <UserNumberForm />
            </CardContent>
          </Card>
        </section>

        {/* Keep the existing features section */}
        <section className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Key Features</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Clock className="mb-2 h-8 w-8 text-purple-600" />
                <CardTitle>Pomodoro Timer</CardTitle>
                <CardDescription>
                  Stay focused with customizable Pomodoro timers that sync with your study group.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="mb-2 h-8 w-8 text-purple-600" />
                <CardTitle>Collaborative Rooms</CardTitle>
                <CardDescription>
                  Create or join study rooms with friends and classmates for real-time collaboration.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <FileText className="mb-2 h-8 w-8 text-purple-600" />
                <CardTitle>Shared Notes</CardTitle>
                <CardDescription>
                  Take and share notes in real-time with your study group to enhance learning.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-slate-800">
            <h2 className="mb-6 text-center text-3xl font-bold">How It Works</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold">Create an Account</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Sign up for free and set up your profile to get started.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold">Join or Create a Room</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Start your own study room or join an existing one with friends.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold">Study Together</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Use the Pomodoro timer and shared notes to collaborate effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Boost Your Productivity?</h2>
          <p className="mb-8 text-xl text-slate-600 dark:text-slate-300">
            Join thousands of students who are already improving their study habits.
          </p>
          <div className="flex justify-center">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Get Started Now</CardTitle>
                <CardDescription>Enter your user number to begin studying</CardDescription>
              </CardHeader>
              <CardContent>
                <UserNumberForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-700 dark:bg-slate-900">
        <div className="container mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
          <p>© 2024 StudySync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
