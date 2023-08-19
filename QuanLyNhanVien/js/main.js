var employeeList = [];
var id, account, name, email, pass, dayOnBoard, salary, job, hour;
var jsonvalue = localStorage.getItem("employeeList");
if (jsonvalue !== null) {
    employeeList = JSON.parse(jsonvalue);
    renderList(employeeList);
}
function resetDataBase() {
    employeeList = [];
    var jsonvalue = JSON.stringify(employeeList);
    localStorage.setItem("employeeList", jsonvalue);
    renderList(employeeList);
    location.reload();
}
function addData() {
    var employee = new Employee(id, account, name, email, pass, dayOnBoard, salary, job, hour);
    checkIdValid(employee.id);
    var isValid = checkAllInput(employee);
    if (isValid == 0) return;
    employeeList.push(employee);
    setObjectId();
    var jsonvalue = JSON.stringify(employeeList);
    localStorage.setItem("employeeList", jsonvalue);
    renderList(employeeList);
}
function updateData() {
    id = document.getElementById("idNV").value;
    var employee = new Employee(id, account, name, email, pass, dayOnBoard, salary, job, hour);
    checkIdValid(employee.id);
    var isValid = checkAllInput(employee);
    if (isValid == 0) return;
    var index = getIndex(id, employeeList);
    employeeList[index] = employee;
    jsonvalue = JSON.stringify(employeeList);
    localStorage.setItem("employeeList", jsonvalue);
    renderList(employeeList);
}
function showDataOnForm(id) {
    var index = getIndex(id, employeeList);
    var employee = employeeList[index];
    checkIdValid(id);
    checkAllInput(employee);
    document.getElementById("idNV").value = employee.id;
    document.getElementById("tknv").value = employee.account;
    document.getElementById("name").value = employee.name;
    document.getElementById("email").value = employee.email;
    document.getElementById("password").value = employee.pass;
    document.getElementById("datepicker").value = employee.dayOnBoard;
    document.getElementById("luongCB").value = employee.salary;
    document.getElementById("chucvu").value = employee.job;
    document.getElementById("gioLam").value = employee.hour;
}
function deleteData(id) {
    var index = getIndex(id, employeeList);
    employeeList.splice(index, 1);
    var jsonvalue = JSON.stringify(employeeList);
    localStorage.setItem("employeeList", jsonvalue);
    renderList(employeeList);
}
function searchDataWithRank() {
    var searchValue = document.getElementById("searchName").value;
    if (searchValue == "") return;
    var searchList = [];
    for (i = 0; i < employeeList.length; i++) {
        if (searchValue == calculateRank(employeeList[i])) {
            searchList.push(employeeList[i]);
        }
    }
    if (searchList.length == 0) {
        document.getElementById("tbsearch").innerHTML = `No data match your search!`
    }
    else {
        document.getElementById("tbsearch").innerHTML = `All ${searchList.length} data match your search below!`
    }
    renderList(searchList);
    document.getElementById("canclebtn").classList.remove("d-none");
}