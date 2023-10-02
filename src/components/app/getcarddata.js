import { toDoItem } from "./classes";
import { createCard } from "./createtask";
import { resetModal } from "./resetmodal";
import { lightFormat } from 'date-fns';
import { parseISO } from 'date-fns'

export function getCardData(val) {
    let Cards = [];
    
    let title = document.getElementById('Title').value;
    let description = document.getElementById('Descriptioninput').value;
    let prio = val;
    let date = document.getElementById('Datebox').value;

    var fixedDate = lightFormat(parseISO(date),'MM/dd/yyyy');

    let newCard = new toDoItem(title,description,prio,fixedDate);
    Cards.push(newCard);
    createCard(Cards);
    resetModal();
};