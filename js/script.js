function addIssues() {
	event.preventDefault();
	const issueList = document.querySelector('#issueList');
	const inputDescr = document.querySelector('#issueDescInput');
	const inputSelect = document.querySelector('#issueSeverityInput');
	const inputAssign = document.querySelector('#issueAssignedInput');

	const result = {
		id: chance.guid(),
		description: inputDescr.value,
		severity: inputSelect.value,
		assigned: inputAssign.value,
		status: 'Open'
	};
	issueList.innerHTML += createIssueCard(result); // создание карточки issue на странице
}

function createIssueCard(obj) {
	// формирование карточки issue
	return `
        <div id="${obj.id}" class="well jumbotron">
            <h6><i class="fa fa-address-card" aria-hidden="true"></i> Issue ID: ${obj.id}</h6>
            <p ></p><i class="fa fa-question-circle" aria-hidden="true"></i><span id="status-${obj.id}" class="status">${obj.status}</span></p>
            <h3 class="issueId" >${obj.description}</h3>
            <p>Severity :<span class="severity"> ${obj.severity}</span></p>
            <p>Author: ${obj.assigned}</p>
            <button onclick="setStatusClosed('${obj.id}')" class="btn btn-warning">Close</button>
            <button onclick="deleteIssue('${obj.id}');" class="btn btn-danger">Delete</button>
        </div>
    `;
}

function deleteIssue(id) {
	// удаляем карточку по уникальному id
	let issue = document.getElementById(id);
	issue.remove();
}

function setStatusClosed(id) {
	// изменяем статус заявки по уникальному id
	let issueStatus = document.getElementById(`status-${id}`);
	issueStatus.innerHTML = 'Closed';
	issueStatus.style.backgroundColor = 'red';
}

const btnAdd = document.querySelector('.btnAdd');

btnAdd.addEventListener('click', addIssues);
