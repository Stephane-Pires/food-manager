import Head from 'next/head'
// import Link from 'next/link'
// import { InferGetStaticPropsType } from 'next'
import Layout, { SITE_TITLE } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
    return {
        props: {},
    }
}

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{SITE_TITLE}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                    .)
                </p>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
            </section>
        </Layout>
    )
}
