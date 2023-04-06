import { defineConfig } from "umi";

const shared = {
  react: {
    singleton: true,
    eager: true,
  },
  "react-dom": {
    singleton: true,
    eager: true,
  },
};

const moduleFederationName = 'remoteCounter';

export default defineConfig({
  plugins: [
    "@umijs/plugins/dist/qiankun",
    "@umijs/plugins/dist/dva",
    "@umijs/plugins/dist/mf",
  ],
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
  ],
  npmClient: "pnpm",
  qiankun: {
    master: {},
  },
  dva: {},
  mfsu: false,
  mf: {
    name: moduleFederationName,
    shared,
    library: { type: 'window', name: moduleFederationName },
  },
});
