import styled from "styled-components";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export function Card({
  participante: {
    linkImagen,
    linkTwitter,
    usuario,
    nombre_oc,
    estado,
    monedas,
  },
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
              alt={usuario}
              class={estados[estado] == "Eliminado" ? "grayscale" : ""}
            />
          </a>
        </div>
        <div className="image-overlay2">
          <div>
            <img
              src="https://media.discordapp.net/attachments/880827406716403823/1122681861743837244/LogoPerma3.png?width=475&height=475"
              alt="Imagen dentro del overlay"
              className="overlay-img"
            />
          </div>
        </div>
        <div className="overlay-container">
          <div className="text-container">
            <a href={linkTwitter}>{nombre_oc}</a>
            <p>{usuario}</p>
            {estados[estado] == "Vivo" ? (
              <p>
                {monedas}{" "}
                <img
                  src="https://media.discordapp.net/attachments/878011691235946546/1135732063006375966/GabiMoneda.png?width=475&height=475"
                  alt="Logo"
                  className="logo-img"
                />
              </p>
            ) : (
              <p>💀</p>
            )}
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
    border: 1px solid #8f6b33;

    .img-container {
      img {
        width: 220px;
        height: 280px;
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
      background-color: rgba(239, 239, 247, 0.9); /* Nueva línea: fondo opaco */
      padding: 10px; /* Nueva línea: espacio interno para el texto */
      border-top: 3px solid #8f6b33;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 60%;
      z-index: 1;
    }

    .image-overlay2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 65%;
      z-index: 1;
    }
    .overlay-img {
      position: absolute;
      top: 95%; /* Centrar verticalmente */
      left: 50%; /* Centrar horizontalmente */
      transform: translate(-50%, -50%);
      /* Ajusta el tamaño de la imagen según tus necesidades */
      width: 40px;
      height: 40px;
      border-radius: 50%; /* Para que la imagen sea un círculo */
      border: 3px solid #8f6b33;
      background-color: #ffffff; /* Fondo blanco */
      padding: 5px; /* Pequeño espacio entre el borde y la imagen */
    }

    .logo-img {
      margin-left: 5px;
      margin-top: 5px;
      width: 15px;
      height: 15px;
    }

    .text-container {
      text-align: center;
      margin-top: 10px;
      a {
        color: #8f6b33;
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;

        margin-bottom: 5px;
      }

      p {
        color: #141313;
        margin: 0;
        font-size: 12px;
        font-weight: bold;
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
          width: 150px;
          height: 170px;
          object-fit: cover;
        }
      }

      .text-container {
        font-size: 10px;
        a {
          font-size: 10px;
        }
        p {
          font-size: 6px;
        }
      }

      .logo-img {
        width: 10px;
        height: 10px;
      }
      .overlay-container {
        height: 40%;
      }

      .image-overlay {
        height: 50%;
      }
      .overlay-img {
        width: 30px;

        height: 30px;
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

      .image-overlay {
        height: 60%;
      }

      .text-container {
        font-size: 20px;

        a {
          font-size: 22px;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
`;
