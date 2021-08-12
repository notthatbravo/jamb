//Filtering Office Locations
state = document.getElementsByTagName('h4');
filterStatesInput = document.getElementById('filterStatesInput');

filterStatesInput.addEventListener('keyup', function() {
    filter = filterStatesInput.value.toLowerCase();

    for (i = 0; i < state.length; i++) {
        containerDiv = state[i].parentElement;

        stateName = state[i].textContent || state[i].innerText;
        stateName = stateName.toLowerCase();

        if (stateName.indexOf(filter) == -1) {
            containerDiv.style.display = 'none'
        } else {
            containerDiv.style.display = 'block';
        }
    }

})
