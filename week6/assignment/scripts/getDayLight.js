// This script should return the results of a function that use data from the api to determine whether it 
export default function getDayLight (localTime, day, night) {
    const newDay = new Date ()
    let blue = "blue"
    if (localTime < day || localTime > night) blue = "black"
    return blue
}