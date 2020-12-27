/*
     Author: Nattaworn Tancharoen
    created: 27 Dec 2020
*/

// -----------------------------------------------------

import wgl from './webgl/main'
import wgl2 from './webgl2/main'

// -----------------------------------------------------



// -----------------------------------------------------

function initGLContext(canvasid,glversion=2)
{
    let context = glversion === 2 ? "webgl2" : "webgl" 

    let gl = document.getElementById(canvasid).getContext(context)
    
    // Only continue if WebGL is available and working
    if (gl === null) {
      alert("Unable to initialize WebGL. Your browser or machine may not support it.");
      return;
    }


    return gl
}

function blankFrame()
{
    
}