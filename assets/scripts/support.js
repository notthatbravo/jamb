//Filtering FAQs
summary = document.getElementsByTagName('summary');
filterFaqsInput = document.getElementById('faqs-input');

filterFaqsInput.addEventListener('keyup', function() {
    filter = filterFaqsInput.value.toLowerCase();

    for (i = 0; i < summary.length; i++) {
        detailsContainer = summary[i].parentElement;

        summaryContent = summary[i].textContent || summary[i].innerText;
        summaryContent = summaryContent.toLowerCase();

        if (summaryContent.indexOf(filter) == -1) {
            detailsContainer.style.display = 'none'
        } else {
            detailsContainer.style.display = 'block';
        }
    }

})


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
