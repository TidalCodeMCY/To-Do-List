import { createPage } from "./components/app/createpage";
import { deleteCard } from "./components/app/deletecard";
import { getCardData } from "./components/app/getcarddata";
import { prioChoice } from "./components/app/priochoice";
import { resetKeys } from "./components/app/resetkeys";
import { resetModal } from "./components/app/resetmodal";
import './style.css';

createPage();

(function(){
    const addTask = document.getElementById('Addtask');
    const exitModal = document.getElementById('Canceltaskmenu');
    const modal = document.getElementById('Modalone');
    const highBox = document.getElementById('Highbox');
    const medBox = document.getElementById('Medbox');
    const lowBox = document.getElementById('Lowbox');
    const submitBtn = document.getElementById('Submitmodal');
    const deleteBtn = document.getElementsByClassName('Trashcard');

    let priorityChoice;

    addTask.addEventListener('click', () => {
        modal.showModal();
    });

    exitModal.addEventListener('click', () => {
        modal.close();
        resetModal();
    });

    highBox.addEventListener('click', () => {
        const val = 'High';
        priorityChoice = prioChoice(val);
    });

    medBox.addEventListener('click', () => {
        const val = 'Med';
        priorityChoice = prioChoice(val);
    });

    lowBox.addEventListener('click', () => {
        const val = 'Low';
        priorityChoice = prioChoice(val);
    });

    submitBtn.addEventListener('click',(e) => {
        e.preventDefault();
        location.reload();
        getCardData(priorityChoice);
        modal.close();
    });
    
    for(let btn of deleteBtn) {
        btn.addEventListener('click', (e) => {
            e = e.currentTarget;
            deleteCard(e);
            resetKeys();
        });
    }
})();