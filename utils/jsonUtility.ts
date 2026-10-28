import * as  fs from 'fs'    //?file system


export async function readJSON(
    filepath:string
) {
    return JSON.parse(
        fs.readFileSync(filepath,"utf-8")
    )
}