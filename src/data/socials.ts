export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  handle: string;
  icon: string;
  primary?: boolean;
}

export const socialsData: {
  email: string;
  location: string;
  links: SocialLink[];
} = {
  email: "abuhosain.dev@gmail.com",
  location: "Dhaka, Bangladesh (UTC+6)",
  links: [
    {
      platform: "GitHub",
      label: "GitHub",
      url: "https://github.com/abuhosain",
      handle: "@abuhosain",
      icon: "Github",
      primary: true,
    },
    {
      platform: "LinkedIn",
      label: "LinkedIn",
      url: "https://linkedin.com/in/abuhosain",
      handle: "in/abuhosain",
      icon: "Linkedin",
      primary: true,
    },
    {
      platform: "Facebook",
      label: "Facebook",
      url: "https://facebook.com/abuhosain",
      handle: "fb.com/abuhosain",
      icon: "Facebook",
    },
    {
      platform: "Email",
      label: "Direct Email",
      url: "mailto:abuhosain.dev@gmail.com",
      handle: "abuhosain.dev@gmail.com",
      icon: "Mail",
      primary: true,
    },
  ],
};
