const stockData = [
    { value: "Chocolate", stock: "100", type: "Sabor" },
    { value: "Fresa", stock: "90", type: "Sabor" },
    { value: "Limón", stock: "110", type: "Sabor" },
    { value: "Vainilla", stock: "95", type: "Sabor" },
    { value: "Caramelo", stock: "100", type: "Decoración" },
    { value: "Frutas", stock: "90", type: "Decoración" },
    { value: "Fondant", stock: "110", type: "Decoración" },
    { value: "Velas clásicas", stock: "95", type: "Decoración" },
    { value: "Velas con números", stock: "95", type: "Decoración" },
    { value: "Figura de boda$", stock: "95", type: "Decoración" },
    { value: "Crema para batir", stock: "95", type: "Relleno" },
    { value: "Mermelada de fresa", stock: "95", type: "Relleno" },
    { value: "Mermelada de durazno", stock: "95", type: "Relleno" },
    { value: "Mermelada de piña", stock: "95", type: "Relleno" },
    { value: "Ganache", stock: "95", type: "Relleno" }
];
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
const updateStock = (data) => {
    const stockTableBody = document.getElementById("tblStock");
    let tableBody = ""
    data.forEach(item => {
        tableBody += `
        <tr>
            <td>${item.value}</td>
            <td>${item.type}</td>
            <td>${item.stock}</td>
            <td>${item.deliveryDate?.toLocaleDateString()}</td>
        </tr>

        `;
        stockTableBody.innerHTML = tableBody;
    });
};
const getStockData = () => {
    const time = setInterval(() => {
        const actualDate = new Date();
        const limitDate = new Date();
        limitDate.setDate(limitDate.getDate() + 20);
        const newStockData = stockData.map(item => {
            const newItem = { ...item };
            newItem.stock = Math.floor(Math.random() * (100))
            newItem.deliveryDate = randomDate(actualDate, limitDate);
            return newItem;
        });
        updateStock(newStockData);
    }, 2000);
    
}
window.onload = () => {
    getStockData();
};