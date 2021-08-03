import Link from 'next/link'
import Layout from '../../components/layout'

export default function SecondPost() {
    return (
        <Layout>
            <h1>Second Post</h1>
            <h2>
                <Link href="/posts/first-post">
                    <a>Back to the future</a>
                </Link>
            </h2>
        </Layout>

    )
}