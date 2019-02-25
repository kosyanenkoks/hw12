var image = document.body.appendChild(document.createElement('img'));

fetch('https://cdn-images-1.medium.com/max/1200/1*qO_4-zVY8hmmp7HOHN5DRw.jpeg')
    .then(response => {
        response.blob().then(response => {
            imgUrl = URL.createObjectURL(response)
            image.src = imgUrl
        })
    });