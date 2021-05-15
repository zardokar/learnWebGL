// -----------------------------------------------------------

export default  {
                    exist       
}

// -----------------------------------------------------------
function exist(data)
{
    let result = true

      try{
        if(data === undefined)               result = false
        else if(data === null)               result = false
        else if(typeof data === 'undefined') result = false
    }catch(excp){
        result = false
    }

    return result
}