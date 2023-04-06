const currentLocation = window.location.origin;

export const qiankun = {
  apps: [
    {
      name: "slave2",
      entry:
        currentLocation.indexOf("localhost") > -1
          ? "//localhost:7002"
          : "/web/slave2/",
    },
    // {
    //   name: 'slave3',
    //   entry: '//localhost:7003',
    // },
    // {
    //   name: 'vue',
    //   entry: 'http://localhost:3333/'
    // }
    // {
    //   name: 'baidu',
    //   entry: 'http://www.baidu.com/'
    // }
  ],
};
