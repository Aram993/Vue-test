export const convertDate = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();

    return `${year}-0${month + 1}-0${day}`;
}