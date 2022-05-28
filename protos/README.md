## thrift

install thrift binary on macOS with [brew](https://formulae.brew.sh/formula/thrift)

to generate code

```sh
cd ./protos
thrift -version  # Thrift version 0.13.0
thrift -r --out ../__gen_code --gen js:node unpkg.thrift
```

[Thrift Missing Guide](https://diwakergupta.github.io/thrift-missing-guide)

[more node.js examples from official](https://github.com/apache/thrift/tree/master/lib/nodejs)

## grpc

This is the static code generation variant of the Node examples. Code in these examples is pre-generated using protoc and the Node gRPC protoc plugin, and the generated code can be found in various `*_pb.js` files. The command line sequence for generating those files is as follows (assuming that `protoc` and `grpc_node_plugin` are present, and starting in the directory which contains this README.md file):

```sh
npm install -g grpc-tools
cd ./protos
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../__gen_code --grpc_out=grpc_js:../__gen_code helloworld.proto
```

[more node.js examples from official](https://github.com/grpc/grpc/tree/master/examples/node)
