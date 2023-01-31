import React, { useState } from "react";
import { useEffect } from "react";

const FormCompra = ({ setFormData }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorTel, setErrorTel] = useState(false);

  const validateForm = (nombre, email, tel) => {
    if (nombre && email && tel) {
      const formData = {
        nombre,
        email,
        tel,
      };
      setFormData(formData);
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
      !nombre ? setErrorNombre(true) : setErrorNombre(false);
      !email ? setErrorEmail(true) : setErrorEmail(false);
      !tel ? setErrorTel(true) : setErrorTel(false);
    }
  };

  const onConfirm = () => {
    const inputNombre = document.getElementById("exampleInputText1").value;
    const inputEmail = document.getElementById("exampleInputEmail1").value;
    const inputTelefono = document.getElementById("exampleInputText2").value;
    validateForm(inputNombre, inputEmail, inputTelefono);
  };

  useEffect(() => {
    isFormValid && document.getElementById("dataModalBtn").click();
  }, [isFormValid]);

  const renderForm = () => {
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputText1" className="form-label">
            Nombre
          </label>
          <input type="text" className="form-control" id="exampleInputText1" />
          {errorNombre && (
            <div
              id="nombreHelp"
              className="form-text"
              style={{ color: "red", paddingLeft: "5px" }}
            >
              este campo es obligatorio
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errorEmail && (
            <div
              id="emailHelp"
              className="form-text"
              style={{ color: "red", paddingLeft: "5px" }}
            >
              este campo es obligatorio
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputText2" className="form-label">
            Telefono
          </label>
          <input type="text" className="form-control" id="exampleInputText2" />
          {errorTel && (
            <div
              id="telHelp"
              className="form-text"
              style={{ color: "red", paddingLeft: "5px" }}
            >
              este campo es obligatorio
            </div>
          )}
        </div>
      </form>
    );
  };

  const renderBtnConfirm = () => {
    let res = (
      <button
        id="dataModalBtn"
        type="button"
        className="btn btn-primary"
        onClick={() => onConfirm()}
      >
        continuar
      </button>
    );
    if (isFormValid) {
      res = (
        <button
          id="dataModalBtn"
          type="button"
          className="btn btn-primary"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={() => onConfirm()}
        >
          continuar
        </button>
      );
    }
    return res;
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Completa tus datos
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{renderForm()}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                cancelar
              </button>
              {renderBtnConfirm()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCompra;
