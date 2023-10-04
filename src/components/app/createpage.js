import headimg from '../img/github.png';
import { fetchData } from './fetchdata';

export function createPage(){

    const body = document.body; 

    function addHeader() {
        const header = document.createElement('header');
        header.id = 'Head';
        body.appendChild(header);
        const hOne = document.createElement('h1');
        hOne.id = 'H1';
        hOne.textContent = 'Get Err Don List';
        header.appendChild(hOne);
        const headImg = document.createElement('img');
        headImg.id = 'Headimg';
        headImg.src = headimg;
        header.appendChild(headImg);
        const addTask = document.createElement('p');
        addTask.id = 'Addtask';
        addTask.textContent = 'Add Task';
        header.appendChild(addTask);
    };

    function addMain() {

        const main = document.createElement('main');
        main.id = 'Main';
        body.appendChild(main);

        (function areaOne(){
            const boxone = document.createElement('div');
            boxone.id = 'Boxone';
            main.appendChild(boxone);
            const menu = document.createElement('h2');
            menu.id ='Menu';
            menu.textContent = 'Menu';
            boxone.appendChild(menu);
            const home = document.createElement('p');
            home.id = 'Home';
            home.textContent = 'Home';
            boxone.appendChild(home);
            const notes = document.createElement('p');
            notes.id = 'Notes';
            notes.textContent = 'Notes';
            boxone.appendChild(notes);
            const placeholder1 = document.createElement('p');
            placeholder1.id = 'Ph1';
            placeholder1.textContent = 'Placeholder';
            boxone.appendChild(placeholder1);
            const placeholder2 = document.createElement('p');
            placeholder2.id = 'Ph2';
            placeholder2.textContent = 'Placeholder';
            boxone.appendChild(placeholder2);
        })();

        (function areaTwo(){
            const boxtwo = document.createElement('div');
            boxtwo.id = 'Boxtwo';
            main.appendChild(boxtwo);
        })();
        
    };

    function addFooter() {
        const footer = document.createElement('footer');
        body.appendChild(footer);
        const copyRight = document.createElement('p');
        copyRight.id = 'Copy';
        copyRight.textContent = 'Copyright by Mason Yates'
        footer.appendChild(copyRight);
        const footImg = document.createElement('img');
        footImg.id = 'Footimg';
        footImg.src = headimg;
        footer.appendChild(footImg);
    };

    function addModal(){
        const dialog = document.createElement('dialog');
        dialog.id = 'Modalone';
        body.appendChild(dialog);
        const modalForm = document.createElement('form');
        modalForm.id = 'Formmodal';
        dialog.appendChild(modalForm);
        const cancelTask = document.createElement('p');
        cancelTask.id = 'Canceltaskmenu';
        cancelTask.textContent = 'x';
        modalForm.appendChild(cancelTask);
        const titleLab = document.createElement('label');
        titleLab.id = 'Titlelabel';
        titleLab.setAttribute('for', 'Title');
        titleLab.textContent = 'Task';
        modalForm.appendChild(titleLab);
        const titleInput = document.createElement('input');
        titleInput.id = 'Title';
        titleInput.type = 'text';
        modalForm.appendChild(titleInput);
        const descriptionLab = document.createElement('label');
        descriptionLab.id = 'Descriptionlabel';
        descriptionLab.setAttribute('for', 'Descriptioninput');
        descriptionLab.textContent = 'Description';
        modalForm.appendChild(descriptionLab);
        const descriptionInput = document.createElement('textarea');
        descriptionInput.id = 'Descriptioninput';
        descriptionInput.rows = '5';
        descriptionInput.cols = '50';
        modalForm.appendChild(descriptionInput);
        const lastDiv = document.createElement('div');
        lastDiv.id = 'Lastdiv';
        modalForm.appendChild(lastDiv);
        const innerModalDiv = document.createElement('div');
        innerModalDiv.id = 'Innermodaldiv';
        lastDiv.appendChild(innerModalDiv);
        //add 3 input checkboxes high med and low
        const prio = document.createElement('p');
        prio.id = 'Prio';
        prio.textContent = 'Priority';
        innerModalDiv.appendChild(prio);
        const highBox = document.createElement('p');
        highBox.textContent = 'High';
        highBox.id = 'Highbox';
        innerModalDiv.appendChild(highBox);
        const medBox = document.createElement('p');
        medBox.textContent = 'Med';
        medBox.id = 'Medbox';
        innerModalDiv.appendChild(medBox);
        const lowBox = document.createElement('p');
        lowBox.textContent = 'Low';
        lowBox.id = 'Lowbox';
        innerModalDiv.appendChild(lowBox);
        const finalModalDiv = document.createElement('div');
        finalModalDiv.id = 'Finalmodaldiv';
        lastDiv.appendChild(finalModalDiv);
        //add a date input and a submit button.
        const dueDate = document.createElement('p');
        dueDate.textContent = 'Due Date';
        dueDate.id = 'Due';
        finalModalDiv.appendChild(dueDate);
        const dateBox = document.createElement('input');
        dateBox.setAttribute('type', 'date');
        dateBox.id = 'Datebox';
        finalModalDiv.appendChild(dateBox);
        const submitModal = document.createElement('input');
        submitModal.setAttribute('type', 'submit');
        submitModal.id = 'Submitmodal';
        submitModal.name = 'Add Task';
        finalModalDiv.appendChild(submitModal);

    };

    if(localStorage.getItem("key0") === null){
        addHeader();
        addMain();
        addFooter();
        addModal();
    }else if(localStorage.getItem('key0') != null){
        addHeader();
        addMain();
        addFooter();
        addModal();
        //add a way to access the storage make the keys simple like key0 - key10 or something.
        fetchData();
    };

};