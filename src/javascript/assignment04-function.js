function displayImageList(imageArray) {
    let htmlOutput = {
        messageNonArray: "",
        messageArray: "",
        list: "",
        mixedList: ""
    };

    if (!Array.isArray(imageArray)) {
        htmlOutput.messageNonArray = `<p>Invoking with a ${typeof imageArray}, not an array.</p>`;
        htmlOutput.list = `<li class="error">Error: you must provide an array. '${imageArray}' is not an array</li>`;
    } else {
        const allNumbers = imageArray.every(item => typeof item === 'number');
        const allBooleans = imageArray.every(item => typeof item === 'boolean');
        const allStrings = imageArray.every(item => typeof item === 'string');

        if (allNumbers) {
            htmlOutput.messageArray = `<p>Invoking with an array of numbers, not string image names (See Console for function error message).</p>`;
            console.error("Error: Array contains only numbers, expected string filenames.");
        } else if (allBooleans) {
            htmlOutput.messageArray = `<p>Invoking with an array of booleans, not string image names (See Console for function error message).</p>`;
            console.error("Error: Array contains only booleans, expected string filenames.");
        } else if (allStrings) {
            htmlOutput.messageArray = `<p>Invoking with a valid array of image names.</p>`;
            htmlOutput.list = imageArray.map(item => `<li><img id="greeting-img" src="./src/assets/images/${item}" alt="${item}"></li>`).join('');
        } else {
            htmlOutput.messageArray = `<p>Invoking with an array of some image names and some junk (See Console for function error messages).</p>`;
            htmlOutput.mixedList = imageArray.map(item => {
                if (typeof item === 'string') {
                    return `<li><img id="greeting-img" src="./src/assets/images/${item}" alt="${item}"></li>`;
                } else {
                    console.error(`Error: '${item}' is not a valid filename. It must be a string.`);
                    return '';
                }
            }).join('');
        }
    }

    return htmlOutput;
}

// Function 2: Listing hyperlinks
function displayLinkList(linkArray) {
    let htmlOutput = {
        messageNonArray: "",
        messageArray: "",
        list: "",
        mixedList: ""
    };

    if (!Array.isArray(linkArray)) {
        htmlOutput.messageNonArray = `<p>Trying with a ${typeof linkArray}, not an array...</p>`;
        htmlOutput.list = `<li class="error">Error: you must provide an array. '${linkArray}' is not an array</li>`;
    } else {
        const allStrings = linkArray.every(item => typeof item === 'string');
        const allBooleans = linkArray.every(item => typeof item === 'boolean');

        if (allBooleans) {
            htmlOutput.messageArray = `<p>Trying with an array that contains booleans, and not string urls...</p>`;
            console.error("Error: Array contains only booleans, expected string URLs.");
        } else if (allStrings) {
            htmlOutput.messageArray = `<p>Trying with a valid array of link URLs...</p>`;
            htmlOutput.list = linkArray.map(item => `<li><a href="${item}">${item}</a></li>`).join('');
        } else {
            htmlOutput.messageArray = `<p>Trying with a array of link URLs and also junk...</p>`;
            htmlOutput.mixedList = linkArray.map(item => {
                if (typeof item === 'string') {
                    return `<li><a href="${item}">${item}</a></li>`;
                } else {
                    console.error(`Error: '${item}' is not a valid URL. It must be a string.`);
                    return '';
                }
            }).join('');
        }
    }

    return htmlOutput;
}

function displayNameList(nameArray, listType = 'ul') {
    let htmlOutput = {
        messageNonArray: "",
        messageArray: "",
        list: "",
        mixedList: ""
    };

    if (!Array.isArray(nameArray)) {
        htmlOutput.messageNonArray = `<p>Trying with a ${typeof nameArray}, not an array...</p>`;
        htmlOutput.list = `<li class="error">Error: you must provide an array. '${nameArray}' is not an array</li>`;
    } else if (nameArray.length < 2) {
        htmlOutput.messageArray = "<p>Trying with an array that has less than two items...</p>";
        htmlOutput.list = '<li class="error">Error: Array must contain at least two items or more</li>';
    } else {
        const allStrings = nameArray.every(item => typeof item === 'string');

        if (allStrings) {
            htmlOutput.messageArray = `<p>Trying with a valid array of names...</p>`;
            if (listType !== 'ul' && listType !== 'ol') {
                htmlOutput.messageArray += `<p>Error: In HTML only UL or OL lists can be made. There is no '${listType}' list element.</p>`;
                listType = 'ul';
            }
            htmlOutput.list = `<${listType}>` + nameArray.map(name => `<li>${name}</li>`).join('') + `</${listType}>`;
        } else {
            htmlOutput.messageArray = `<p>Trying with an array of names and also junk...</p>`;
            if (listType !== 'ul' && listType !== 'ol') {
                htmlOutput.messageArray += `<p>Error: In HTML only UL or OL lists can be made. There is no '${listType}' list element.</p>`;
                listType = 'ul';
            }
            htmlOutput.mixedList = `<${listType}>` + nameArray.map(item => {
                if (typeof item === 'string') {
                    return `<li>${item}</li>`;
                } else {
                    console.error(`Error: '${item}' is not a valid name. It must be a string.`);
                    return '';
                }
            }).join('') + `</${listType}>`;
        }
    }

    return htmlOutput;
}