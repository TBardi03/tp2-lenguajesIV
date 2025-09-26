import emailjs from "@emailjs/browser";

export async function sendContact({ nombre, email, mensaje }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Faltan variables de entorno de EmailJS (.env).");
  }

  const templateParams = {
    title: "Contacto desde el TP3",   // 👈 NUEVO
    from_name: nombre,
    reply_to: email,
    message: mensaje,
  };

  return emailjs.send(serviceId, templateId, templateParams, { publicKey });
}
