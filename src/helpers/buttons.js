// Agrega la palabra 'const' antes de la declaración de la función
const handleWhatssApp = () => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${2226622778}&text=${encodeURIComponent(
    "Tengo en mente un proyecto para mi negocio"
  )}`;
  window.open(whatsappUrl, "_blank");
};

export default handleWhatssApp;