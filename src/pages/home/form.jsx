import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  
  useGetUserByIdQuery,
 
} from "../../services/userApi";
import { Outlet, useOutletContext } from "react-router-dom";

export function Form() {
  const [form, setForm] = useState({
    usuario: "",
    linkTwitter: "",
    linkImagen: "",
    nombre_oc: "",
  });
  const { participante } = useOutletContext();
  const [createUser, response] = useCreateUserMutation();
  const [updateUser, responseUpdate] = useUpdateUserMutation();

  const navigate = useNavigate();
  const { id_usuario } = useParams();
  const id_usuario2 = parseInt(id_usuario);

  const { data, error, isLoading } = useGetUserByIdQuery(id_usuario2);

  useEffect(() => {
    if (id_usuario2 && !isLoading && !error && data) {
      setForm(data);
    }
    console.log(data);
  }, [id_usuario, isLoading, error, data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    console.log(id_usuario);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id_usuario2) {
      console.log(id_usuario2);
      const { datos } = await updateUser({ id: id_usuario2, body: form });
      console.log(datos);
      console.log("edit");
      navigate("/Admin-testing");
      window.location.reload();
      return;
    } else {
      console.log("create");
      const { data } = await createUser(form);
      console.log(data);
      navigate("/Admin-testing");
      window.location.reload();
      return;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oh no, there was an error</div>;
  }

  return (
    <Container>
      <div>{id_usuario}</div>
      <div className="form-container">
        <h1>{id_usuario ? "Editar usuario" : "Crear usuario"}</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Usuario:</label>
            <StyledInput
              type="text"
              name="usuario"
              value={form.usuario}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label>Nombre OC:</label>
            <StyledInput
              type="text"
              name="nombre_oc"
              value={form.nombre_oc}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label>Link Inscripcion:</label>
            <StyledInput
              type="text"
              name="linkTwitter"
              value={form.linkTwitter}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label>Link Imagen:</label>
            <StyledInput
              type="text"
              name="linkImagen"
              value={form.linkImagen}
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <button type="button" className="button cancel">
              <Link
                to="/Admin-testing"
                style={{ textDecoration: "none", color: "#f5f5f5" }}
              >
                Cancelar
              </Link>
            </button>
            <button type="submit" className="button aceppt">
              Aceptar
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9998;

  .form-container {
    border-radius: 15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(23, 30, 39);
    padding: 20px;
    z-index: 9999;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

    .button-container {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    .button {
      padding: 10px 20px;
      margin: 0 10px;
      background-color: #333;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .cancel {
      background-color: #333;
      :hover {
        background-color: #333;
      }
    }

    .aceppt {
      background-color: #684aff;
      :hover {
        background-color: #684aff;
      }
    }

    .button:hover {
      background-color: #555;
    }
  }
`;

const StyledInput = styled.input`
  padding: 8px;
  margin-top: 4px;
  border: none;
  background-color: #222a35;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 7px;
  color: #f5f5f5;

  &:focus {
    outline: none;
    border: 0.5px solid #684aff;
  }

  Link {
    text-decoration: none;
  }
`;
