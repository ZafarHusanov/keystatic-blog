import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: "zafarhusanov/keystatic-blog",   // ❗ o'zingizning repoingizni yozing
  },

  collections: {
    posts: collection({
      label: "Blog Postlar",
      path: "src/content/posts/*",
      slugField: "title",

      format: { contentField: "content" },

      schema: {
        title: fields.text({ label: "Sarlavha" }),
        date: fields.date({ label: "Sana" }),
        cover: fields.image({
          label: "Cover Image",
          directory: "public/uploads/posts",
          publicPath: "/uploads/posts",
        }),
        content: fields.markdoc({
          label: "Kontent",
        }),
      },
    }),
  },

  singletons: {
    homepage: singleton({
      label: "Main Page",
      path: "src/content/homepage/",
      schema: {
        title: fields.text({ label: "Main title" }),
        subtitle: fields.text({ label: "Subtitle" }),
        hero: fields.image({
          label: "Hero Image",
          directory: "public/uploads/hero",
          publicPath: "/uploads/hero",
        }),
      },
    }),

    about: singleton({
      label: "About Page",
      path: "src/content/about/",
      schema: {
        title: fields.text({ label: "Title" }),
        body: fields.markdoc({ label: "Matn" }),
        photo: fields.image({
          label: "Rasm",
          directory: "public/uploads/about",
          publicPath: "/uploads/about",
        }),
      },
    }),
  },
});
