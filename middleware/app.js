// --------------------------------------------------------------------

const http                  = require('http')

// --------------------------------------------------------------------

const servStatic            = require ('./lib/servStatic')
const getClientIP           = require ('./lib/getClientIP')
const getRequestURLObject   = require ('./lib/getRequestURLObject')

// --------------------------------------------------------------------

const PORT                  = process.env.PORT || 9876
const DEFAULT_DOC_FILE      = 'index.htm'

// --------------------------------------------------------------------

const server                = http.createServer(onListening).listen(PORT)

// --------------------------------------------------------------------

async function onListening( request , response)
{
    if(request.url === '/')
    {
        request.url = `/${DEFAULT_DOC_FILE}`
    }

    let reqobj = getRequestURLObject(request.url)

    servStatic(reqobj,response)
}