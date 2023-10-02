export function prioChoice(val) {
    const highBox = document.getElementById('Highbox');
    const medBox = document.getElementById('Medbox');
    const lowBox = document.getElementById('Lowbox');

    let prio;

    if (val === 'High'){
        highBox.style.borderColor = 'green';
        highBox.style.borderWidth = '2px';

        medBox.style.borderColor = 'red';
        medBox.style.borderWidth = '2px';

        lowBox.style.borderColor = 'red';
        lowBox.style.borderWidth = '2px';

        prio = 'High';
        return prio;
    }else if(val === 'Med'){
        medBox.style.borderColor = 'green';
        medBox.style.borderWidth = '2px';

        highBox.style.borderColor = 'red';
        highBox.style.borderWidth = '2px';

        lowBox.style.borderColor = 'red';
        lowBox.style.borderWidth = '2px';

        prio = 'Med';
        return prio;
    }else if(val === 'Low'){
        lowBox.style.borderColor = 'green';
        lowBox.style.borderWidth = '2px';

        highBox.style.borderColor = 'red';
        highBox.style.borderWidth = '2px';

        medBox.style.borderColor = 'red';
        medBox.style.borderWidth = '2px';

        prio = 'Low';
        return prio;
    };

};