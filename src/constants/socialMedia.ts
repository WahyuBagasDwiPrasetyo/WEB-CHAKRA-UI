import { FaFacebookF, FaInstagram, FaTiktok, FaDiscord, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";
import type { SocialMedia } from "@/types";

export const socialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaFacebookF,
    link: "https://web.facebook.com/profile.php?id=100048861012103",
  },
  {
    SocialMediaIcon: FaInstagram,
    link: "https://www.instagram.com/wsxprsty",
  },
  {
    SocialMediaIcon: FaTiktok,
    link: "https://tiktok.com/@abcdebagassss",
  },
  {
    SocialMediaIcon: FaGithub,
    link: "https://github.com/WahyuBagasDwiPrasetyo",
  },
  {
    SocialMediaIcon: FaDiscord,
    link: "https://discord.com/users/WahyuBagasDwiPrasetyo",
  },
];

export const sharedSocialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaFacebook,
    link: `https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  {
    SocialMediaIcon: FaInstagram,
    link: `https://www.instagram.com/?url=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  {
    SocialMediaIcon: FaWhatsapp,
    link: `https://wa.me/?text=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
];
