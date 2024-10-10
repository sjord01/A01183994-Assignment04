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

function updateDOMSingleHTMLElement (elementId, content) {
    const element = document.getElementById(elementId);
    if (element) element.innerHTML = content;
};

function updateDOM(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        let htmlContent = '';

        // Handle non-array message
        if (content.messageNonArray) {
            htmlContent += content.messageNonArray;
        }

        // Handle array message
        if (content.messageArray) {
            htmlContent += content.messageArray;
        }

        // Handle list for valid arrays
        if (content.list) {
            htmlContent += `<ul>${content.list}</ul>`;
        }

        // Handle list for mixed content
        if (content.mixedList) {
            htmlContent += `<ul>${content.mixedList}</ul>`;
        }

        // Update the element's content
        element.innerHTML += htmlContent;
    }
}

// Function to get greeting based on time
function getGreeting() {
    const hour = new Date().getHours();
    return hour < 12 ? greetingConfig.morning : greetingConfig.evening;
}

// Function to create greeting HTML
function createGreetingHtml(greeting) {
    return `<p>${greeting.message}</p>
    <img id="greeting-img" src="${greeting.imageSrc}" alt="${greeting.message}">`;
}

// Function to display time-based greeting
function displayGreeting() {
    const greeting = getGreeting();
    const greetingHtml = createGreetingHtml(greeting);
    updateDOMSingleHTMLElement('greeting', greetingHtml);
}

// Call the greeting function when the page loads
document.addEventListener('DOMContentLoaded', displayGreeting);

updateDOM('non-array-invocations', displayImageList(notAnArrayOfImages));
updateDOM('non-array-invocations', displayImageList(alsoNotAnArrayOfImages));

updateDOM('wrong-array-data-invocation', displayImageList(anArrayOfNumbers));
updateDOM('wrong-array-data-invocation', displayImageList(anArrayOfBooleans));
updateDOM('wrong-array-data-invocation', displayImageList(arrayOfImages));
updateDOM('wrong-array-data-invocation', displayImageList(arrayOfSomeImages));

updateDOM('array-links-invocation', displayLinkList(notAnArrayOfLinks));
updateDOM('array-links-invocation', displayLinkList(alsoNotAnArrayOfLinks));
updateDOM('array-links-invocation', displayLinkList(arrayOfLinks));
updateDOM('array-links-invocation', displayLinkList(anotherArrayOfLinks));

updateDOM('array-names-invocation', displayNameList(notAnArrayOfNames));
updateDOM('array-names-invocation', displayNameList(arrayOfNamesTooSmall));
updateDOM('array-names-invocation', displayNameList(arrayOfNames));
updateDOM('array-names-invocation', displayNameList(arrayOfNames, 'ol'));
updateDOM('array-names-invocation', displayNameList(arrayOfNames, 'cheeseburger'));