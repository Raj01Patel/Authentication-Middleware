function requestLogger(req, res, next) {
    const { method, url, headers, body } = req;
    const ip = req.ip;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${method} request to ${url} from ${ip}`);
    console.log('Request Headers:', headers);
    console.log('Request Body:', body);

    next();
}

module.exports = requestLogger;