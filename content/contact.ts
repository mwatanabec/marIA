/**
 * Canal usado pelo CTA "Agendar conversa" em todo o site.
 * Troque para "whatsapp" | "email" | "link" e ajuste os dados abaixo
 * para redirecionar o CTA sem precisar mexer nos componentes.
 */
type ContactChannel = "whatsapp" | "email" | "link";

const CONTACT_CHANNEL: ContactChannel = "whatsapp";

const WHATSAPP_NUMBER = "5516981437411"; // DDI + DDD + número, só dígitos
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da MarIA Consultoria e gostaria de agendar uma conversa.";
const CONTACT_EMAIL = "contato@mariaconsultoria.com.br";
const EXTERNAL_SCHEDULING_LINK = "https://calendly.com/maria-consultoria";

/**
 * Retorna o link do CTA de contato. Aceita uma mensagem opcional para
 * pré-preencher o WhatsApp/e-mail de acordo com o serviço de origem — os canais
 * "link" ignoram a mensagem.
 */
export function getScheduleHref(message?: string): string {
  switch (CONTACT_CHANNEL) {
    case "whatsapp":
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message ?? WHATSAPP_MESSAGE,
      )}`;
    case "link":
      return EXTERNAL_SCHEDULING_LINK;
    case "email":
      return message
        ? `mailto:${CONTACT_EMAIL}?body=${encodeURIComponent(message)}`
        : `mailto:${CONTACT_EMAIL}`;
  }
}
