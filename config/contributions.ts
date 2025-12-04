export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "GirlScript Summer of Code 2025",
    contibutionDescription:
      "Enhanced open-source MERN projects by adding new modules, fixing 15+ bugs, and improving API performance.",
    repoOwner: "GSSoC",
    link: "https://gssoc.girlscript.tech/",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
