import Head from "next/head"
import DeptInfoCards from "../components/deptInfoCards"
import ElectedOfficials from "../components/officialsInfo"
export default function Information() {
    return (
        <div className="container">
            <Head>
                <title>the People's Purse</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </Head>
            <DeptInfoCards />
            <ElectedOfficials />
        </div>
    )
}

