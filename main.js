(() => {
    addCSSFile();
    for (const file of ["assets/CardFactory.js", "styles/CardStyle.js"]) {
        const script = document.createElement("script");
        script.setAttribute("src", `scripts/${file}`);
        document.body.appendChild(script);
    }

    window.addEventListener("load", () => {
        const main = document.createElement("main");
        document.body.appendChild(main);

        main.appendChild(
            CardFactory.CardStore({
                category: storeObject.category,
                name: storeObject.name,
                onClickCard: () => {
                    newPopUpContainer(storeObject);
                    addClearPageEventTo("popUpContainer");
                },
                
            })
        );
        main.appendChild(
            CardFactory.CardCategory({
                Id: 3,
                Name: "Eletrônicos-Eletrodoasdasdasdasdasd",
                onClickEdit: () => {
                    window.alert("Click 2");
                },
                onClickStores: () => {
                    window.alert("Click 2");
                },
            })
        );
    });
})();

function addCSSFile() {
    const cssLink = document.createElement("link");

    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = "style.css";

    document.head.appendChild(cssLink);
}

const storeObject = {
    name: "BubbleKill",
    category: "Alimentação",
    address:
        "Av. Dep. Benedito Matarazzo, 9403 - Jardim Oswaldo Cruz, São José dos Campos - SP",
    postal_code: "12215-160",
    email: "scontato@bubblekill.com.br",
    phone: "(12) 3924-3000",
};

function infoPage(storeObject) {
    const infoContainer = document.createElement("div");
    infoContainer.setAttribute("id", "infoContainer");

    //DIVISÃO COM AS INFORMAÇÕES
    const divInfo = document.createElement("div");
    divInfo.setAttribute("class", "divInfo");

    const nameStore = document.createElement("h2");
    const categoryStore = document.createElement("h3");
    const addresStore = document.createElement("p");
    const cepStore = document.createElement("p");
    const emailStore = document.createElement("p");
    const phoneStore = document.createElement("p");

    nameStore.textContent = storeObject.name;
    categoryStore.textContent = storeObject.category;
    addresStore.textContent = storeObject.address;
    cepStore.textContent = storeObject.postal_code;
    emailStore.textContent = storeObject.email;
    phoneStore.textContent = storeObject.phone;

    divInfo.appendChild(nameStore);
    divInfo.appendChild(categoryStore);
    divInfo.appendChild(addresStore);
    divInfo.appendChild(cepStore);
    divInfo.appendChild(emailStore);
    divInfo.appendChild(phoneStore);

    // DIVISÃO COM OS BOTÕES
    const divButtons = document.createElement("div");
    divButtons.setAttribute("class", "divButtons");
    divButtons.appendChild(closeButton());
    divButtons.appendChild(editButton());

    infoContainer.appendChild(divInfo);
    infoContainer.appendChild(divButtons);

    return infoContainer;
}

function closeButton() {
    const bClose = document.createElement("div");
    bClose.setAttribute("id", "bClose");
    const close = document.createElement("input");
    close.setAttribute("id", "close");
    close.type = "button";
    close.value = "X";
    bClose.appendChild(close);
    return bClose;
}

function editButton() {
    const bEdit = document.createElement("div");
    bEdit.setAttribute("id", "bEdit");
    const edit = document.createElement("input");
    edit.setAttribute("id", "edit");
    edit.type = "button";
    edit.value = "Editar";
    edit.onclick = function () {
        const formPage = document.querySelector("#formContainer");
        const infoPage = document.querySelector("#infoContainer");
        infoPage.style.display = "none";
        formPage.style.display = "flex";
    };
    bEdit.appendChild(edit);
    return bEdit;
}

function saveButton() {
    const bSave = document.createElement("div");
    bSave.setAttribute("id", "bEdit");
    const save = document.createElement("input");
    save.setAttribute("id", "save");
    save.type = "Button";
    save.value = "Salvar";

    bSave.appendChild(save);
    return bSave;
}

function addClearPageEventTo(containerId) {
    const pageCard = document.getElementById(containerId);
    pageCard.classList.add("show");
    pageCard.addEventListener("click", (e) => {
        if (e.target.id == containerId || e.target.id == "close") {
            pageCard.classList.remove("show");
            pageCard.textContent = "";
        }
    });
}

async function populateFormCategory(defaultCategory, categoryForm) {

    const categoriesList = await getCategoriesList();

    let defaultOption = newCategoryOption(defaultCategory);
    categoryForm.add(defaultOption);
    categoryForm.selectedIndex = 0;

    for (let index = 0; index < categoriesList.length; index++) {
        const categoryOption = categoriesList[index].name;
        if (categoryOption != defaultCategory) {
            categoryForm.add(newCategoryOption(categoryOption));
        }
    }
}

