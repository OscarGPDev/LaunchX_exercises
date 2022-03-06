const renderSuggestionsList = (tagifyElement) => {
    tagifyElement.dropdown.show() // load the list
    tagifyElement.DOM.scope.parentNode.appendChild(tagifyElement.DOM.dropdown)
}
function onSuggestionsListUpdate({ detail: suggestionsElm }) {
    console.log(suggestionsElm)
}

function onSuggestionsListHide() {
    console.log("hide dropdown")
}

function onDropdownScroll(e) {
    console.log(e.detail)
}
const dragsortTagify = (tagifyElement) => {
    new DragSort(tagifyElement.DOM.scope, {
        selector: '.' + tagifyElement.settings.classNames.tag,
        callbacks: {
            dragEnd: (element) => {
                tagifyElement.updateValueByDOMTags()
            }
        }
    });
}
const flavorsData = [
    {value:"Chocolate - 100$/kg", price: "100"},
    {value:"Fresa - 90$/kg", price: "90"},
    {value:"Limón - 110$/kg", price: "110"},
    {value:"Vainilla - 95$/kg", price: "95"},
];
const cakeDecorationsData = [
    {value:"Caramelo - 100$", price: "100"},
    {value:"Frutas - 90$", price: "90"},
    {value:"Fondant - 110$", price: "110"},
    {value:"Velas clásicas - 95$", price: "95"},
    {value:"Velas con números - 95$", price: "95"},
    {value:"Figura de boda - 95$", price: "95"},
];
const cakeFillingData = [
    "Crema para batir",
    "Mermelada de fresa",
    "Mermelada de durazno",
    "Mermelada de piña",
    "Ganache",
];
const flavors = () => {
    const tagifyFlavors = new Tagify(document.getElementById("txtFlavors"), {
        whitelist: flavorsData,
        dropdown: {
            position: "manual",
            maxItems: Infinity,
            enabled: 0,
            classname: "customSuggestionsList"
        },
        enforceWhitelist: true
    });
    dragsortTagify(tagifyFlavors);
    tagifyFlavors.on("dropdown:show", onSuggestionsListUpdate)
        .on("dropdown:hide", onSuggestionsListHide)
        .on('dropdown:scroll', onDropdownScroll)

    renderSuggestionsList(tagifyFlavors);
};
const cakeDecoratons = () => {
    const tagifyCakeDecoratons = new Tagify(document.getElementById("txtCakeDecorations"), {
        whitelist: cakeDecorationsData,
        dropdown: {
            position: "manual",
            maxItems: Infinity,
            enabled: 0,
            classname: "customSuggestionsList"
        },
        enforceWhitelist: true
    });
    dragsortTagify(tagifyCakeDecoratons);
    tagifyCakeDecoratons.on("dropdown:show", onSuggestionsListUpdate)
        .on("dropdown:hide", onSuggestionsListHide)
        .on('dropdown:scroll', onDropdownScroll);
    renderSuggestionsList(tagifyCakeDecoratons);
};
const cakeFilling = () => {
    const tagifyCakeFillings = new Tagify(document.getElementById("txtCakeFilling"), {
        whitelist: cakeFillingData,
        dropdown: {
            position: "manual",
            maxItems: Infinity,
            enabled: 0,
            classname: "customSuggestionsList"
        },
        enforceWhitelist: true
    });
    dragsortTagify(tagifyCakeFillings);
    tagifyCakeFillings.on("dropdown:show", onSuggestionsListUpdate)
        .on("dropdown:hide", onSuggestionsListHide)
        .on('dropdown:scroll', onDropdownScroll);
    renderSuggestionsList(tagifyCakeFillings);
};
window.onload = () => {
    flavors();
    cakeDecoratons();
    cakeFilling();
};