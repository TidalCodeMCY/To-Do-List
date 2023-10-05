let idValues = 0;
idValues = JSON.parse(localStorage.getItem('cardId'));
    
if(window.performance.getEntriesByType('navigation').map((nav) => nav.type).includes('reload')){
    idValues = 0;
};

export function createCard(card){
    
    const boxTwo = document.getElementById('Boxtwo');
    
    (function(){
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('innerdivmain');
        boxTwo.appendChild(mainDiv);
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('innerDiv');
        
        
        
        card.forEach(element => {    
            for(const [key,value] of Object.entries(element)) {
                if(key === 'title'){
                    const titleTest = document.createElement('p');
                    titleTest.classList.add('title');
                    titleTest.innerText = value;
                    mainDiv.appendChild(titleTest);
                }else if(key === 'description'){
                    const descTest = document.createElement('p');
                    descTest.classList.add('description');
                    descTest.innerText = value;
                    mainDiv.appendChild(descTest);
                }else if(key === 'prio'){
                    mainDiv.appendChild(innerDiv);
                    const p1 = document.createElement('p');
                    p1.classList.add('Prio');
                    p1.textContent = 'High';
                    innerDiv.appendChild(p1);
                    const p2 = document.createElement('p');
                    p2.classList.add('Prio');
                    p2.textContent = 'Med';
                    innerDiv.appendChild(p2);
                    const p3 = document.createElement('p');
                    p3.classList.add('Prio');
                    p3.textContent = 'Low';
                    innerDiv.appendChild(p3);

                    if(value === 'High'){
                        p1.style.borderColor = 'green';
                        p2.style.borderColor = 'red';
                        p3.style.borderColor = 'red';
                
                        p1.style.borderWidth = '2px';
                        p2.style.borderWidth = '2px';
                        p3.style.borderWidth = '2px';
                
                    }else if(value === 'Med'){
                        p1.style.borderColor = 'red';
                        p2.style.borderColor = 'green';
                        p3.style.borderColor = 'red';
                
                        p1.style.borderWidth = '2px';
                        p2.style.borderWidth = '2px';
                        p3.style.borderWidth = '2px';
                    }else if(value === 'Low'){
                        p1.style.borderColor = 'red';
                        p2.style.borderColor = 'red';
                        p3.style.borderColor = 'green';
                
                        p1.style.borderWidth = '2px';
                        p2.style.borderWidth = '2px';
                        p3.style.borderWidth = '2px';
                    };    
                }else if(key === 'dateDue'){
                    const date = document.createElement('p');
                    date.classList.add('duedate');
                    date.innerText = value;
                    innerDiv.appendChild(date);
                };  
             };
             const trashCard = document.createElement('button');
             trashCard.classList.add('Trashcard');
             trashCard.textContent = 'Trash';
             trashCard.id = `key${idValues}`;
             innerDiv.appendChild(trashCard);
             idValues++; 
             localStorage.setItem('cardId',JSON.stringify(idValues));
        });
        
    })();
    
};
