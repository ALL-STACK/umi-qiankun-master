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
  "wangeditor": {
    singleton: true,
    eager: true,
  }
};

const moduleFederationName = 'remoteCounter';

export default defineConfig({
  plugins: [
    "@umijs/plugins/dist/qiankun",
    "@umijs/plugins/dist/dva",
    "@umijs/plugins/dist/mf",
    // "@umijs/plugins/dist/mfsu",
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
  mfsu: {
    strategy: 'eager',
  },
  mf: {
    name: moduleFederationName,
    shared,
    library: { type: 'window', name: moduleFederationName },
  },
  publicPath: 'http://10.20.14.164:8000/',
});
