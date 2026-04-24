// Centralized contact info — easy to update later.
export const WHATSAPP_NUMBER = "5518000000000"; // TODO: substituir pelo número real
export const WHATSAPP_DEFAULT_MSG = "Olá, vim pelo site da HELPSAM e gostaria de solicitar um atendimento.";
export const EMAIL = "helpsam.sac@gmail.com";
export const ANYDESK_URL = "https://anydesk.com/pt/downloads/thank-you?dv=win_exe";

export const whatsappLink = (msg: string = WHATSAPP_DEFAULT_MSG) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
