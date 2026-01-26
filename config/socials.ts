import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
  rating?: string | number;
  rank?: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Github",
    icon: Icons.gitHub,
    link: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com",
  },
  {
    name: "LinkedIn",
    username: process.env.NEXT_PUBLIC_LINKEDIN_USERNAME || "LinkedIn",
    icon: Icons.linkedin,
    link: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com",
  },
  {
    name: "LeetCode",
    username: process.env.NEXT_PUBLIC_LEETCODE_USERNAME || "LeetCode",
    icon: Icons.leetcode,
    link: process.env.NEXT_PUBLIC_LEETCODE_URL || "https://leetcode.com",
    rating: process.env.NEXT_PUBLIC_LEETCODE_RATING,
    rank: process.env.NEXT_PUBLIC_LEETCODE_RANK,
  },
  {
    name: "Codeforces",
    username: process.env.NEXT_PUBLIC_CODEFORCES_USERNAME || "Codeforces",
    icon: Icons.codeforces,
    link: process.env.NEXT_PUBLIC_CODEFORCES_URL || "https://codeforces.com",
    rating: process.env.NEXT_PUBLIC_CODEFORCES_RATING,
    rank: process.env.NEXT_PUBLIC_CODEFORCES_RANK,
  },
  {
    name: "CodeChef",
    username: process.env.NEXT_PUBLIC_CODECHEF_USERNAME || "CodeChef",
    icon: Icons.codechef,
    link: process.env.NEXT_PUBLIC_CODECHEF_URL || "https://codechef.com",
    rating: process.env.NEXT_PUBLIC_CODECHEF_RATING,
    rank: process.env.NEXT_PUBLIC_CODECHEF_RANK,
  },
  {
    name: "Gmail",
    username: process.env.NEXT_PUBLIC_GMAIL_USERNAME || "Gmail",
    icon: Icons.gmail,
    link: process.env.NEXT_PUBLIC_GMAIL_URL || "mailto:",
  },
  {
    name: "Phone",
    username: process.env.NEXT_PUBLIC_PHONE_USERNAME || "Phone",
    icon: Icons.contact,
    link: process.env.NEXT_PUBLIC_PHONE_URL || "tel:",
  },
];
