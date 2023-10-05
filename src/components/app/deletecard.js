export function deleteCard(pos){
    let currentPos = pos;
    currentPos.parentElement.parentElement.remove();
    localStorage.removeItem(currentPos.id);

    let newKeyVal = JSON.parse(localStorage.getItem('keyVal'));
    newKeyVal = newKeyVal - 1;
    localStorage.setItem('keyVal', JSON.stringify(newKeyVal)); 

    let newCardID = JSON.parse(localStorage.getItem('cardId'));
    newCardID = newCardID - 1;
    localStorage.setItem('cardId',JSON.stringify(newCardID));
};