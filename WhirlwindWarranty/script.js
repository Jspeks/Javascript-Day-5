const inputFields = ["First Name",
"Last Name",
"Company Name",
"Email",
"Phone ",
"Fax Number",
"Address",
"City",
"State",
"Zip",
"Country",
"Unit Information",
"Date of Purchase",
"Model",
"Warranty Serial Number"]

const formContainer = document.createElement("div")
formContainer.className = "form-container"



inputFields.forEach((name) => {
    const processedName = name.toLowerCase();
    const container = document.createElement("div");
    container.className = "input-container";
    const label = document.createElement("label");
    label.textContent = processedName;
    const input = document.createElement("input");
    input.type = "text";
    input.title = processedName;
    input.name = processedName;
    container.appendChild(label);
    container.appendChild(input);
    formContainer.appendChild(container)
})

const saveButton = document.createElement("button");
saveButton.textContent = "Save";

const closeButton = document.createElement("button");
closeButton.textContent = "close";

const buttonContainer = document.createElement("div")
buttonContainer.className = "button-container";
buttonContainer.style.display = "flex"
buttonContainer.style.flexDirection = "row"

formContainer.appendChild(saveButton);
formContainer.appendChild(closeButton);
document.body.appendChild(formContainer);