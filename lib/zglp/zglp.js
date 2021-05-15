/*
     Author: Nattaworn Tancharoen
    created: 27 Dec 2020
*/

// -----------------------------------------------------

import gfunc from '../gfunc.js'

// -----------------------------------------------------

export async function initGL(canvasid, callback ,glversion=2)
{
    let context     = glversion === 2 ? "webgl2" : "webgl" 

    let canvas      = document.getElementById(canvasid)

    let gl          = canvas.getContext(context)

    // Only continue if WebGL is available and working
    if (gfunc.exist(gl) !== true) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
      return;
    }

    if (gfunc.exist(callback))
    {
      callback(gl)
    }

    return gl
}
