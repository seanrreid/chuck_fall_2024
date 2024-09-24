document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Ready...FAMILY');

    const rootDiv = document.querySelector('#root');
    const button = document.createElement('button');
    button.innerText = 'CLICK ME!';
    button.classList.add('button')

    button.addEventListener('click', function (e) {
        e.preventDefault();
        fetchQuote();
    });

    rootDiv.appendChild(button);

    const url = 'https://api.chucknorris.io/jokes/random';
    const options = { method: 'GET' };

    function fetchQuote() {
        fetch(url, options)
            .then(function (response) {
                console.log('RESPONSE: ', response);
                return response.json();
            })
            .then(function (data) {
                return generateQuote(data);
            });
    }

    function generateQuote(data) {
        console.log('DATA: ', data);

        const paragraph = document.createElement('p');
        paragraph.innerHTML = data.value;
        console.log('PARAGRAPH? ', paragraph);
        rootDiv.appendChild(paragraph);
    }

    fetchQuote();
});
