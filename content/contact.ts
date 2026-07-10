/**
 * Canal usado pelo CTA "Agendar conversa" em todo o site.
 * Troque para "whatsapp" | "email" | "link" e ajuste os dados abaixo
 * para redirecionar o CTA sem precisar mexer nos componentes.
 */
type ContactChannel = "whatsapp" | "email" | "link";

const CONTACT_CHANNEL: ContactChannel = "whatsapp";

const WHATSAPP_NUMBER = "5511999999999"; // DDI + DDD + número, só dígitos
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da MarIA Consultoria e gostaria de agendar uma conversa.";
const CONTACT_EMAIL = "contato@mariaconsultoria.com.br";
const EXTERNAL_SCHEDULING_LINK = "https://calendly.com/maria-consultoria";

export function getScheduleHref(): string {
  switch (CONTACT_CHANNEL) {
    case "whatsapp":
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    case "link":
      return EXTERNAL_SCHEDULING_LINK;
    case "email":
      return `mailto:${CONTACT_EMAIL}`;
  }
}
