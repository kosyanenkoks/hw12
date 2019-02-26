function changeUrlImg() {
    var imageUrls = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2kDAq7G6c6iNmn8RNQiRAXaZay_9xTvg3VjygsCzJBgYkqz_',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVuBC90u-3cqOF6pwo5AJ1RE-mMjqmEA2T4-C8YClCQt72fF6vA',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzKQ2A5KQMu4meQK3jNOtKKlUkgUh5lPulivsiCJ6GXJNjJu8Qw'
    ];
    var img = document.body.appendChild(document.createElement('img'));
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

function changeHash(event) {
    var newHash = location.hash;
    var timeInSec = Math.floor(Date.now() / 1000);
    var historyInfo = {
        pageId: newHash,
        startTime: timeInSec
    };

    var arrhistoryInfo = [];
    arrhistoryInfo.push(historyInfo);

    localStorage.setItem(
        'history',
        JSON.stringify(arrhistoryInfo)
    );
    changeUrlImg();
    console.log('hash was changed');
}

window.addEventListener('hashchange', changeHash());