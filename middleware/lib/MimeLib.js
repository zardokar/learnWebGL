// ------------------------------------------------------------

module.exports = {
                    getMimeList
}

// ------------------------------------------------------------

function getMimeList(ext = "")
{
    let result = ""

    if( ext !== "" ){
        result = getMimeListObject()[ext]
    }
    return result
}

// ------------------------------------------------------------

function getMimeListObject()
{
    return {
                "7z"  : "application/x-7z-compressed",
                "aac" : "audio/aac",
                "avi" : "video/x-msvideo",
                "bat" : "text/plain",
                "bin" : "application/octet-stream",
                "bmp" : "image/bmp",
                "bz"  : "application/x-bzip",
                "c"   : "text/plain",
                "cpp" : "text/plain",
                "cs"  : "text/plain",
                "csh" : "application/x-csh",
                "css" : "text/css",
                "csv" : "text/csv",
                "dll" : "application/octet-stream",
                "doc" : "application/msword",
                "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "dds" : "image/x-dds",
                "dxf" : "application/x-dxf",
                "dxt" : "application/octet-stream",
                "edl" : "text/plain",
                "exe" : "application/octet-stream",
                "exr" : "image/x-exr",
                "fbx" : "application/octet-stream",
                "gif" : "image/gif",
                "gltf": "model/gltf+json",
                "glb" : "model/gltf-binary",
                "gz"  : "application/gzip",
                "gzip": "application/gzip",
                "h"   : "text/plain",
                "htm" : "text/html",
                "html": "text/html",
                "ico" : "image/vnd.microsoft.icon",
                "iso" : "application/octet-stream",
                "jpg" : "image/jpeg",
                "jpeg": "image/jpeg",
                "java": "text/plain",
                "js"  : "application/javascript",
                "json": "application/json",
                "jsonld": "application/ld+json",
                "log" : "application/octet-stream",
                "ma"  : "application/octet-stream",
                "mb"  : "application/octet-stream",
                "mdb" : "application/vnd.ms-access",
                "mov" : "video/quicktime",
                "mp3" : "audio/mpeg",
                "mp4" : "video/mp4",
                "mpeg": "video/mpeg",
                "msi" : "application/octet-stream",
                "obj" : "text/plain",
                "odp" : "application/vnd.oasis.opendocument.presentation",
                "ods" : "application/vnd.oasis.opendocument.spreadsheet",
                "odt" : "application/vnd.oasis.opendocument.text",
                "otf" : "font/otf",
                "pdf" : "application/pdf",
                "png" : "image/png",
                "ppt" : "application/vnd.ms-powerpoint",
                "pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                "rar" : "application/vnd.rar",
                "rtf" : "application/rtf",
                "sh"  : "application/x-sh",
                "svg" : "image/svg+xml",
                "svgz": "image/svg+xml",
                "tar" : "application/x-tar",
                "tga" : "image/x-tga",
                "tgz" : "application/x-compressed",
                "tif" : "image/tiff",
                "tiff": "image/tiff",
                "ttf" : "font/ttf",
                "txt" : "text/plain",
                "wasm": "application/wasm",
                "wav" : "audio/wav",
                "weba": "image/webm",
                "webm": "image/webm",
                "webp": "image/webp",
                "wmf" : "image/wmf",
                "woff": "font/woff",
                "woff2": "font/woff",
                "xhtml": "application/xhtml+xml",
                "xls" : "application/vnd.ms-excel",
                "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "xml" : "application/xml",
                "zip" : "application/zip"
            }
}