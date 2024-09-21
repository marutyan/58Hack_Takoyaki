"use client"

import { useState, useEffect } from 'react'

type AgeCount = {
  [age: string]: number;
}

export default function AgeCounts() {
  const [ageCounts, setAgeCounts] = useState<AgeCount>({})
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/posts/age_counts')
      .then((response) => response.json())
      .then((data) => setAgeCounts(data))
      .catch((error) => {
        console.error('Fetch error:', error)
        setError('Failed to fetch age counts')
      })
  }, [])

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h3>Age Counts</h3>
      <ul>
        {Object.entries(ageCounts).map(([age, count]) => (
          <li key={age}>
            {age}: {count}
          </li>
        ))}
      </ul>
    </div>
  )
}