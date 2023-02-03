export default function Text({addEmoji,addBracket}){
    let textIt = "I love javascript programming Language";
    if(addEmoji){
        textIt = addEmoji(textIt, '❤');
    }
    if(addBracket){
        textIt = addBracket(textIt);
    }
    return <div>{textIt}</div>;
}