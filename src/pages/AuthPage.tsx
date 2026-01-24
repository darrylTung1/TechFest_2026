import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/dashboard')
    } catch (e: any) {
      setError(e.message)
    }
  }

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/dashboard')
    } catch (e: any) {
      setError(e.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="card w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4">CareerOS</h1>
        <input
          className="border w-full mb-2 p-2 rounded"
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          value={email}
        />
        <input
          className="border w-full mb-2 p-2 rounded"
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          value={password}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          onClick={login}
          className="bg-blue-600 text-white w-full mb-2 py-2 rounded"
        >
          Login
        </button>
        <button
          onClick={signup}
          className="border border-blue-600 text-blue-600 w-full py-2 rounded"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
