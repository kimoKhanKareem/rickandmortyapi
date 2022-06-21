import React from 'react'
import fetch from "isomorphic-fetch"
import { useRouter } from "next/router";

// export const getStaticPaths = async()=>{
//   const res = await fetch("https://rickandmortyapi.com/api/character");
//   const data = await res.json();
//   const paths = data?.results?.map(({id})=>({
//   params:{id}
//   }));
//   return{paths, fallback: false};
// }

// export const  getStaticProps = async({params}) =>{
//   const {id} = params;
//   const res = await fetch (`https://rickandmortyapi.com/api/character/${id}`);
//   const data = await res.json();
//   if(!data) return { notFound: true };
// }

const characterPages = ({results}) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div>
        <h1 >Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <img src={results.image} alt="..." />
      <p>
      </p>
    </>
  )
}

export default characterPages