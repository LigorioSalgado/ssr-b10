import React, { useEffect } from 'react';
import Head from "next/head";
import axios from "axios";
import styles from '../../styles/Home.module.css'

export default function Users({users}){
    return(
        <div className={styles.container}>
            <Head>
                <title>Users page</title>
            </Head>

           <h1>Page Users!!!</h1>
          <ul>
            {
                users.map(user => (<li key={user.id}>{user.firstName}</li>))
            }    
          </ul>
        </div>    
    )

}
// Error: Error serializing `.users.config.adapter` returned from `getServerSideProps` in "/users".
// Reason: `function` cannot be serialized as JSON. Please only return JSON serializable data types.
// export async function getServerSideProps(){

//     const users = await axios.get('https://dummyapi.io/data/v1/user',
//     {headers:{'app-id': '61f0b536db5459a99936362c'}}
//     )
//     //axios -> response.data aqui viene lo que me regresa la API
//     // users.data.data el ultimo data es desde la API
//     console.log("Aca mis users", users.data.data)
//     return {
//         props: {
//             users: users.data.data
//         }
//     }

// }
export async function getStaticProps(){

    const users = await axios.get('https://dummyapi.io/data/v1/user',
    {headers:{'app-id': '61f0b536db5459a99936362c'}}
    )
    //axios -> response.data aqui viene lo que me regresa la API
    // users.data.data el ultimo data es desde la API
    console.log("Aca mis users", users.data.data)
    return {
        props: {
            users: users.data.data
        }
    }

}