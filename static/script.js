// DOM ELEMENT STUFF
let yearInputEl = document.getElementById('year-input');
let yearButtonEl = document.getElementById('year-submit');
let svgSectionEl = document.querySelector('.lego-chart-section');

yearButtonEl.addEventListener('click', (event) => {
    event.preventDefault();

    // Maybe sanitize lol.
    fetch( '/data/' + yearInputEl.value )
    .then( (res) => res.json() )
    .then((data) => {
        // TODO - here is where we do the 2way binding for the d3 data
        // For now manual one way binding

        // TODO - TEST section to see if we have this working
        let testAreaEl = document.querySelector('.test-area');
        testAreaEl.innerHTML = JSON.stringify(data);
    });
});


// D3 STUFF