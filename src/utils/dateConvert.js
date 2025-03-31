export function getPersonYear(value) {
    const date = new Date(value);
    const dateDiffrence = Date.now() - date;
    return  Math.floor(dateDiffrence / 1000 / 60 / 60 / 24 / 365);
}

function getPersonDateOfBirth(year) {
    const timeStamp = year * 365 * 24 * 60 * 60 * 1000;
    const dateDiffrence = Date.now() - timeStamp;
    const date = new Date(dateDiffrence);
    return date;
}
