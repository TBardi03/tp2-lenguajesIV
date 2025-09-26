import { useState } from "react";

const initialValues = { nombre: "", email: "", mensaje: "" };

export default function Contacto() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // "ok" | "error" | null

  const validate = () => {
    const e = {};
    if (!values.nombre.trim()) e.nombre = "El nombre es obligatorio.";
    if (!values.email.trim()) e.email = "El correo es obligatorio.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "El correo no tiene un formato válido.";
    if (!values.mensaje.trim()) e.mensaje = "El mensaje es obligatorio.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();
    if (!validate()) return;

    try {
      setSending(true);
      // Simulación de envío (sin EmailJS aún)
      await new Promise((res) => setTimeout(res, 800));
      setStatus("ok");
      setValues(initialValues);
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section>
      <h1>Contacto</h1>
      <p>Dejanos tu consulta y te respondemos por correo.</p>

      <form className="card" onSubmit={onSubmit} noValidate>
        <div className="field">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            value={values.nombre}
            onChange={onChange}
            aria-invalid={!!errors.nombre}
            aria-describedby={errors.nombre ? "err-nombre" : undefined}
          />
          {errors.nombre && (
            <small id="err-nombre" className="error">
              {errors.nombre}
            </small>
          )}
        </div>

        <div className="field">
          <label htmlFor="email">Dirección de correo</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            value={values.email}
            onChange={onChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
          />
          {errors.email && (
            <small id="err-email" className="error">
              {errors.email}
            </small>
          )}
        </div>

        <div className="field">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            placeholder="Escribí tu mensaje…"
            value={values.mensaje}
            onChange={onChange}
            aria-invalid={!!errors.mensaje}
            aria-describedby={errors.mensaje ? "err-mensaje" : undefined}
          />
          {errors.mensaje && (
            <small id="err-mensaje" className="error">
              {errors.mensaje}
            </small>
          )}
        </div>

        <button type="submit" disabled={sending}>
          {sending ? "Enviando…" : "Enviar"}
        </button>
      </form>

      {status === "ok" && (
        <div role="status" className="toast success">
          ✅ ¡Mensaje enviado! (simulado). En el próximo paso lo mandamos por EmailJS.
        </div>
      )}
      {status === "error" && (
        <div role="alert" className="toast error">
          ❌ Ocurrió un error al enviar.
        </div>
      )}
    </section>
  );
}
