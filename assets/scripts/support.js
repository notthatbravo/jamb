//Filtering Office Locations
state = document.getElementsByTagName('h4');
filterStatesInput = document.getElementById('filterStatesInput');
filter = filterStatesInput.value.toLowerCase();

filterStatesInput.addEventListener('keyup', function() {
    for (i = 0; i < state.length; i++) {
        containerDiv = state[i].parentElement;
        stateValue = state[i].textContent || state[i].innerText;
        stateValue = stateValue.toLowerCase();

        if (stateValue.indexOf(filter) > -1) {
            containerDiv.style.display = '';
        } else {
            containerDiv.style.background = 'red';
            // containerDiv.style.display = 'none';
        }
    }

})
