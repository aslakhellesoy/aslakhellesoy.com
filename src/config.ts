export const SITE = {
  website: "https://aslakhellesoy.com",
  author: "Aslak Hellesøy",
  profile: "https://aslakhellesoy.com/",
  desc: "Oselvar is a software development company.",
  title: "Aslak Hellesøy",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showBlog: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/aslakhellesoy/aslakhellesoy.com/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/London", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
