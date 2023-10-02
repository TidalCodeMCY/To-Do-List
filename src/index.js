import { createPage } from "./components/app/createpage";
import { getCardData } from "./components/app/getcarddata";
import { prioChoice } from "./components/app/priochoice";
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
        getCardData(priorityChoice);
        modal.close();
    });

})();