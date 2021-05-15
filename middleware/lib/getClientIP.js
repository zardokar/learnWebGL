module.exports = function (request)
{
    let ip1, ip2, ip3, ip4, ip5

    try {
            ip1 = (request.headers['x-forwarded-for'] || '').split(',')[0].trim().replace('::ffff:', '')
            ip2 = (request.headers['x-real-ip'] || '').split(',')[0].trim().replace('::ffff:', '')
            ip3 = (request.connection ? request.connection.remoteAddress : '').replace('::ffff:', '')
            ip4 = (request.socket ? request.socket.remoteAddress : '').replace('::ffff:', '')
    } catch (err) {

        console.log(err.message)

    }
    
    return ip1 || ip2 || ip3 || ip4 || ip5
}