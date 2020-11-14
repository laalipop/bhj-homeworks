let items = document.getElementById('items');

let request = new XMLHttpRequest;
request.open('GET', 'https://netology-slow-rest.herokuapp.com/');
request.send();

request.addEventListener('readystatechange', () => {
    if (request.readyState == request.DONE) {
        document.getElementById('loader').classList.remove('loader_active');

        let parseJson = JSON.parse(request.responseText);
        console.log(parseJson);
        // console.log(parseJson.response.Valute.USD.CharCode);
        let obj = parseJson.response.Valute;
        for (let key in obj) {
            
            let item =
                `<div class="item">
                <div class="item__code">${obj[key].CharCode}</div>
                <div class="item__value">${obj[key].Value}</div>
                <div class="item__currency">руб. </div>`;

            items.insertAdjacentHTML('afterbegin', item)
        }


    }
})

