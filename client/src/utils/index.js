import { surpriseMePrompts } from "../constants";

const getRandomPrompts = () => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)

    const randomPrompt = surpriseMePrompts[randomIndex]
    
    return randomPrompt
}

export {
    getRandomPrompts
}