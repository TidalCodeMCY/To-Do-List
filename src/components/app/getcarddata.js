import { toDoItem } from "./classes";
import { createCard } from "./createtask";
import { resetModal } from "./resetmodal";

export function getCardData(val) {
    let Cards = [];
    
    let title = document.getElementById('Title').value;
    let description = document.getElementById('Descriptioninput').value;
    let prio = val;
    let date = document.getElementById('Datebox').value;

    let newCard = new toDoItem(title,description,prio,date);
    Cards.push(newCard);
    createCard(Cards);
    resetModal();
};