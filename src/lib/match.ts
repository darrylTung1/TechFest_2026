export function matchScore(userSkills: string[], roleSkills: string[]) {
  const matches = roleSkills.filter(s =>
    userSkills.map(x => x.toLowerCase().trim()).includes(s.toLowerCase().trim())
  )
  return Math.round((matches.length / roleSkills.length) * 100)
}
