import Link from 'next/link'

export default function SecondPost() {
    return (
        <>
            <h1>Second Post</h1>
            <h2>
                <Link href="/posts/first-post">
                    <a>Back to the future</a>
                </Link>
            </h2>
        </>
    )
}