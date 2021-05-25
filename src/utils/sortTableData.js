export const sortTableData = (data) => {
    const newData = [...data];

    return newData.sort((a, b) => b.cases - a.cases);
}