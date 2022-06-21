import Link from "next/link";
import styled from "styled-components"

const GridStyle = styled.div`
.cart{
  list-style-type: none;
  margin: 10px;
  padding: 0;
    .parentimg{
      width: 300px;
      height: 300px;
      overflow: hidden;
      img{
        transition: all .9s;
        cursor: pointer;
        &:hover{
          transform: scale(1.1);
          transition: all .9s;
          background-color: red;
        }
      }
    }
}
`
export const Card = ({ id, name, image }) => {
    return (
        <Link href={`/rickMorty/${id}`}>
            <GridStyle>
                <div className="cart">
                    <div className="parentimg">
                        <img src={image} alt={`${name} image`} />
                    </div>
                    <div >
                        <h3 >{name}</h3>
                    </div>
                </div>
            </GridStyle>
        </Link>
    );
};