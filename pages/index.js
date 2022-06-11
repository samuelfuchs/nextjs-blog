import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className='title'>
        Read{' '}

      <Link href="/posts/first-post">
        <a>this page!</a>
      </Link>
      </h1>
    </div>
  )
}
