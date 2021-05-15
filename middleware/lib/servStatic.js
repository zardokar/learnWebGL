// --------------------------------------------------------------------

const fs    = require('fs')
const path  = require('path')

// --------------------------------------------------------------------

const mime = require('./MimeLib')

// --------------------------------------------------------------------

const HEAD_404   = [404, { 'Content-Type': 'text/html' }]

// --------------------------------------------------------------------

module.exports = function (reqobj,response, targetdir = "",jump = '../../')
{
    let mimetype   = mime.getMimeList(reqobj.extension)

    if( mimetype !== "" )
    {
        HEAD_200 = [200, { 'Content-Type': mimetype }]

        try{
        
            let dirpath  = path.join(__dirname, jump )
            let fullpath = dirpath + targetdir + reqobj.urlpath
    
            fullpath = fullpath.replace(/\\/g, '/')
            
            try{
                fs.readFile( fullpath , (err,data) => { 
                    if (err) {
                        response.writeHead( ...HEAD_404 )
                        response.end(`Sorry This path '${fullpath}' not found.<br/>`)
                        return;
                    }
                    // ---------------- This Success and found it ----------------
                    response.writeHead( ...HEAD_200 )
                    response.end(data)
                })
            }catch(error){
                console.log('error --> ', error)
            }
        }catch(err)
        {
            response.writeHead( ...HEAD_404 )
            response.end('Sorry we are not found your request.')
            console.log(err)
        }

    }else{
        response.writeHead( ...HEAD_404 )
        response.end('Sorry this request is not identify type.')
    }
    
}