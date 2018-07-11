function getAddon() {
    var earImgProcessing;

    if (process.env.DEBUG) {
        //earImgProcessing = require('node-loader!../../../build/Debug/earImgProcessing.node');
    }
    // wrap it in else tag after you make addon build in release mode
    earImgProcessing = require('node-loader!../../../build/Release/earImgProcessing.node');

    return earImgProcessing;
}

export default getAddon();
