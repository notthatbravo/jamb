// Filtering faqs with topic categories

// The categories to filter by
filterByTopicSection = document.querySelector('.filter-by-topic');
filterDivList = filterByTopicSection.getElementsByClassName('card');
// console.log(filterDiv);


// The FAQs Container Div themselves
faqSection = document.querySelector('.faqs');
faqContainerDiv = faqSection.getElementsByTagName('div');
// console.log(faqContainerDiv);


filterDivList.forEach(element => {console.log(element)});



//Filtering FAQs with Input field
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
