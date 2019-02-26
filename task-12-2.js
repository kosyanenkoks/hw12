var img = document.body.appendChild(document.createElement('img'));
img.src = 'https://media.giphy.com/media/jcBp8Gx6AapxK/giphy.gif';

function changeUrlImg() {
    var imageUrls = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2kDAq7G6c6iNmn8RNQiRAXaZay_9xTvg3VjygsCzJBgYkqz_',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVuBC90u-3cqOF6pwo5AJ1RE-mMjqmEA2T4-C8YClCQt72fF6vA',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzKQ2A5KQMu4meQK3jNOtKKlUkgUh5lPulivsiCJ6GXJNjJu8Qw'
    ];
    var randomImgUrlIndex = Math.floor(Math.random() * imageUrls.length);
    var randomImgUrlVal = imageUrls[randomImgUrlIndex];

    fetch(randomImgUrlVal)
        .then(response => {
            response.blob().then(response => {
                imgUrl = URL.createObjectURL(response);
                img.src = imgUrl
            })
        });
}

// спасение
window.onpopstate = function(event) {
    changeUrlImg();
};

function changeHash(event) {
    var newHash = location.hash;
    var timeInSec = Math.floor(Date.now() / 1000);
    var historyInfo = {
        pageId: newHash,
        startTime: timeInSec
    };

    // var prevHistoryInfo = JSON.parse(localStorage['history']);

    var arrHistoryInfo = [];
    arrHistoryInfo.push(historyInfo);
    // arrHistoryInfo.push(prevHistoryInfo);

    localStorage.setItem(
        'history',
        JSON.stringify(arrHistoryInfo)
    );
}

window.addEventListener('hashchange', changeHash());