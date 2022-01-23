
var webCallback

/**
 * dart发送的命令
*/
function dartCommand(command, callback) {
    console.log(command);
    webCallback = callback;
}

/**
 * js 发送命令
*/
function sendMessage() {
    webCallback("js的命令");
}