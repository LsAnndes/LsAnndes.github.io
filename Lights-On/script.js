document.addEventListener("DOMContentLoaded", function(event) {
    function toggleImage(imgElement, initialSrc, replacementSrc, soundId, description) {
        if (imgElement.getAttribute('data-current-src') === initialSrc) {
            imgElement.src = replacementSrc;
            imgElement.setAttribute('data-current-src', replacementSrc);
            if (soundId) {
                document.getElementById(soundId).play();
            }
            document.getElementById("description").innerText = description; 
        } else {
            imgElement.src = initialSrc;
            imgElement.setAttribute('data-current-src', initialSrc);
            document.getElementById("description").innerText = "Click on images for light."; 
        }
    }

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');
    const img5 = document.getElementById('img5');
    const img6 = document.getElementById('img6');
    const img7 = document.getElementById('img7');
    const img8 = document.getElementById('img8');
    const img9 = document.getElementById('img9');

    img1.addEventListener('click', function() {
        toggleImage(img1, 'Img1.png', 'Img1replace.png', 'sound1', 'Late night snack huh?');
    });

    img2.addEventListener('click', function() {
        toggleImage(img2, 'Img2.png', 'Img2replace.png', 'sound2', 'Are pool lights safe?');
    });

    img3.addEventListener('click', function() {
        toggleImage(img3, 'Img3.png', 'Img3replace.png', 'sound3', 'SPIDER!');
    });

    img4.addEventListener('click', function() {
        toggleImage(img4, 'Img4.png', 'Img4replace.png', 'sound4', 'My Grandma still sleeps with a nightlight.');
    });

    img5.addEventListener('click', function() {
        toggleImage(img5, 'Img5.png', 'Img5replace.png', null, 'Exit signs are always on buddy.');
    });

    img6.addEventListener('click', function() {
        toggleImage(img6, 'Img6.png', 'Img6replace.png','sound6', 'I miss that tingling sensation from old TVs.');
    });

    img7.addEventListener('click', function() {
        toggleImage(img7, 'Img7.png', 'Img7replace.png', 'sound7', 'I wonder what\'s behind that door...');
    });

    img8.addEventListener('click', function() {
        toggleImage(img8, 'Img8.png', 'Img8replace.png','sound8', 'To be great, study late.' );
    });

    img9.addEventListener('click', function() {
        toggleImage(img9, 'Img9.png', 'Img9replace.png', 'sound9', 'Don\'t hit the deer!');
    });
});