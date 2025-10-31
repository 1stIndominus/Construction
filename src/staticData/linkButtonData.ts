export type LinkButtonData = {
  to: string;
  label: string;
  offset: number;
};

export const HOME_SCREEN_LINK_BUTTON_DATA: LinkButtonData[] = [
  { to: "Home", label: "Home", offset: -150 },
  { to: "About", label: "About us", offset: -110 },
  { to: "swiper", label: "Services", offset: -100 },
  { to: "FAQ", label: "FAQs", offset: -360 },
  { to: "Contacts", label: "Contacts", offset: 50 },
];

export const NEW_BUILDING_SCREEN_LINK_BUTTON_DATA: LinkButtonData[] = [
  { to: "Home", label: "Home", offset: -150 },
  { to: "Plans", label: "We-offer", offset: -110 },
  { to: "contactUs", label: "Pre-order", offset: -200 },
  { to: "FAQ", label: "FAQs", offset: -320 },
  { to: "Contacts", label: "Contacts", offset: 50 },
];
