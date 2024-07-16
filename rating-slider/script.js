window.onload = () => { 
    document.body.style.opacity = 1;

    function generateRandomRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function randomEmotePosition(emoteBox) {
        const absolutePosition = ["top", "bottom", "left", "right"],
            randomAbsolute = Math.floor(Math.random() * absolutePosition.length),
            randomXPosition = Math.floor(Math.random() * 100),
            randomYPosition = Math.floor(Math.random() * 100);

        const rotateTop = generateRandomRange(170, 190),
            rotateBottom = generateRandomRange(-10, 10),
            rotateLeft = generateRandomRange(80, 118),
            rotateRight = generateRandomRange(-70, -118);

        if(absolutePosition[randomAbsolute] === "top"){
            emoteBox.style.cssText = `
                top: 0;
                left: ${randomXPosition}%;
                transform: translateX(-${randomXPosition}%) translateY(-5%) rotate(${rotateTop}deg);
            `
        }

        if(absolutePosition[randomAbsolute] === "bottom"){
            emoteBox.style.cssText = `
                bottom: 0;
                left: ${randomXPosition}%;
                transform: translateX(-${randomXPosition}%) translateY(-5%) rotate(${rotateBottom}deg);
            `
        }

        if(absolutePosition[randomAbsolute] === "left"){
            emoteBox.style.cssText = `
                top: ${randomYPosition}%;
                left: 0
                transform: translateX(-${randomYPosition}%) rotate(${rotateLeft}deg);
            `
        }

        if(absolutePosition[randomAbsolute] === "right"){
            emoteBox.style.cssText = `
                top: ${randomYPosition}%;
                right: 0
                transform: translateX(-${randomYPosition}%) rotate(${rotateRight}deg);
            `
        }
    }

    const radioBox = document.querySelectorAll(".radio-box"),
        radioLabel = document.querySelectorAll(".radio-box p")

    radioBox.forEach((box) => {
        box.onmouseenter = () => {
            radioLabel.forEach((label) => {
                label.style.opacity = 1;
            });

            box.lastElementChild.style.opacity = 1;
        };

        box.onmouseleave = () => {
            radioLabel.forEach((label) => {
                label.style.opacity = 1;
            });
        };
    });

    const radioButton = document.querySelectorAll(".radio-box .circle"), 
        imageEmotes = document.querySelectorAll(".emote-image")
        innerProgress = document.querySelector(".inner-progress");
        
    imageEmotes.forEach((emote) => {
        emote.classList.remove("active")
    })

    const emoteBoxes = document.querySelectorAll(".emote-box");

    emoteBoxes.forEach((emoteBox) => {
        randomEmotePosition(emoteBox)
    })

    let currentTargetIndex = null;

    radioButton.forEach((radio, index) => {
        const rangeRating = radio.getAttribute("data-progress-rating");

        radio.onclick = () => {
            innerProgress.style.width = `${rangeRating}%`;

            imageEmotes.forEach((emote) => {
                emote.classList.remove("active");
            })

            imageEmotes[index].classList.add("active");

            if(currentTargetIndex !== index){
                if (currentTargetIndex !== null){
                    setTimeout(() => {
                        randomEmotePosition(emoteBoxes[currentTargetIndex]);
                    }, 10)
                }

                currentTargetIndex = index;

            }
        };


    });
};