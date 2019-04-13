## qusly-core

A wrapper around [ssh2](https://github.com/mscdex/ssh2) and [jsftp](https://github.com/xnerhu/jsftp) for building **FTP/SFTP** clients with clear and consistent api. It's used in [Qusly](https://www.github.com/xnerhu/qusly).

### Installing

```bash
$ npm install qusly-core
```

### Quick start

An example of listing all files in given directory.

```js
const { Client } = require('qusly-core');

const client = new Client();

client.connect({
  protocol: 'ftp', // default ftp
  port: 21, // default 21
  host: 'www.example.com',
  username: 'root', // default anonymous
  password: 'password', // default @anonymous
});

client.ls('./').then(files => {
  console.log(files);
});
```

The output would be something like this:

```
music
images
config.ts
yarn.lock
script.sh
```

### API

Coming soon...

### Tests

Coming soon...

### Related

- [Qusly](https://www.github.com/xnerhu/qusly) - A FTP/SFTP client with Material Design UI.