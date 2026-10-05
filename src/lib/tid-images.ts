// Every entry belongs to one public placement. Do not use a photo in two slots.
export const tidImages = {
  homeHero: "/tid/communication.webp",
  homeAbout: "/tid/photos/home-about.webp",
  aboutHero: "/tid/photos/about-hero.webp",
  aboutStory: "/tid/photos/about-story.webp",
  servicesHero: "/tid/photos/services-hero.webp",
  signHero: "/tid/photos/sign-language-hero.webp",
  signDetail: "/tid/photos/sign-language-detail.webp",
  swornHero: "/tid/photos/sworn-hero.webp",
  swornDetail: "/tid/photos/sworn-detail.webp",
  notaryHero: "/tid/photos/notary-hero.webp",
  notaryDetail: "/tid/photos/notary-detail.webp",
  contactHero: "/tid/photos/contact-hero.webp",
  newsHero: "/tid/photos/news-hero.webp",
  blogHero: "/tid/photos/blog-hero.webp",
  socialPreview: "/tid/photos/social-preview.webp",
  adminLogin: "/tid/photos/admin-login.webp",
} as const;
export const homeEditorialImages = {
  news: [1, 2, 3].map((slot) => `/tid/photos/home-news-${slot}.webp`),
  blog: [1, 2, 3].map((slot) => `/tid/photos/home-blog-${slot}.webp`),
};
export const reservedImages: readonly string[] = [
  ...Object.values(tidImages),
  ...homeEditorialImages.news,
  ...homeEditorialImages.blog,
];
