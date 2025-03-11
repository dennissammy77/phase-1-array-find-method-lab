// code your solution here
function superbowlWin(records){
    const result = records.find((record)=>
        record.result === "W"
    )
    if(!result){
        return undefined
    }
    return result.year
}