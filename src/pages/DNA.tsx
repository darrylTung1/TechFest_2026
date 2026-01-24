import { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export default function DNA() {
  const [degree, setDegree] = useState('')
  const [skills, setSkills] = useState('')
  const [preferences, setPreferences] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      const user = auth.currentUser
      if (!user) return
      const ref = doc(db, 'profiles', user.uid)
      const snap = await getDoc(ref)
      if (snap.exists()) {
        const data = snap.data() as any
        setDegree(data.degree || '')
        setSkills(data.skills || '')
        setPreferences(data.preferences || '')
      }
    }
    load()
  }, [])

  const save = async () => {
    const user = auth.currentUser
    if (!user) {
      setStatus('Not logged in')
      return
    }
    const ref = doc(db, 'profiles', user.uid)
    await setDoc(ref, { degree, skills, preferences }, { merge: true })
    setStatus('Saved!')
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="p-8 flex-1">
        <h1 className="text-2xl font-bold mb-4">Career DNA Profile</h1>
        <input
          className="border w-full mb-2 p-2 rounded"
          placeholder="Degree"
          value={degree}
          onChange={e => setDegree(e.target.value)}
        />
        <textarea
          className="border w-full mb-2 p-2 rounded"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={e => setSkills(e.target.value)}
        />
        <textarea
          className="border w-full mb-2 p-2 rounded"
          placeholder="Preferences"
          value={preferences}
          onChange={e => setPreferences(e.target.value)}
        />
        <button
          onClick={save}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Profile
        </button>
        {status && <p className="mt-2 text-sm text-gray-600">{status}</p>}
      </main>
    </div>
  )
}
