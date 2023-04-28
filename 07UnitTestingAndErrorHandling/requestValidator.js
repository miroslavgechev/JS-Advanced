function requestValidator(inputObject) {

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validUriPattern = /^[\w.]+$/g;
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let invalidMessageSymbols = [`<`, `>`, `\\`, `&`, `'`, `"`];

    if (!validMethods.includes(inputObject.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (inputObject.hasOwnProperty('uri')) {
        if (!(inputObject.uri === '*') && !inputObject.uri.match(validUriPattern)) {
            throw new Error('Invalid request header: Invalid URI');
        }
    } else {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersions.includes(inputObject.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (inputObject.hasOwnProperty('message')) {
        for (let ch of inputObject.message) {
            if (invalidMessageSymbols.includes(ch)) {
                throw new Error('Invalid request header: Invalid Message');
            }
        }
    } else {
        throw new Error('Invalid request header: Invalid Message');
    }

    return inputObject
}

requestValidator({
    method: 'GET',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '&copy;'
}
)