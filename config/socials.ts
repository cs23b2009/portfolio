import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@cs23b2009",
    icon: Icons.gitHub,
    link: "https://github.com/cs23b2009",
  },
  {
    name: "LinkedIn",
    username: "Dasapathi Indra Kumar",
    icon: Icons.linkedin,
    link: "https://linkedin.com/in/indra-kumar-hi369",
  },
  {
    name: "LeetCode",
    username: "@indrakumar45919",
    icon: Icons.leetcode,
    link: "https://leetcode.com/u/indrakumar45919",
  },
  {
    name: "Gmail",
    username: "indrakumarai369",
    icon: Icons.gmail,
    link: "mailto:indrakumarai369@gmail.com",
  },
  {
    name: "Phone",
    username: "+91-8328516654",
    icon: Icons.contact,
    link: "tel:+918328516654",
  },
];
