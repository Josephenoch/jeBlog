const getMins = (sentence:string):number=>{
    const words = sentence.split(" ")
    // the code above gets the words
    const time = words.length/200
    // the inaccurate time is the number of words divided by 200
    const mins = Math.floor(time)
    // the minutes the whole number part of the result
    const secs = (time-mins)*0.6
    // the seconds is the decimal part multiplied by 0.6
    return Math.round(mins+secs)
    // round the result and return it
}

export default getMins