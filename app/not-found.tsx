import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 bg-[color:var(--color-bg)]">
      <h1 className="text-6xl font-bold text-[color:var(--color-accent-alt)]">404</h1>
      <p className="text-xl mt-4 text-[color:var(--color-muted)]">Oops - this page doesn&apos;t exist.</p>
      <Link href="/" className="mt-6 btn-primary rounded-full">
        Back to Portfolio
      </Link>
    </div>
  )
}
