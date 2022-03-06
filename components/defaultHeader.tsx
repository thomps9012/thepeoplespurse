import Head from "next/head";

export default function DefaultHeader() {
    return (
        <>
            <Head>
                <title>{"People's Purse"}</title>
                <meta name="description" content="An educational tool designed to educate and empower the next generation of civic leaders" />
                <link rel="icon" href="/favicon.png" />
                <link rel='canonical' href='https://thepeoplespurse.org' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href={"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@900&display=swap"} rel="stylesheet" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
        </>
    )
}