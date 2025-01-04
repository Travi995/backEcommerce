

/**
 * 
 * @param value 
 * @returns 
 */
export const stdUrl = (value:string):string=>{

    return `${process.env.API_VERSION}/${value}`
}