export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  handle: string;
  icon: string;
  ariaLabel: string;
  relMe?: boolean;
  primary?: boolean;
}

export const socialsData: {
  email: string;
  phone: string;
  whatsappUrl: string;
  phoneTel: string;
  ventures: {
    neexg: { name: string; url: string; role: string };
    oregent: { name: string; url: string; role: string };
  };
  location: string;
  links: SocialLink[];
} = {
  email: "abuhosainmin@gmail.com",
  phone: "01319539510",
  whatsappUrl: "https://wa.me/8801319539510",
  phoneTel: "tel:01319539510",
  ventures: {
    neexg: {
      name: "NeexG",
      url: "https://neexg.com",
      role: "Founder & CEO",
    },
    oregent: {
      name: "Oregent",
      url: "https://oregent.com",
      role: "Co-Founder",
    },
  },
  location: "Bangladesh (UTC+06:00)",
  links: [
    {
      platform: "Email",
      label: "Email",
      url: "mailto:abuhosainmin@gmail.com",
      handle: "abuhosainmin@gmail.com",
      icon: "Mail",
      ariaLabel: "Send an email to Abu Hosain at abuhosainmin@gmail.com",
      primary: true,
    },
    {
      platform: "WhatsApp",
      label: "WhatsApp",
      url: "https://wa.me/8801319539510",
      handle: "01319539510",
      icon: "MessageCircle",
      ariaLabel: "Message Abu Hosain on WhatsApp at 01319539510",
      primary: true,
    },
    {
      platform: "Phone",
      label: "Call",
      url: "tel:01319539510",
      handle: "01319539510",
      icon: "Phone",
      ariaLabel: "Call Abu Hosain directly at 01319539510",
      primary: false,
    },
    {
      platform: "Facebook",
      label: "Facebook",
      url: "https://www.facebook.com/abuhosain25",
      handle: "abuhosain25",
      icon: "Facebook",
      ariaLabel: "Visit Abu Hosain's Facebook profile",
      relMe: true,
      primary: false,
    },
    {
      platform: "Instagram",
      label: "Instagram",
      url: "https://instagram.com/abuhosain25",
      handle: "@abuhosain25",
      icon: "Instagram",
      ariaLabel: "Visit Abu Hosain's Instagram profile",
      relMe: true,
      primary: false,
    },
    {
      platform: "YouTube",
      label: "YouTube",
      url: "https://youtube.com/@hosainfo",
      handle: "@hosainfo",
      icon: "Youtube",
      ariaLabel: "Visit Abu Hosain's YouTube channel @hosainfo",
      relMe: true,
      primary: false,
    },
    {
      platform: "NeexG",
      label: "NeexG",
      url: "https://neexg.com",
      handle: "neexg.com",
      icon: "Globe",
      ariaLabel: "Visit NeexG agency website (Founder & CEO)",
      primary: true,
    },
    {
      platform: "Oregent",
      label: "Oregent",
      url: "https://oregent.com",
      handle: "oregent.com",
      icon: "ShoppingBag",
      ariaLabel: "Visit Oregent fashion & sneaker brand (Co-Founder)",
      primary: true,
    },
  ],
};
