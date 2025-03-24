export const convertDate = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    return (day > 9) ? `${year}-0${month + 1}-${day}` : `${year}-0${month + 1}-0${day}`;
}