function newCategoryOption(option) {
    let newOption = document.createElement("option");
    newOption.text = option;
    return newOption;
}


function formPage(store) {
    const formContainer = document.createElement("div");
    formContainer.setAttribute("id", "formContainer");

    const divCloseButton = document.createElement("div");
    divCloseButton.setAttribute("id", "divClose");
    divCloseButton.appendChild(closeButton());

    //#region Formulário
    const divForm = document.createElement("form");
    const name = document.createElement("input");
    // name.placeholder = "Nome";
    name.value = store.name;

    const categoryForm = document.createElement("select");
    populateFormCategory(store.category, categoryForm);

    const address = document.createElement("textArea");
    // address.placeholder = "Endereço";
    address.value = store.address;
    const postalCode = document.createElement("input");
    // postalCode.placeholder = "CEP";
    postalCode.value = store.postal_code;
    const email = document.createElement("input");
    // email.placeholder = "email";
    email.value = store.email;
    const phone = document.createElement("input");
    // phone.placeholder = "Telefone";
    phone.value = store.phone;

    divForm.appendChild(name);
    divForm.appendChild(categoryForm);
    divForm.appendChild(address);
    divForm.appendChild(postalCode);
    divForm.appendChild(email);
    divForm.appendChild(phone);
    //#endregion

    const divSaveButton = document.createElement("div");
    divSaveButton.setAttribute("id", "divSave");
    divSaveButton.appendChild(saveButton());

    formContainer.appendChild(divCloseButton);
    formContainer.appendChild(divForm);
    formContainer.appendChild(divSaveButton);

    return formContainer;
}

function newPopUpContainer(storeObject) {
    const popUpContainer = document.getElementById("popUpContainer");
    popUpContainer.appendChild(infoPage(storeObject));
    popUpContainer.appendChild(formPage(storeObject));
}

function createMainContainer() {
    const searchContainer = createHtmlTag(
        "div",
        "searchContainer",
        "searchContainer"
    );
    const storesContainer = createHtmlTag(
        "div",
        "innerContainer",
        "storesContainer"
    );
    const categoriesContainer = createHtmlTag(
        "div",
        "innerContainer",
        "categoriesContainer"
    );
    const popUpContainer = createHtmlTag(
        "div",
        "popUpContainer",
        "popUpContainer"
    );
    const mainContainer = createHtmlTag(
        "div",
        "mainContainer",
        "mainContainer"
    );

    mainContainer.appendChild(popUpContainer);
    mainContainer.appendChild(searchContainer);
    mainContainer.appendChild(storesContainer);
    mainContainer.appendChild(categoriesContainer);
    document.body.appendChild(mainContainer);
}

function createHtmlTag(tag, cssClass, id = "") {
    const container = document.createElement(tag);

    if (id) {
        container.setAttribute("id", id);
    }

    container.setAttribute("class", cssClass);

    return container;
}

function displayInnerContainer(containerId) {
    const innerContainers =
        document.getElementsByClassName("innerContainer");

    for (let index = 0; index < innerContainers.length; index++) {
        const container = innerContainers[index];

        if (container.classList.contains("activeInnerContainer")) {
            container.classList.remove("activeInnerContainer");
        }
    }

    const activeContainer = document.getElementById(containerId);
    activeContainer.classList.add("activeInnerContainer");
}

createMainContainer();


const BASE_URL = "http://estabelecimentos.letscode.dev.netuno.org:25390/services";

const uidGroupDefinition = {
    "group": {
        "uid": "0da148be-b828-46b7-b1e7-906e3846a521"
    }
} 

function postRequisition(url, body) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open("POST", url, true);
        request.setRequestHeader("Content-type", "application/json")
        request.send(JSON.stringify(body));

        request.onload = function () {
            console.log("Requisition status:", this.status);
            if (this.status >= 200 && this.status < 300) {
                resolve(this.responseText);
            } else {
                reject({
                    status: this.status,
                    statusText: request.statusText
                });
            }
        };
        
        request.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
    });
}

async function getCategoriesList(keyword) {
    let url = BASE_URL + "/category/list";

    let body =  uidGroupDefinition;
    body.text = keyword;

    let data = await postRequisition(url, body);
    const categories = JSON.parse(data);

    return categories;
}

async function getStoresList(keyWord, uidCategory) {
    let url = BASE_URL + "/establishment/list";

    let body = uidGroupDefinition;
    body.text = keyWord;

    if (uidCategory) {
        body.category = {"uid": uidCategory};        
    }    

    let data = await postRequisition(url, body);
    const stores = JSON.parse(data);

    return stores;
}

getStoresList();


