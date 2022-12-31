export const ICON_MAP= new Map()
addMapping([0,1],"sun-solid");
addMapping([95,96,99],"cloud-bolt-solid")
addMapping([61,63,65],"cloud-showers-heavy-solid")
addMapping([45,48],"smog-solid")
addMapping([3],"cloud-solid")
addMapping([66,67],"snowflake-solid")
addMapping([2],"cloud-sun-solid")

function addMapping(values,icon){
    values.forEach(value=>{
        ICON_MAP.set(value,icon)
    })
}