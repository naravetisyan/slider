
document.addEventListener('DOMContentLoaded', () => {

    let container = document.getElementsByClassName('container')[0],
        pos = 'right',
        activeImageId = 0, 
        imgListItem,
        modalImg = document.getElementsByClassName('modal-img')[0],
        icNext = document.getElementsByClassName('ic_next')[0],
        body = document.getElementsByTagName('body')[0],
        icPrev = document.getElementsByClassName('ic_back')[0];

    icNext && icNext.addEventListener('click', toNextImage);
    icPrev && icPrev.addEventListener('click', toPrevImage);
    const imagesArr = [
        "https://www.aconsciousrethink.com/wp-content/uploads/2018/03/mood-swings.jpg",
        "https://www.dw.com/image/38273347_303.jpg",
        "https://www.consciouslifestylemag.com/wp-content/uploads/2016/05/music-and-the-brain-affects-mood-surreal-colors-min.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofOKxN6YUlx8zEPGMpRxI1vRmpDxZzgHy4QVr4KIXMBk38Avb",
        "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
        "https://www.hartvannederland.nl/wp-content/uploads/2018/04/bier.jpg",
        "https://www.gettyimages.co.uk/gi-resources/images/frontdoor/creative/PanoramicImagesRM/FD_image.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofOKxN6YUlx8zEPGMpRxI1vRmpDxZzgHy4QVr4KIXMBk38Avb",
        "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
        "https://www.hartvannederland.nl/wp-content/uploads/2018/04/bier.jpg",
        "https://www.gettyimages.co.uk/gi-resources/images/frontdoor/creative/PanoramicImagesRM/FD_image.jpg"
    ], length = imagesArr.length;
        
    imagesArr.forEach((item, i) => {
        let div = document.createElement('div');
        div.setAttribute('data-id', i)
        div.onclick = (e) => {
            document.getElementsByClassName('modal')[0].style.display = 'flex';
            body.style.overflow = 'hidden';
            activeImageId = e.target.getAttribute('data-id');
            modalImg.src = imagesArr[activeImageId];
            document.getElementsByClassName('ic_close')[0].onclick = () =>  {
                document.getElementsByClassName('modal')[0].style.display = 'none';
                body.style.overflow = 'auto';
            }
            setBorderToImage();
        }
        div.classList.add("image");
        div.style.backgroundImage = `url(${item})`;

        if(i % 3 === 0  && body.offsetWidth > 1024) {
            pos = pos === 'right' ? 'left' : 'right' ;
            div.style.cssFloat = pos;
            div.classList.add("big");
            container.appendChild(div);
        } else if(body.offsetWidth < 1024) {
            div.style.cssFloat = "left";
            div.classList.add("small");
            container.appendChild(div);
            icNext.style.display = 'none'
            icPrev.style.display = 'none'
        } 
        else {
            div.classList.add("small");
            container.appendChild(div);
        }
        // small images list
        imgListItem = document.createElement('div');
        imgListItem.setAttribute('data-id', i);
        imgListItem.style.backgroundImage = `url(${item})`;
        imgListItem.classList.add('small-images');
        imgListItem.onclick = (e) => toImage(e);
        document.getElementsByClassName('images')[0].appendChild(imgListItem);
    });
        
    function toImage(e) {
        activeImageId = e.target.getAttribute('data-id');
        modalImg.src = imagesArr[activeImageId];
        setBorderToImage();
    }
    
    function toNextImage () {
        activeImageId = activeImageId == length-1 ? 0 : ++activeImageId;
        modalImg.src = imagesArr[activeImageId];
        setBorderToImage();
    }
    
    function toPrevImage () {
        activeImageId = activeImageId == 0 ? length-1 : --activeImageId;  
        modalImg.src = imagesArr[activeImageId]
        setBorderToImage();
    }

    function setBorderToImage () {
        let smallImages = document.getElementsByClassName('small-images'); 
        for (let index = 0; index < smallImages.length; index++) {
            const element = smallImages[index];
            if(smallImages[index].getAttribute('data-id') == activeImageId){
                smallImages[index].classList.add('active-image-border')
            } else {
                smallImages[index].classList.remove('active-image-border')
            }
        }
    }  

});
        