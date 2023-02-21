import { loadPackageDefinition, credentials } from "@grpc/grpc-js"
import { loadSync } from "@grpc/proto-loader"


/**
 * gRPC encpoint
 */
const ENDPOINT   = "localhost:5001"

/**
 * Protobuf Path
 */
const PROTO_PATH = "joinContract.proto"


/**
 * Package definition
 */
const packageDefinition = loadSync(
    PROTO_PATH, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    }
);


/**
 * Load gRPC package definition
 */
const joinContractProto = loadPackageDefinition(packageDefinition).joinContract


/**
 * Establish connection with the server
 */
const client = new joinContractProto.UserJoinService(
    ENDPOINT,
    credentials.createInsecure()
)


/**
 * 
 * Sending gRPC request to Grpc service
 * @param Username string
 * 
 */
const sendGrpcRequest = (Username) => {

    var clientResponse = ""

    client.UserJoin({
        github_username: Username

    }, function(errorMessage, response) {

        if(errorMessage != 0) clientResponse += `Uraa.. Permintaan atas username '${
            response.join_response}' telah Dikirim.`

        else clientResponse += "Huhff.. Permintaan gagal dikirim, coba lagi nanti."

    })

    return clientResponse
}


export default sendGrpcRequest