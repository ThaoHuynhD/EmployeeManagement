function renderList(employeeList) {
    contentHTML = '';
    for (i = 0; i < employeeList.length; i++) {
        var employee = employeeList[i];
        contentHTML = contentHTML +
            `<tr>
        <td class="NV-account">${employee.account}</td>
        <td class="NV-name">${employee.name}</td>
        <td class="NV-email">${employee.email}</td>
        <td class="NV-day">${employee.dayOnBoard}</td>
        <td class="NV-job">${employee.job}</td>
        <td class="NV-sumSalary">${calculateSalary(employee)}</td>
        <td class="NV-rank">${calculateRank(employee)}</td>
        <td class="NV-action">
            <button class="btn btn-warning" onclick="showDataOnForm(${employee.id})" data-toggle="modal"
            data-target="#myModal"><i class="fa fa-paint-brush"></i></button>
            <button class="btn btn-danger" onclick="deleteData(${employee.id})"><i class="fa fa-trash"></i></button>
        </td>
    </tr>`
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
function calculateSalary(employee) {
    if (employee.job == "Nhân viên") {
        return (employee.salary * 1).toLocaleString();
    }
    else if (employee.job == "Trưởng phòng") {
        return (employee.salary * 2).toLocaleString();
    }
    else if (employee.job == "Sếp") {
        return (employee.salary * 3).toLocaleString();
    }
    else return;
}
function calculateRank(employee) {
    var hour = employee.hour;
    if (hour < 160) return "Trung bình";
    else if (hour < 176) return "Khá";
    else if (hour < 192) return "Giỏi";
    else return "Xuất sắc";
}
function getIndex(id, employeeList) {
    var index;
    for (i = 0; i < employeeList.length; i++) {
        var employee = employeeList[i];
        if (employee.id == id) {
            index = i;
        }
    }
    return index;
}
function setObjectId() {
    var index = employeeList.length;
    if (index == 0) {
        var nextId = 1;
    }
    else {
        var nextId = employeeList[index - 1].id * 1 + 1;
    }
    document.getElementById("idNV").value = nextId;
}