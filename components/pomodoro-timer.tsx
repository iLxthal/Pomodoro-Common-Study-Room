"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, RotateCcw, Settings } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function PomodoroTimer() {
  const [mode, setMode] = useState("pomodoro")
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(25 * 60) // 25 minutes in seconds
  const [initialTime, setInitialTime] = useState(25 * 60)

  // In a real implementation, we would sync this state with Firebase

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
      setIsActive(false)
      // Play notification sound or show notification
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, time])

  const toggleTimer = () => {
    setIsActive(!isActive)
    // In a real implementation, we would update Firebase
  }

  const resetTimer = () => {
    setIsActive(false)
    setTime(initialTime)
    // In a real implementation, we would update Firebase
  }

  const changeMode = (newMode: string) => {
    setIsActive(false)

    if (newMode === "pomodoro") {
      setTime(25 * 60)
      setInitialTime(25 * 60)
    } else if (newMode === "shortBreak") {
      setTime(5 * 60)
      setInitialTime(5 * 60)
    } else if (newMode === "longBreak") {
      setTime(15 * 60)
      setInitialTime(15 * 60)
    }

    setMode(newMode)
    // In a real implementation, we would update Firebase
  }

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const progress = (time / initialTime) * 100

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Pomodoro Timer</CardTitle>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
        <CardDescription>Focus with your team using the Pomodoro technique</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs value={mode} onValueChange={changeMode} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pomodoro">Pomodoro</TabsTrigger>
            <TabsTrigger value="shortBreak">Short Break</TabsTrigger>
            <TabsTrigger value="longBreak">Long Break</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-6xl font-bold">{formatTime(time)}</div>
          <Progress value={progress} className="h-2 w-full" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-4">
        <Button onClick={toggleTimer} className="w-32">
          {isActive ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
          {isActive ? "Pause" : "Start"}
        </Button>
        <Button variant="outline" onClick={resetTimer}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </CardFooter>
    </Card>
  )
}
