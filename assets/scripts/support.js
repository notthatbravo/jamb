// Filtering faqs with topic categories

// The categories to filter by
filterByTopicSection = document.querySelector('.filter-by-topic');
filterDivList = filterByTopicSection.getElementsByClassName('card');
// console.log(filterDiv);


// The FAQs Container Div themselves
faqSection = document.querySelector('.faqs');
faqContainerDivList = faqSection.getElementsByTagName('div');
// console.log(faqContainerDivList);

// Editing the filter
clearFilter = document.querySelector('#clear-filter');
changeFilter = document.querySelector('#change-filter');


for (i = 0; i < filterDivList.length; i++) {
    filterDivContainer = filterDivList[i]
    filterDivContainer.addEventListener('click', function()  {
        categoryName = this.classList[1]
        // console.log(categoryName);

        for (j = 0; j < faqContainerDivList.length; j++) {
            faqContainerDiv = faqContainerDivList[j];
            faqContainerDivCategory = faqContainerDiv.classList[0];

            if (categoryName == faqContainerDivCategory) {
                faqContainerDiv.style.display = 'block';
            } else {
                faqContainerDiv.style.display = 'none';
            }
        }

        clearFilter.style.display = 'block';
        changeFilter.style.display = 'block';
    })

    clearFilter.addEventListener('click', function() {
        clearFilter.style.display = 'none';
        changeFilter.style.display = 'none';


        for (j = 0; j < faqContainerDivList.length; j++) {
            faqContainerDiv = faqContainerDivList[j];
            faqContainerDiv.style.display = 'block';
        }
    })
}



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
