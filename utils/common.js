export const getValue = (obj, path, defaultValue) =>{
    try {
        if(!(obj instanceof Array)){
            let myValue = obj;
            for(let key of path){
                if(!(key in myValue)){
                    return defaultValue;
                }else{
                    myValue = myValue[key];
                }
            }
            return myValue;
        }
    } catch (error) {
        console.log({error});
        return defaultValue;
    }
}