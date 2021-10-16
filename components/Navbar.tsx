import Link from 'next/link'

const Navbar = () => (
    <nav>
        <Link href="/">
            <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
            <a>About</a>
        </Link>
    </nav>
)

export default Navbar