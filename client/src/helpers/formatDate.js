export const formatDate = (data) => {
    let newDate = new Date(data);
    let options = {
        year: "numeric",
        month: "2-digit",
        day: "numeric"
    };

    return newDate.toLocaleDateString("en", options);
};