import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文章",
    icon: "mdi:book",
    link: "posts/",
  },
  "intro",
]);
