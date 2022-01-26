import Head from "next/head";
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export default function Users(){
    const router = useRouter();
    const { id } = router.query;
    return(
        <div className={styles.container}>
            <Head>
                <title>Users detail page</title>
            </Head>

           <h1>User ID: {id}</h1>
        </div>    
    )

}
// [userID].js
// const { userID } = router.query

// export async function getStaticPaths(){

// }

// export async function getStaticProps({ params }){
//     console.log(params)
// }