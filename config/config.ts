import { defineConfig } from "umi";

export default defineConfig({
  plugins: ["@umijs/plugins/dist/qiankun"],
  routes: [
    {
      path: "/",
      component: "@/pages/index",
      routes: [
        {
          path: "/slave2/*",
          component: "@/components/Slave2/index",
        },
        {
          path: "/slave3/*",
          component: "@/components/Slave3/index",
        },
      ],
    },
    // {
    //   path: "/slave2/*",
    //   component: "@/components/Slave2/index",
    // },
    // {
    //   path: "/slave3/*",
    //   component: "@/components/Slave3/index",
    // },
  ],
  npmClient: "pnpm",
  qiankun: {
    master: {},
  },
});
