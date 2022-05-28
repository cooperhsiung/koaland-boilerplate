global.env = process.env.NODE_ENV || 'dev';
const config = {
  db: {
    prod: 'prod',
    test: 'test',
    dev: 'dev',
  },
  amqp: {
    prod: 'amqp://myuser:mypass@127.0.0.1',
    test: 'amqp://myuser:mypass@127.0.0.1',
    dev: 'amqp://myuser:mypass@127.0.0.1',
  },
  redis: {
    prod: 'redis://:mypass@127.0.0.1:6379/0',
    test: 'redis://:mypass@127.0.0.1:6379/0',
    dev: 'redis://:mypass@127.0.0.1:6379/0',
  },
  log: {
    prod: { host: '127.0.0.1', port: '4000', type: 'my-subtype' },
    test: { host: '127.0.0.1', port: '4000', type: 'my-subtype' },
    dev: { host: '127.0.0.1', port: '4000', type: 'my-subtype' },
  },
  pythonPath: {
    prod: '/usr/bin/python3',
    test: '/usr/bin/python3',
    dev: '/usr/local/bin/python3',
  },
  mongo: {
    prod: 'mongodb://myuser:mypass@127.0.0.1:27017/mydb',
    test: 'mongodb://myuser:mypass@127.0.0.1:27017/mydb',
    dev: 'mongodb://myuser:mypass@127.0.0.1:27017/mydb',
  },
};

module.exports = new Proxy(config, { get: (target, name) => target[name][env] });
