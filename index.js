// Code your solutions in this file
const writeCards = (name) => {
    let newNamesArrMessage = [];
    for (let i = 0; i < name.length; i++){
        newNamesArrMessage.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return newNamesArrMessage;
}

const countDown = (num) => {
    for (let i = num; i >= 0; i--){
        console.log(i);
    }
}