function encodeAndDecodeMessages() {

    let sendButton = document.getElementsByTagName('button')[0];
    let readButton = document.getElementsByTagName('button')[1];

    sendButton.addEventListener('click', encodeAndSend);
    readButton.addEventListener('click', decodeAndRead);

    function encodeAndSend() {

        let message = document.getElementsByTagName('textarea')[0].value;
        let encodedMessage = '';

        for (let index = 0; index < message.length; index++) {
            encodedMessage += String.fromCharCode(message[index].charCodeAt() + 1);
        }

        document.getElementsByTagName('textarea')[1].value = encodedMessage;
        document.getElementsByTagName('textarea')[0].value = '';
    }

    function decodeAndRead() {
        let encodedMessage = document.getElementsByTagName('textarea')[1].value
        let message = ''


        for (let index = 0; index < encodedMessage.length; index++) {
            message += String.fromCharCode(encodedMessage[index].charCodeAt() - 1);
        }

        document.getElementsByTagName('textarea')[1].value = message;
    }

}