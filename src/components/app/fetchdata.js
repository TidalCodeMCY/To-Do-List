import { createCard } from "./createtask";

export function fetchData(){
    let keyValue = -1;

    for(let x = 0; x < localStorage.length ; x++){
        keyValue++;
        
        let savedData = JSON.parse(localStorage.getItem(`key${keyValue}`));
        createCard(savedData);   
    };
};