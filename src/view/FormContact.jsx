import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

function FormContact() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const [nombreValido, setNombreValido] = useState(true);
    const [emailValido, setEmailValido] = useState(true);
    const [mensajeValido, setMensajeValido] = useState(true);

    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre.trim() === "") {
            setNombreValido(false);
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setEmailValido(false);
            return;
        }

        if (mensaje.trim() === "") {
            setMensajeValido(false);
            return;
        }

        setNombre("");
        setEmail("");
        setMensaje("");
        setFormularioEnviado(true);
    };

    return (
        <>
            <div className="box-form">
                <h1 className="title-form">Formulario de contacto</h1>
                <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    {formularioEnviado && <Alert variant="success">¡El formulario se envió exitosamente!</Alert>}

                    <Form.Group className="mb-3" controlId="formNombre">
                        <Form.Control
                            type="text"
                            placeholder="Nombre Apellido"
                            value={nombre}
                            onChange={(e) => {
                                setNombre(e.target.value);
                                setNombreValido(true);
                            }}
                            isInvalid={!nombreValido}
                        />
                        <Form.Control.Feedback className="text-warning" type="invalid">
                            Por favor, ingresa tu nombre.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Control
                            type="email"
                            placeholder="nombre@email.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailValido(true);
                            }}
                            isInvalid={!emailValido}
                        />
                        <Form.Control.Feedback className="text-warning" type="invalid">
                            Por favor, ingresa un correo electrónico válido.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMensaje">
                        <Form.Control
                            as="textarea"
                            placeholder="Deja tu mensaje aquí"
                            rows={3}
                            value={mensaje}
                            onChange={(e) => {
                                setMensaje(e.target.value);
                                setMensajeValido(true);
                            }}
                            isInvalid={!mensajeValido}
                        />

                        <Form.Control.Feedback className="text-warning" type="invalid">
                            Por favor, ingresa un mensaje.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <button className="form-btn" type="submit">
                        Enviar
                    </button>
                </Form>
            </div>
        </>
    );
}

export default FormContact;
