import { createCard } from "./createtask";

export function fetchData(){
    let keyValue = -1;
    let newVariable = -1;

    for(let x = localStorage.length; x > newVariable ; x--){
        keyValue++;
        newVariable++;

        let savedData = JSON.parse(localStorage.getItem(`key${keyValue}`));
        createCard(savedData);
        console.log(savedData);
    };
};