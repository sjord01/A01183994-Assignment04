function displayImageList(imageArray) {
    if (!Array.isArray(imageArray)) {
        return `<li class="error">Error: you must provide an array. '${imageArray}' is not an array</li>`;
    }

    let htmlList = "";
    imageArray.forEach(item => {
        if (typeof item === 'string') {
            htmlList += `<li><img src="${pathToImages}${item}" alt="${item}"></li>`;
        } else {
            console.error(`Error: '${item}' is not a valid filename. It must be a string).`);
        }
    });

    return htmlList;
}

// Function 2: Listing hyperlinks
function displayLinkList(linkArray) {
    if (!Array.isArray(linkArray)) {
        return "Error: Parameter must be an array of URLs.";
    }

    let htmlList = "<ul>";
    linkArray.forEach(item => {
        if (typeof item === 'string') {
            htmlList += `<li><a href="${item}">${item}</a></li>`;
        } else {
            console.error(`Error: "${item}" is not a valid URL (must be a string).`);
        }
    });
    htmlList += "</ul>";

    return htmlList;
}

// Function 3: Listing names
function displayNameList(nameArray, listType = 'ul') {
    if (!Array.isArray(nameArray)) {
        return "Error: First parameter must be an array of names.";
    }
    if (nameArray.length < 2) {
        return "Error: Array must contain at least two names.";
    }
    if (listType !== 'ul' && listType !== 'ol') {
        return "Error: Second parameter must be either 'ul' or 'ol'.";
    }

    let htmlList = `<${listType}>`;
    nameArray.forEach(name => {
        if (typeof name === 'string') {
            htmlList += `<li>${name}</li>`;
        } else {
            console.error(`Error: "${name}" is not a valid name (must be a string).`);
        }
    });
    htmlList += `</${listType}>`;

    return htmlList;
}