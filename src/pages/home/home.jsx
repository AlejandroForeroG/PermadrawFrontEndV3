import styled from "styled-components";
import { useCountUsersQuery, useGetUsersQuery } from "../../services/userApi";
import { useEffect, useState } from "react";
import { Card } from "./card";
import { RingLoader } from "react-spinners";
import { FaPlus } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export function Home() {
  const [participantes, setParticipantes] = useState([]);
  const [participante, setParticipante] = useState(null); // [1
  const [state, setState] = useState(false); // [2
  const [query, setQuery] = useState("");

  const {
    data: countData,
    error: countError,
    isLoading: countLoading,
  } = useCountUsersQuery();

  const {
    data: usersData,
    error: usersError,
    isLoading: usersLoading,
  } = useGetUsersQuery();

  useEffect(() => {
    if (!usersLoading && !usersError) {
      setParticipantes(usersData ?? []);
    }
  }, [usersData, usersError, usersLoading]);
  const containerStyle = {
    position: "relative",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  if (countLoading || usersLoading) {
    return (
      <div style={containerStyle}>
        <h1>La biblioteca de almas</h1>
        <RingLoader loading={true} size={100} color={"#8f6b33"} />
      </div>
    );
  }

  if (countError || usersError) {
    return <div>Oh no, there was an error</div>;
  }

  const search = () => {
      const sorted = [...participantes].sort((a, b) => a.estado - b.estado);
    return sorted.filter((participante) => {
      return (
        participante.usuario.toLowerCase().includes(query.toLowerCase()) ||
        participante.nombre_oc.toLowerCase().includes(query.toLowerCase())
      );
    });
  };
  const handleEdit = (participante) => {
    console.log(participante);
  };

  return (
    <>
      <Container>
        <div className="image-container2">
          <a href="https://twitter.com/PermaDraw">
            <img
              src="https://cdn.discordapp.com/attachments/890377047036284949/1104982492982824990/LogoPerma33-01.png"
              alt="logo"
            />
          </a>
        </div>
        <div>
          <div className="text-container">
            <h1>La biblioteca de almas</h1>
            <h2>Permadraw </h2>
            <h4>Participantes</h4>
            <h5>{`${countData.total}`} </h5>
          </div>
          <div className="Searcher-container">
            <input
              type="text"
              className="Searcher"
              placeholder="Buscar.."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            ></input>
          </div>

          <div className="card-container">
            {search().map((participante, index) => (
              <div key={index}>
                <Card
                participante={participante}
                />
              </div>
            ))}
          </div>
        </div>
        <Outlet context={[participantes, setParticipantes, participante]} />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  .image-container2 {
    text-align: center;
  }
  .image-container2 img {
    max-width: 100px;
    &:hover {
      cursor: pointer;
    }
  }
  .text-container {
    margin-bottom: 20px;
  }
  .add-container {
    button {
      background-color: rgb(23, 30, 39);
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      color: #fff;
      font-size: 20px;
      margin-bottom: 20px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
      :hover {
        background-color: #1e2a38;
        cursor: pointer;
      }
    }
  }
  h1 {
    color: #8f6b33;
  }
  .Searcher-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      width: 50%;
      height: 50px;
      background-color: #121212;
      border: none;
      border-radius: 50px;
      color: #f5f5f5;
      padding: 20px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }
    .Searcher:focus {
      border: 2px solid #684aff;
    }
  }

  .button {
    background-color: rgb(23, 30, 39);
    border: none;
    margin-top: 20px;
    border-radius: 50px;
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    padding: 10px;
  }
  .button:hover {
    background-color: #1e2a38;
    cursor: pointer;
  }
  .card-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    padding: 50px;
  }

  @media (max-width: 768px) {
    .card-container {
      grid-template-columns: repeat(3, 1fr);
      padding: 10px;

    }

    .Searcher-container {
      input {
        width: 70%;
      }
    }
  }

  @media (min-width: 1500px) {
    .card-container {
      padding: 50px 200px;
    }
  }
`;
