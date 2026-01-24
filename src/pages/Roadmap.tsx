const roadmap = [
  { phase: 'Foundation', tasks: ['Resume', 'LinkedIn', 'Baseline skills'] },
  { phase: 'Skill Building', tasks: ['Course', 'Project', 'Certification'] },
  { phase: 'Active Search', tasks: ['Applications', 'Networking', 'Interviews'] },
]

export default function Roadmap() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="p-8 flex-1">
        <h1 className="text-2xl font-bold mb-4">Career Roadmap</h1>
        {roadmap.map(p => (
          <div key={p.phase} className="card mb-4">
            <h3 className="font-semibold mb-2">{p.phase}</h3>
            <ul className="list-disc ml-5 text-sm">
              {p.tasks.map(t => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  )
}
