// scripts/load-jobs.js
import fs from 'fs'
import path from 'path'
import csv from 'csv-parser'

let allJobs = []

async function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = []
    
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(`✅ Loaded ${results.length} jobs from ${path.basename(filePath)}`)
        resolve(results)
      })
      .on('error', reject)
  })
}

async function loadAllCSVFiles(folderPath = './data') {
  try {
    const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.csv'))
    
    console.log(`📁 Found ${files.length} CSV files`)
    
    for (const file of files) {
      const filePath = path.join(folderPath, file)
      const jobs = await readCSV(filePath)
      
      jobs.forEach(job => {
        job.sourceFile = file
        allJobs.push(job)
      })
    }
    
    console.log(`🎉 Total: ${allJobs.length} jobs loaded`)
    fs.writeFileSync('./data/jobs.json', JSON.stringify(allJobs, null, 2))
    console.log('💾 Saved to src/data/jobs.json')
    
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

loadAllCSVFiles()
