function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
function mondayWork(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`);
}
function wrapAdjective(string) {
    return (string2) => {
        return `You are ${string}${string2}${string}!`
    }
}