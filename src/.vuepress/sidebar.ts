import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "mdi:book",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    },
    "intro",
  ],
});
