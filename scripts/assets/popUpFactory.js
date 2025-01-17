window.popUpFactory = {
	viewStorePopUpContainer: (store) => {
		const popUpContainer = document.getElementById("popUpContainer");
		const infoContainer = elementFactory.createHtmlTag("div", "infoPopUp", "storeInfoContainer");
		const formContainer = elementFactory.createHtmlTag("div", "formPopUp", "storeFormContainer");

		popUpContainer.appendChild(infoContainer);	
		popUpContainer.appendChild(formContainer);	
		popUpContainer.classList.add("show");
		popUpFactory.storeInfoPopUp(store);	
		popUpFactory.updateStoreFormPopUp(store);
	},

	newStorePopUpContainer: () => {
		const popUpContainer = document.getElementById("popUpContainer");
		const formContainer = elementFactory.createHtmlTag("div", "formPopUp", "newStoreFormContainer");

		popUpContainer.appendChild(formContainer);
		popUpContainer.classList.add("show");	
		
		popUpFactory.newStoreFormPopUp();
	},

	categoryPopUpContainer: (category) => {
		const popUpContainer = document.getElementById("popUpContainer");
		const formContainer = elementFactory.createHtmlTag("div", "formPopUp", "categoryFormContainer");

		popUpContainer.appendChild(formContainer);
		popUpContainer.classList.add("show");
		popUpFactory.updateCategoryFormPopUp(category);
	},

	newCategoryPopUpContainer: () => {
		const popUpContainer = document.getElementById("popUpContainer");
		const formContainer = elementFactory.createHtmlTag("div", "formPopUp", "newCategoryFormContainer");

		popUpContainer.appendChild(formContainer);
		popUpContainer.classList.add("show");
		popUpFactory.newCategoryFormPopUp();
	},

	updateStoreFormPopUp: (store) => {
		const formContainer = document.getElementById("storeFormContainer");

		const divCloseButton = document.createElement("div");
		divCloseButton.setAttribute("id", "divClose");
		divCloseButton.appendChild(
			elementFactory.newButton("X", "close")
		);
	
		const storeForm = elementFactory.createHtmlTag("form", "", "storeForm");
		storeForm.setAttribute("uidstore", store.uid);

		const name = elementFactory.newFormOption("name", "Nome", store.name);
		const categoryOption = document.createElement("select");
		infra.populateFormCategory(categoryOption, store.category);
		categoryOption.name = "categorySelect";
		const address = document.createElement("textArea");
		address.placeholder = "Endereço";
		address.value = store.address;
		address.name = "address";
		const postalCode = elementFactory.newFormOption("postalCode", "CEP", store.postal_code);
		const email = elementFactory.newFormOption("email","email@email.com", store.email, "email");
		const phone = elementFactory.newFormOption("phone","(xx) xxxx-xxxx", store.phone, "tel");
	
		const nameLabel = elementFactory.createHtmlSetContentAndClass("labelStore", "Nome da Loja");
		const categoryLabel = elementFactory.createHtmlSetContentAndClass("labelStore", "Categoria");
		const addressLabel = elementFactory.createHtmlSetContentAndClass("labelStore", "Endereço");
		const postalCodeLabel = elementFactory.createHtmlSetContentAndClass("labelStore", "CEP");
		const emailLabel = elementFactory.createHtmlSetContentAndClass("labelStore", "Email");
		const phoneLabel = elementFactory.createHtmlSetContentAndClass("labelStore", "Telefone");

	
		storeForm.appendChild(nameLabel);
		storeForm.appendChild(name);
		storeForm.appendChild(categoryLabel);
		storeForm.appendChild(categoryOption);
		storeForm.appendChild(addressLabel);
		storeForm.appendChild(address);
		storeForm.appendChild(postalCodeLabel);
		storeForm.appendChild(postalCode);
		storeForm.appendChild(emailLabel);
		storeForm.appendChild(email);
		storeForm.appendChild(phoneLabel);
		storeForm.appendChild(phone);

		const divButtons = elementFactory.createHtmlTag("div", "formButtons", "divButtons");
	
		divButtons.appendChild(
			elementFactory.newButton("Remover Loja", "delete", infra.deleteStoreButtonOnClick)
		);	

		divButtons.appendChild(
			elementFactory.saveButton("Salvar", "save", infra.updateStoreButtonOnClick, store)
		);

		formContainer.appendChild(divCloseButton);
		storeForm.appendChild(divButtons);
		formContainer.appendChild(storeForm);
	},	

	newStoreFormPopUp: () => {
		const formContainer = document.getElementById("newStoreFormContainer");
	
		const divCloseButton = document.createElement("div");
		divCloseButton.setAttribute("id", "divClose");
		divCloseButton.appendChild(
			elementFactory.newButton("X", "close")
		);
	
		const storeForm = elementFactory.createHtmlTag("form", "", "storeForm");
		storeForm.setAttribute("uidstore", "")

		const name = elementFactory.newFormOption("name", "Nome")
		const categoryOption = document.createElement("select");
		infra.populateFormCategory(categoryOption);
		categoryOption.name = "categorySelect";
		const address = document.createElement("textArea");
		address.placeholder = "Endereço";
		address.name = "address";
		const postalCode = elementFactory.newFormOption("postalCode", "CEP");
		const email = elementFactory.newFormOption("email","email@email.com", "", "email");
		const phone = elementFactory.newFormOption("phone","(xx) xxxx-xxxx", "", "tel");

		const nameLabel = elementFactory.createHtmlSetContentAndClass("labelStore", "Nome da Loja");
		const categoryLabel = elementFactory.createHtmlSetContentAndClass("labelStore", "Categoria");
		const addressLabel = elementFactory.createHtmlSetContentAndClass("labelStore", "Endereço");
		const postalCodeLabel = elementFactory.createHtmlSetContentAndClass("labelStore", "CEP");
		const emailLabel = elementFactory.createHtmlSetContentAndClass("labelStore", "Email");
		const phoneLabel = elementFactory.createHtmlSetContentAndClass("labelStore", "Telefone");

	
		storeForm.appendChild(nameLabel);
		storeForm.appendChild(name);
		storeForm.appendChild(categoryLabel);
		storeForm.appendChild(categoryOption);
		storeForm.appendChild(addressLabel);
		storeForm.appendChild(address);
		storeForm.appendChild(postalCodeLabel);
		storeForm.appendChild(postalCode);
		storeForm.appendChild(emailLabel);
		storeForm.appendChild(email);
		storeForm.appendChild(phoneLabel);
		storeForm.appendChild(phone);
		storeForm.appendChild(
			elementFactory.saveButton("Salvar", "save", infra.createStoreButtonOnClick)
		);
	
		formContainer.appendChild(divCloseButton);
		formContainer.appendChild(storeForm);
	},

	storeInfoPopUp: (storeObject) => {
		const infoContainer = document.getElementById("storeInfoContainer");
	
		const storeInfo = elementFactory.createHtmlTag("div", "storeInfo");

		const nameStore = elementFactory.createHtmlTagAndSetContent("h2", storeObject.name);
		const categoryStore = elementFactory.createHtmlTagAndSetContent("h3", storeObject.category.name);
		const addresStore = elementFactory.createHtmlTagAndSetContent("p", storeObject.address);
		const cepStore = elementFactory.createHtmlTagAndSetContent("p", storeObject.postal_code);
		const emailStore = elementFactory.createHtmlTagAndSetContent("p", storeObject.email);
		const phoneStore = elementFactory.createHtmlTagAndSetContent("p", storeObject.phone);
		
	
		storeInfo.appendChild(nameStore);
		storeInfo.appendChild(categoryStore);
		storeInfo.appendChild(addresStore);
		storeInfo.appendChild(cepStore);
		storeInfo.appendChild(emailStore);
		storeInfo.appendChild(phoneStore);
	
		const divButtons = elementFactory.createHtmlTag("div", "divButtons");

		divButtons.appendChild(
			elementFactory.newButton("X", "close")
		);

		divButtons.appendChild(
			elementFactory.newButton("Editar", "edit", infra.editButtonOnClick)
		);
	
		infoContainer.appendChild(storeInfo);
		infoContainer.appendChild(divButtons);
	},

	updateCategoryFormPopUp: (category) => {
		const formContainer = document.getElementById("categoryFormContainer");

		const divCloseButton = document.createElement("div");
		divCloseButton.setAttribute("id", "divClose");
		divCloseButton.appendChild(
			elementFactory.newButton("X", "close")
		);

		const categoryForm = elementFactory.createHtmlTag("form", "", "categoryForm");
		categoryForm.setAttribute("uidcategory", category.uid);

		const codeLabel = elementFactory.createHtmlSetContentAndClass("labelCategory", "Código da Categoria");
		const code = elementFactory.newFormOption("code", "Código da Categoria", category.code);
		const nameLabel = elementFactory.createHtmlSetContentAndClass("labelCategory", "Nome da Categoria");
		const name = elementFactory.newFormOption("name", "Nome da Categoria", category.name);
		
		categoryForm.appendChild(codeLabel);
		categoryForm.appendChild(code);
		categoryForm.appendChild(nameLabel);
		categoryForm.appendChild(name);

		const divButtons = elementFactory.createHtmlTag("div", "formButtons", "divButtons");
		divButtons.appendChild(
			elementFactory.newButton("Deletar", "delete", infra.deleteCategoryButtonOnClick)
		);
		divButtons.appendChild(
			elementFactory.saveButton("Salvar", "save", infra.updateCategoryButtonOnClick, category)
		);

		formContainer.appendChild(divCloseButton);
		categoryForm.appendChild(divButtons);
		formContainer.appendChild(categoryForm);
	},

	newCategoryFormPopUp: () => {
		const formContainer = document.getElementById("newCategoryFormContainer");

		const divClose = elementFactory.createHtmlTag("div", "", "divClose");
		divClose.appendChild(
			elementFactory.newButton("X", "close")
		);

		const categoryForm = elementFactory.createHtmlTag("form", "", "categoryForm");
		categoryForm.setAttribute("uidcategory", "");

		const codeLabel = elementFactory.createHtmlSetContentAndClass("labelCategory", "Código da Categoria");
		const code = elementFactory.newFormOption("code", "Código da Categoria");
		const nameLabel = elementFactory.createHtmlSetContentAndClass("labelCategory", "Nome da Categoria");
		const name = elementFactory.newFormOption("name", "Nome da Categoria");
		

		categoryForm.appendChild(codeLabel);
		categoryForm.appendChild(code);
		categoryForm.appendChild(nameLabel);
		categoryForm.appendChild(name);
		categoryForm.appendChild(
			elementFactory.saveButton("Salvar", "save", infra.createCategoryButtonOnClick)
		);

		formContainer.appendChild(divClose);
		formContainer.appendChild(categoryForm);

	},

}
