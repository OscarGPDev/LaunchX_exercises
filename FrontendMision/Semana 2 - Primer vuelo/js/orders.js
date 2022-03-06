const flavorsData = [
    "Chocolate",
    "Fresa",
    "Limón",
    "Vainilla",
];
const cakeDecorationsData = [
    "Caramelo",
    "Frutas",
    "Fondant",
    "Velas clásicas",
    "Velas con números",
    "Figura de boda",
];
const cakeFillingData = [
    "Crema para batir",
    "Mermelada de fresa",
    "Mermelada de durazno",
    "Mermelada de piña",
    "Ganache",
];
const names = ["Juan", "Luis", "Elena", "Maria"];
const lastNames = ["Martínez", "Rodriguez", "Pérez", "García", "Mendez", "Hernandez"];
const emailsDomains = ["@hotmail.com", "@gmail.com", "@outlook.com"]
const updateOrders = (data) => {
    const ordersTableBody = document.getElementById("tblOrders");
    let tableBody = ""
    data.forEach(item => {
        tableBody += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.phone}</td>
            <td>${item.email}</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            <td>${item.flavors}</td>
            <td>${item.fillings}</td>
            <td>${item.decorations}</td>
        </tr>

        `;
        ordersTableBody.innerHTML = tableBody;
    });
};
const createRandomStringFromArray =(sourceArray)=>{
    const maxValidArrayIndex=sourceArray.length-1;
    let maxSize = Math.floor(Math.random() * (maxValidArrayIndex));
    let iterator = 0;
    let bucket = [];
    for (iterator = 0; iterator <= maxSize; iterator++) {
        bucket.push(sourceArray[Math.floor(Math.random() * (maxValidArrayIndex))]);
    }
    return bucket.join(', ');
};
const getOrdersData = () => {
    const time = setInterval(() => {

        const newStockData = Array.apply(null, Array(Math.floor(Math.random() * (10)))).map(item => {
            const newItem = {
                id: 0,
                name: "",
                phone: "",
                email: "",
                flavors: "",
                fillings: "",
                decorations: ""
            };
            newItem.id = Math.floor(Math.random() * (1000))
            const name = names[Math.floor(Math.random() * (3))];
            newItem.name = `${name} ${lastNames[Math.floor(Math.random() * (5))]} ${lastNames[Math.floor(Math.random() * (5))]}`
            newItem.email = `${name}${emailsDomains[Math.floor(Math.random() * (2))]}`
            newItem.decorations = createRandomStringFromArray(cakeDecorationsData);
            newItem.fillings = createRandomStringFromArray(cakeFillingData);
            newItem.flavors = createRandomStringFromArray(flavorsData);
            return newItem;
        });
        updateOrders(newStockData);
    }, 2000);

}
window.onload = () => {
    getOrdersData();
};
