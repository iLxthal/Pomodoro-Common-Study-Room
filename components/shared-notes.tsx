"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Textarea } from "@/components/ui/textarea"

interface SharedNotesProps {
  roomId: string
}

export function SharedNotes({ roomId }: SharedNotesProps) {
  const [notes, setNotes] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  // In a real implementation, we would sync with Firebase
  useEffect(() => {
    // Simulate fetching notes from Firebase
    console.log(`Fetching notes for room ${roomId}`)

    // Mock data
    const mockNotes = `# Study Session Notes

## Key Concepts
- Data structures and algorithms
- Time complexity analysis
- Space complexity considerations

## Questions to Review
1. How does QuickSort work?
2. What's the difference between BFS and DFS?
3. When would you use a hash table vs. a binary search tree?

## Resources
- [Algorithm Visualization](https://visualgo.net/)
- Chapter 4-6 in the textbook
- Practice problems 3.1-3.15`

    setTimeout(() => {
      setNotes(mockNotes)
    }, 500)

    // In a real implementation, we would use Firebase listeners
    // return () => unsubscribe()
  }, [roomId])

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value)

    // In a real implementation, we would debounce this and update Firebase
    // For now, we'll simulate saving
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
    }, 500)
  }

  return (
    <div className="flex h-full flex-col p-4">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-medium">Collaborative Notes</h3>
        <div className="text-sm text-slate-500">{isSaving ? "Saving..." : "All changes saved"}</div>
      </div>
      <Textarea
        value={notes}
        onChange={handleNotesChange}
        placeholder="Start taking notes collaboratively..."
        className="flex-1 resize-none"
      />
    </div>
  )
}
