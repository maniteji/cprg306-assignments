import Link from 'next/link'
import StudentInfo from './studentInfo'

export default function week2() {
  return (
    <main>
      <h1 style={{ fontSize:45}}> CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <h3><Link href="./week2">Week2</Link></h3>
      <h3><Link href="./week3">Week3</Link></h3>
    </main>
   
  )
}