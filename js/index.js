const showmeIdeas = () => {
    const sweetList = document.getElementById('sweet-list');
    const savoryList = document.getElementById('savory-list');
    const sweetIsChecked = document.getElementById('sweettreats').checked;
    const savoryIsChecked = document.getElementById('savorytreats').checked;

    // Hide lists
    sweetList.style.display = 'none';
    savoryList.style.display = 'none';

    // Show the selected list
    if (sweetIsChecked) {
        sweetList.style.display = 'block';
    } else if (savoryIsChecked) {
        savoryList.style.display = 'block';
    }
};
