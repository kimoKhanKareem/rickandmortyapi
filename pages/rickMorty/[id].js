import React from "react";
import styled from "styled-components"
import fetch from "isomorphic-fetch";

const DivStyled = styled.section`
margin-top: 5%;
.cart{
  display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;

    .timage{
      width: 300px;
      height: 300px;
      overflow: hidden;
      .imageid{
        transition: all .9s;
        &:hover{
          transform: scale(1.1);
          transition: all .9s;
        }
      }
    }
}
`

const characterPages = ({ results }) => {
  return (
    <DivStyled>
      <div className="cart">
        <div className="timage">
          <img src={results.image} className="imageid" />
        </div>
        <h1>{results.name}</h1>

      </div>
    </DivStyled>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  const paths = data?.results?.map(({ id }) => ({
    params: { id: id.toString() },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();
  if (!data) return { notFound: true };
  return { props: { results: data } };
};


export default characterPages;
