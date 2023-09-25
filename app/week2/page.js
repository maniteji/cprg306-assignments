import Link from 'next/link'
import StudentInfo from '../studentInfo'


export default function week2() {
  return (
    <main>
      <h1 style={{ fontSize:45}}>My Shopping List</h1>
      <StudentInfo />
      <Link href="../">main</Link>
    </main>
   
  )
}