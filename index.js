// By default there are no tasks
let taskList = [];
let newTask = {}; // By default empty;
let counterId = 0;


//************************************************************************************************************
function addTask(event) {
	let taskItem = document.getElementById("taskItem");
	event.preventDefault();

	if (taskItem.value.length > 0 && newTask.priority !== undefined && newTask.completionDate !== undefined) {
		counterId++;
		newTask.title = taskItem.value;
		newTask.id = counterId;
		newTask.visible = true;

		let modifiedTask = JSON.parse(JSON.stringify(newTask)); // DEEP COPY
		taskList.push(modifiedTask);
		taskItem.value = "";
		showList();
	} else {
		alert("Please ensure that you enter priority, date and value, to add!");
	}
}

function selectPriority(event) {
	newTask.priority = event.target.value;
}

function setDate(event) {
	newTask.completionDate = event.target.value;
}

//**********************************************************************************************************/
function showList() {
	let listContainer = document.getElementById("list");
	listContainer.innerHTML = ""; /// DELETE THE PREVIOUS HTML BEFORE which was there

	for (let i = 0; i < taskList.length; i++) {
		let listItem = document.createElement("li");

		if (taskList[i].visible === true) {

			let pPriority = document.createElement("p");
			pPriority.textContent = taskList[i].priority;

			let pTitle = document.createElement("p");
			pTitle.textContent = taskList[i].title;

			let pDate = document.createElement("p");
			pDate.textContent = taskList[i].completionDate;

			if (taskList[i].priority === "Low") {
				listItem.classList.add('priorityLow');

			} else {
				listItem.classList.add('priorityHigh');
				
			}

			listItem.appendChild(pTitle);
			listItem.appendChild(pPriority);
			listItem.appendChild(pDate);
			listContainer.appendChild(listItem);
		}
	}
}

//**********************************************************************************************************/
function searchTasks() {
	let searchKeyword = document.getElementById("search-input");

	for (let i = 0; i < taskList.length; i++) {
		taskList[i].visible = false;
	}
	showList();

	taskList.filter((task) => {
		if (task.title.includes(searchKeyword.value)) {
			task.visible = true;
			return;
		}
	});
	showList();
}

// Your assignment is to make the application better in UI
// You have to improve or generalize common code
// Whosoever does the best changes by monday
// I will continue on their applicaiton and we will learn drag and drop event
