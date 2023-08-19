// level 3 -- sum check -- EXPORT
function checkAllInput(employee) {
    var isValidMain =
        checkAccount(employee)
        & checkName(employee)
        & checkEmail(employee)
        & checkPass(employee)
        & checkDate(employee)
        & checkSalary(employee)
        & checkJob(employee)
        & checkHour(employee);
    console.log("isValidMain: ", isValidMain);
    return isValidMain;
}
function checkIdValid(id) {
    var isValid = false;
    for (i = 0; i < employeeList.length; i++) {
        if (id == employeeList[i].id) {
            isValid = true;
        }
    }
    if (isValid == true) {
        document.getElementById("btnCapNhat").classList.remove("d-none");
        document.getElementById("btnThemNV").classList.add("d-none");
    }
    else {
        document.getElementById("btnThemNV").classList.remove("d-none");
        document.getElementById("btnCapNhat").classList.add("d-none");
    }
}
// level 2 -- input check
function checkAccount(employee) {
    var isValidAccount =
        checkLength(4, 6, "tbTKNV", employee.account)
        & checkIsNumber("tbTKNV", employee.account)
        & checkEmpty("tbTKNV", employee.account);
    setAlertApper("tbTKNV", isValidAccount);
    return isValidAccount;
}
function checkName(employee) {
    var isValidName =
        checkIsCharString("tbTen", employee.name)
        & checkEmpty("tbTen", employee.name);
    setAlertApper("tbTen", isValidName);
    return isValidName;
}
function checkEmail(employee) {
    var isValidEmail =
        checkEmpty("tbEmail", employee.email)
        & checkEmailFormat("tbEmail", employee.email);
    setAlertApper("tbEmail", isValidEmail);
    return isValidEmail;
}
function checkPass(employee) {
    var isValidPass =
        checkEmpty("tbMatKhau", employee.pass)
        & checkPassFormat("tbMatKhau", employee.pass);
    setAlertApper("tbMatKhau", isValidPass);
    return isValidPass;
}
function checkDate(employee) {
    var isValidDate =
        checkEmpty("tbNgay", employee.dayOnBoard)
        & checkDateFormat("tbNgay", employee.dayOnBoard);
    setAlertApper("tbNgay", isValidDate);
    return isValidDate;
}
function checkSalary(employee) {
    var isValidSalary =
        checkEmpty("tbLuongCB", employee.salary)
        & checkIsNumber("tbLuongCB", employee.salary)
        & checkRank(1000000, 20000000, "tbLuongCB", employee.salary);
    setAlertApper("tbLuongCB", isValidSalary);
    return isValidSalary;
}
function checkJob(employee) {
    var isValidJob =
        checkEmpty("tbChucVu", employee.job);
    setAlertApper("tbChucVu", isValidJob);
    return isValidJob;
}
function checkHour(employee) {
    var isValidHour =
        checkEmpty("tbGiolam", employee.hour)
        & checkRank(80, 200, "tbGiolam", employee.hour);
    setAlertApper("tbGiolam", isValidHour);
    return isValidHour;
}
// level 1 -- basic check
function checkEmpty(idError, value) {
    if (value.length == 0) {
        document.getElementById(idError).innerHTML = 'Error: Empty value is not allowed. Please enter value';
        return false;
    }
    else return true;
}
function checkIsNumber(idError, value) {
    if (isNaN(value)) {
        document.getElementById(idError).innerHTML = 'Error: Typed of value is not allowed. Please enter number value';
        return false;
    }
    else return true;
}
function checkIsCharString(idError, value) {
    const regex2 = /^[a-zA-Z\s]+$/;
    if (!regex2.test(value)) {
        document.getElementById(idError).innerHTML = 'Error: Only letters and spaces are allowed.';
        return false;
    }
    else return true;
}
function checkLength(min, max, idError, value) {
    if (value.length < min || value.length > max) {
        document.getElementById(idError).innerHTML = `Error: value must have ${min}-${max} number character. Please enter another value`;
        return false;
    }
    else return true;
}
function checkEmailFormat(idError, value) {
    const regex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
    if (!value.match(regex)) {
        document.getElementById(idError).innerHTML = 'Error: Email is not valid.';
        return false;
    }
    else return true;
}
function checkPassFormat(idError, value) {
    const regex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
    if (!value.match(regex)) {
        document.getElementById(idError).innerHTML = 'Error: Pass is not valid.';
        return false;
    }
    else return true;
}
function checkDateFormat(idError, value) {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (!regex.test(value)) {
        document.getElementById(idError).innerHTML = 'Error: Date is not valid.';
        return false;
    }
    else return true;
}
function checkRank(min, max, idError, value) {
    value = value * 1;
    if (value < min || value > max) {
        document.getElementById(idError).innerHTML = `Error: value must be between ${min}-${max}. Please enter another value`;
        return false;
    }
    else return true;
}
function setAlertApper(idError, isValid) {
    if (isValid == 0 || isValid == false) {
        document.getElementById(idError).style.display = "inline-block";
    }
    else {
        document.getElementById(idError).style.display = "none";
        document.getElementById(idError).innerHTML = "";
    }
}