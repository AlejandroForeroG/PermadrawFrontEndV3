import styled from "styled-components";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export function Card({
  participante: { linkImagen, name, linkTwitter, usuario, oc, state, monedas },
}) {
  const estados = ["Vivo", "Eliminado", "Vivo"];
  const navigate = useNavigate();

  return (
    <Container>
      <div className="modo-edicion">
        <div className="img-container">
          <a href={linkTwitter}>
            <img
              src={linkImagen}
              alt={name}
              class={estados[state] == "Eliminado" ? "grayscale" : ""}
            />
          </a>
        </div>
        <div className="overlay-container">
          <div className="text-container">
            <a href={linkTwitter}>{oc}</a>
            <p>{usuario}</p>
            {/* <p className={estados[state] == "Vivo" ? "vivo" : "muerto"}>
              {estados[state]}
            </p> */}
            {estados[state] == "Vivo" ? <p>{monedas} 💲</p> : <p>💀</p>}
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .modo-edicion {
    position: relative; /* Nueva línea: establecer posición relativa */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0b0b0d;
    margin-bottom: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    margin-right: 5px;

    .img-container {
      img {
        width: 210px;
        height: 260px;
        object-fit: cover;
      }
      .grayscale {
        filter: grayscale(100%);
      }
    }

    .overlay-container {
      position: absolute; /* Nueva línea: establecer posición absoluta */
      bottom: 0; /* Nueva línea: alinear en la parte inferior */
      left: 0; /* Nueva línea: alinear a la izquierda */
      width: 100%; /* Nueva línea: ocupar todo el ancho */
      background-color: rgba(11, 11, 13, 0.9); /* Nueva línea: fondo opaco */
      padding: 10px; /* Nueva línea: espacio interno para el texto */
      border-top: 1px solid #8f6b33;
    }

    .text-container {
      text-align: center;
      a {
        color: #8f6b33;
        text-decoration: none;
        font-weight: bold;
        margin-bottom: 5px;
      }

      p {
        color: #fff;
        margin: 0;
        font-size: 12px;
      }
      .vivo {
        color: #8f6b33;
      }
      .muerto {
        color: #e21649;
      }
    }
  }
  @media (max-width: 768px) {
    .modo-edicion {
      .img-container {
        img {
          width: 100px;
          height: 140px;
          object-fit: cover;
        }
      }

      .text-container {
        font-size: 10px;
        a {
          font-size: 12px;
        }
        p {
          font-size: 10px;
        }
      }

      .overlay-container {
        height: 40%;
      }
    }
  }

  @media (min-width: 1500px) {
    .modo-edicion {
      .img-container {
        img {
          width: 250px;
          height: 300px;
        }
      }
    }
  }
`;
