module.exports = getPaginatedArray = (data, page, size) => {

    let paginatedArray = [];

    if ((page * size) < data.length) {
        for (let i = (page * size); i < (size + (page * size)); i++) {
            if (i >= data.length) {
                break;
            }
            paginatedArray.push(data[i]);
        }
    }
    return paginatedArray;
};