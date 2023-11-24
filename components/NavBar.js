import Link from 'next/link';

export default function About() {
    return (
        <nav>
            <Link href="/">home</Link>
            <Link href="/about">about</Link>
        </nav>
    );
}
