export const registerstate = (register)=>{
    return(dispatch)=>{
        dispatch({
            type:"register_user",
            payload:register
        })
    }
}