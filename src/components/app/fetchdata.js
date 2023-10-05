import { createCard } from "./createtask";

export function fetchData(){
    let keyValue = -1;

    for(let x = 0; x < localStorage.length - 2 ; x++){
        keyValue++;

        let savedData = JSON.parse(localStorage.getItem(`key${keyValue}`));
        createCard(savedData);
        console.log(savedData);
    };
};