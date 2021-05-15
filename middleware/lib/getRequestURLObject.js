
const path      = require('path')

const BASE_DIR  = path.join(path.resolve('.'),'server')

// -------------------------------------------------------------------------------

module.exports = getRequestURLObject


// -------------------------------------------------------------------------------
// Regex
const selectHashPattern      = /\#[\s\S]*/g
const ignoreParams           = /(.*)\?/g
const selectDot              = /\./g
const selectQuestionmark     = /\?/g 
const selectSlash            = /(\/)+/g
const checklastslash         = /[/]$/gm

// -------------------------------------------------------------------------------

function extractionInputData(data)
{
    let result = {
        basedir:    null,
        targetdir:  null,
        requesturl: null
    }

    if(typeof data === "string")
    {
        result.requesturl = data

    }else if(typeof data === "object"){
        result.requesturl   = data.requesturl
        result.targetdir    = data.targetdir
        result.basedir      = data.basedir
    }

    return result
}

// -------------------------------------------------------------------------------

function getRequestURLObject(data , basedir , targetdir)
{
        data       = extractionInputData(data)

    let requesturl = data.requesturl
        targetdir  = data.targetdir !== null ? data.targetdir : targetdir
        basedir    = data.basedir   !== null ? data.basedir   : basedir

    let result = {}

    // Assign raw input
    result.input    = requesturl

    if(requesturl !== null && requesturl !== undefined)
    {
        result.inputlen = requesturl.length
    }

    try{

        let requeststr          = requesturl

        // Check Hash
        let hash                = splitHash(requeststr)
    
        if(hash !== null && hash !== undefined){
            result.hash         = hash
            requeststr          = requeststr.replace(hash,'')
        }
            
        // Check Query String Params
        let qsstring            = splitQSParams(requeststr)

        if(qsstring.data !== null && qsstring.data !== undefined){
            result.params       = qsstring.data
        }
        
        if(qsstring.error !== null && qsstring.error !== undefined){
            result.error        = qsstring.error
        }

        // Clean path
        result.urlpath      = cleanPath( requesturl , result.params , result.hash )

        // Check dot '.' for extension
        let checkdot = requesturl.match(selectDot)

        if( checkdot !== null && qsstring.error === null)
        {
            result.extension = getExtension(result.urlpath)

            if(result.extension !== null && result.extension !== undefined)
            {
                // Set default full path
                result.fullpath  = path.join( basedir || BASE_DIR , result.urlpath.replace(selectSlash,"\\") )

                // Check additional input target directory
                if(targetdir !== null && targetdir !== undefined)
                {
                    result.fullpath  = path.join( basedir || BASE_DIR ,targetdir , result.urlpath.replace(selectSlash,"\\") )
                }

            } else {
                delete result.extension
            }
        }

    }catch(err){
        result.error         = "Somthing wrong!! Please check input request"
        result.exception     = err.message
        console.log(err)
    }

    result.urlpath = result.urlpath.match(selectSlash).length > 1 ? result.urlpath.replace(checklastslash,'') : result.urlpath
    
    return result
}

// -------------------------------------------------------------------------------

function getExtension(normalpath)
{
    let raw = normalpath.split('.')

    let ext = raw[raw.length-1]

    if(ext !== null && ext.length > 1)
    {
        return ext
    }
    
    return 
}

// -------------------------------------------------------------------------------

function splitHash(requesturl)
{
    let splitparams = requesturl.match(selectHashPattern)

    // Check params in first
    if(splitparams !== null && splitparams.length === 1)
    {
        return splitparams[0]
    }
    return null
}

// -------------------------------------------------------------------------------

function splitQSParams(requesturl)
{
    let result      = { error: null }
    let splitparams = requesturl.match(selectQuestionmark)

    // Check params in first
    if(splitparams !== null && splitparams.length === 1)
    {
        result.data     = requesturl.replace(ignoreParams,'')

    }else if(splitparams !== null && splitparams.length > 1 ){
        
        result.error    = "More than one of ? character in url request"
    }

    return result
}

// -------------------------------------------------------------------------------

function cleanPath( requesturl , params , hash )
{
    let result  = requesturl

    if( hash !== null && hash !== undefined)
    {
        result  = result.replace( hash , '' )
    }

    if( params !== null && params !== undefined)
    {
        result  = result.replace( params ,'' )
    }

    return result.replace(selectQuestionmark,'').replace(selectSlash,'\/')
}