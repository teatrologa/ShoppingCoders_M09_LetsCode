window.popUpFactory = {
	viewStorePopUpContainer: (store) => {
		const popUpContainer = document.getElementById("popUpContainer");
		const infoContainer = elementFactory.createHtmlTag("div", "infoPopUp", "storeInfoContainer");
		const formContainer = elementFactory.createHtmlTag("div", "formPopUp", "storeFormContainer");

		popUpContainer.appendChild(infoContainer);	
		popUpContainer.appendChild(formContainer);	
		
		popUpFactory.storeInfoPopUp(store);	
		popUpFactory.updateStoreFormPopUp(store);
	},

	newStorePopUpContainer: () => {
		const popUpContainer = document.getElementById("popUpContainer");
		const formContainer = elementFactory.createHtmlTag("div", "formPopUp", "storeFormContainer");

		popUpContainer.appendChild(formContainer);	
		
		popUpFactory.newStoreFormPopUp();
	},

	newCategoryPopUpContainer: (category) => {
		const popUpContainer = document.getElementById("popUpContainer");

		const formContainer = elementFactory.createHtmlTag("div", "formPopUp", "categoryFormContainer");

		popUpContainer.appendChild(formContainer);
		
		popUpFactory.updateCategoryFormPopUp(category);
	},


	//Store

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
		const postalCode = elementFactory.newFormOption("postalCode", "CEP", store.postal_code)
		const email = elementFactory.newFormOption("email","email@email.com", store.email, "email")
		const phone = elementFactory.newFormOption("phone","(xx) xxxx-xxxx", store.phone, "tel")

		const saveMessage = elementFactory.createHtmlTag("p", "saveMessage", "saveMessage");
	
		storeForm.appendChild(name);
		storeForm.appendChild(categoryOption);
		storeForm.appendChild(address);
		storeForm.appendChild(postalCode);
		storeForm.appendChild(email);
		storeForm.appendChild(phone);

		const divButtons = elementFactory.createHtmlTag("div", "", "divButtons");
	
		divButtons.appendChild(
			elementFactory.newButton("Remover Loja", "delete", infra.deleteStoreButtonOnClick)
		);	

		divButtons.appendChild(
			elementFactory.newButton("Salvar", "save", infra.updateStoreButtonOnClick)
		);

		formContainer.appendChild(divCloseButton);
		formContainer.appendChild(storeForm);
		formContainer.appendChild(divButtons);
	},	

	newStoreFormPopUp: () => {
		const formContainer = document.getElementById("storeFormContainer");
	
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
		const postalCode = elementFactory.newFormOption("postalCode", "CEP")
		const email = elementFactory.newFormOption("email","email@email.com", "email")
		const phone = elementFactory.newFormOption("phone","(xx) xxxx-xxxx", "tel")
	
		storeForm.appendChild(name);
		storeForm.appendChild(categoryOption);
		storeForm.appendChild(address);
		storeForm.appendChild(postalCode);
		storeForm.appendChild(email);
		storeForm.appendChild(phone);
		
		const divSaveButton = elementFactory.createHtmlTag("div", "", "divSave"); //TODO: arrumar o botao
		divSaveButton.setAttribute("id", "divSave");
		divSaveButton.appendChild(
			elementFactory.newButton("Salvar", "save", infra.newStoreButtonOnClick)
		);
	
		formContainer.appendChild(divCloseButton);
		formContainer.appendChild(storeForm);
		formContainer.appendChild(divSaveButton);
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


	//Category

	updateCategoryFormPopUp: (category) => {
		const formContainer = document.getElementById("categoryFormContainer");

		const divCloseButton = document.createElement("div");
		divCloseButton.setAttribute("id", "divClose");
		divCloseButton.appendChild(
			elementFactory.newButton("X", "close")
		);

		const categoryForm = elementFactory.createHtmlTag("form", "", "categoryForm");
		categoryForm.setAttribute("uidcategory", category.uid);

		const code = elementFactory.newFormOption("code", "Código da Categoria", category.code);
		const name = elementFactory.newFormOption("name", "Nome da Categoria", category.name);
		
		const saveMessage = elementFactory.createHtmlTag("p", "saveMessage", "saveMessage");
		
		categoryForm.appendChild(code);
		categoryForm.appendChild(name);
		categoryForm.appendChild(saveMessage);

		const divButtons = document.createElement("div");
		divButtons.setAttribute("id", "divButtons");
		divButtons.appendChild(
			elementFactory.newButton("Deletar", "delete", deleteButtonOnClick)
		);
		divButtons.appendChild(
			elementFactory.newButton("Salvar", "save", saveButtonOnClick)
		);

		formContainer.appendChild(divCloseButton);
		formContainer.appendChild(categoryForm);
		formContainer.appendChild(divButtons);
	},

	newCategoryFormPopUp: () => {
		const formContainer = document.getElementById("categoryFormContainer");

		const divCloseButton = document.createElement("div");
		divCloseButton.setAttribute("id", "divClose");
		divCloseButton.appendChild(
			elementFactory.newButton("X", "close")
		);

		const categoryForm = elementFactory.createHtmlTag("form", "", "categoryForm");
		categoryForm.setAttribute("uidcategory", "");

		const code = elementFactory.newFormOption("code", "Código da Categoria");
		const name = elementFactory.newFormOption("name", "Nome da Categoria");
		const saveMessage = elementFactory.createHtmlTag("p", "saveMessage", "saveMessage");
		
		categoryForm.appendChild(code);
		categoryForm.appendChild(name);
		categoryForm.appendChild(saveMessage);

		const divButtons = document.createElement("div");
		divButtons.setAttribute("id", "divButtons");
		divButtons.appendChild(
			elementFactory.newButton("Deletar", "delete", deleteButtonOnClick)
		);
		divButtons.appendChild(
			elementFactory.newButton("Salvar", "save", saveButtonOnClick)
		);

		formContainer.appendChild(divCloseButton);
		formContainer.appendChild(categoryForm);
		formContainer.appendChild(divButtons);

	},

}
