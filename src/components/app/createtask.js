export function createCard(card){
    const boxTwo = document.getElementById('Boxtwo');

    (function(){
        const mainDiv = document.createElement('div');
        mainDiv.id = 'Testone';
        boxTwo.appendChild(mainDiv);
        card.forEach(element => {
            for(const [key,value] of Object.entries(element)) {
                const titleTest = document.createElement('p');
                titleTest.classList.add('card');
                titleTest.innerText = value;
                titleTest.id = key;
                mainDiv.appendChild(titleTest);
            };
        });
        const trashCard = document.createElement('p');
        trashCard.id = 'Trashcard';
        trashCard.textContent = 'Trash';
        mainDiv.appendChild(trashCard);

        saveCard(card);
    })();
    
};