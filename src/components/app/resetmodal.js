export function resetModal() {
    const highBox = document.getElementById('Highbox');
    const medBox = document.getElementById('Medbox');
    const lowBox = document.getElementById('Lowbox');
    const taskBox = document.getElementById('Title');
    const descBox = document.getElementById('Descriptioninput');
    const dueDate = document.getElementById('Datebox');

    taskBox.value = '';
    descBox.value = '';
    dueDate.value = '';

    highBox.removeAttribute('style');
    highBox.style.borderWidth = '1px';
    medBox.removeAttribute('style');
    medBox.style.borderWidth = '1px';
    lowBox.removeAttribute('style');
    lowBox.style.borderWidth = '1px';
};