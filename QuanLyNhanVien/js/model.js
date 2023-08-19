function Employee(id, account, name, email, pass, dayOnBoard, salary, job, hour) {
    this.id = document.getElementById("idNV").value.trim(),
        this.account = document.getElementById("tknv").value.trim(),
        this.name = document.getElementById("name").value.trim(),
        this.email = document.getElementById("email").value.trim(),
        this.pass = document.getElementById("password").value.trim(),
        this.dayOnBoard = document.getElementById("datepicker").value.trim(),
        this.salary = document.getElementById("luongCB").value.trim(),
        this.job = document.getElementById("chucvu").value.trim(),
        this.hour = document.getElementById("gioLam").value.trim()
}
