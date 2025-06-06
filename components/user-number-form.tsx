"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useFirebase } from "@/lib/firebase"

export default function UserNumberForm() {
  const [userNumber, setUserNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { setUserByNumber } = useFirebase()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const number = Number.parseInt(userNumber)
    if (!number || number < 1 || number > 9999) {
      alert("Please enter a valid number between 1 and 9999")
      return
    }

    setIsLoading(true)

    try {
      await setUserByNumber(number)
      router.push("/rooms")
    } catch (error) {
      console.error("Error setting user:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="number"
        placeholder="Enter your number (1-9999)"
        value={userNumber}
        onChange={(e) => setUserNumber(e.target.value)}
        min="1"
        max="9999"
        required
      />
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Entering..." : "Enter Study Platform"}
      </Button>
    </form>
  )
}
