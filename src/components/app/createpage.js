import headimg from '../img/github.png';

export function createPage(){

    const body = document.body; 
    
    (function addHeader() {
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
    })();

    (function addMain() {

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
        
    })();

    (function addFooter() {
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
    })();

};