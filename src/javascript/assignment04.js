// Configuration object
const greetingConfig = {
    morning: {
        message: 'Good morning, the sun is shining',
        imageSrc: './src/assets/images/sun.png'
    },
    evening: {
        message: 'Good evening, the moon is full',
        imageSrc: './src/assets/images/moon.png'
    }
};

// Function to update the DOM with the result of a function call
const updateDOM = (elementId, content) => {
    const element = document.getElementById(elementId);
    if (element) {
        if (element.innerHTML === '') {
            element.innerHTML = '<ul>' + content + '</ul>';
        } else {
            element.querySelector('ul').innerHTML += content;
        }
    }
};

// Function to get greeting based on time
const getGreeting = () => {
    const hour = new Date().getHours();
    return hour < 12 ? greetingConfig.morning : greetingConfig.evening;
};

// Function to create greeting HTML
const createGreetingHtml = ({ message, imageSrc }) => 
    `<p>${message}</p>
    <img id="greeting-img" src="${imageSrc}" alt="${message}">`;

// Function to display time-based greeting
const displayGreeting = () => {
    const greeting = getGreeting();
    const greetingHtml = createGreetingHtml(greeting);
    updateDOM('greeting', greetingHtml);
};

// Call the greeting function when the page loads
document.addEventListener('DOMContentLoaded', displayGreeting);

updateDOM('non-array-invocations', displayImageList(notAnArrayOfImages));
updateDOM('non-array-invocations', displayImageList(alsoNotAnArrayOfImages));

/*
// Function 1: Listing images
updateDOM('imageList1', displayImageList(arrayOfImages));
updateDOM('imageList2', displayImageList(arrayOfSomeImages));
updateDOM('imageList3', displayImageList(notAnArrayOfImages));
updateDOM('imageList4', displayImageList(anArrayOfNumbers));

// Function 2: Listing hyperlinks
updateDOM('linkList1', displayLinkList(arrayOfLinks));
updateDOM('linkList2', displayLinkList(anotherArrayOfLinks));
updateDOM('linkList3', displayLinkList(notAnArrayOfLinks));
updateDOM('linkList4', displayLinkList(alsoNotAnArrayOfLinks));

// Function 3: Listing names
updateDOM('nameList1', displayNameList(arrayOfNames));
updateDOM('nameList2', displayNameList(arrayOfNames, 'ol'));
updateDOM('nameList3', displayNameList(notAnArrayOfNames));
updateDOM('nameList4', displayNameList(arrayOfNamesTooSmall));
updateDOM('nameList5', displayNameList(arrayOfNames, 'invalid'));
*/