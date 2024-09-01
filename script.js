class Password {
    constructor() {
        this.upcl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        this.lwcl = "abcdefghijklmnopqrstuvwxyz"
        this.num = "1234567890";
        this.symb = "$_@&?!#/><[]";
    }

    funnyPassword() {
        let arr = ["password", "incorrect", "12345678", "iforgot", "secret", "MyPreciousssPasssword", "MyName", "Chintu_Hacker", "nothing", "user", "maiNahiBatunga", "Sorry", "1$perhour", "admin", "passwordIs1234"];
        let pass = arr[Math.floor(Math.random() * arr.length)]
        return pass
    }

    weakPassword() {
        let arr = [this.upcl, this.lwcl]
        let pass = ''
        for(let i=0; i<8; i++){
            let Ran1 = Math.floor(Math.random() * arr.length)
            let Ran2 = Math.floor(Math.random() * arr[Ran1].length)
            pass += arr[Ran1][Ran2]
        }
        return pass
    }

    strongPassword() {
        let arr = [this.upcl, this.lwcl, this.symb]
        let pass = ''
        for(let i=0; i<12; i++){
            let Ran1 = Math.floor(Math.random() * arr.length)
            let Ran2 = Math.floor(Math.random() * arr[Ran1].length)
            pass += arr[Ran1][Ran2]
        }
        return pass
    }

    superStrongPassword() {
        let arr = [this.upcl, this.lwcl, this.symb, this.num]
        let pass = ''
        for(let i=0; i<18; i++){
            let Ran1 = Math.floor(Math.random() * arr.length)
            let Ran2 = Math.floor(Math.random() * arr[Ran1].length)
            pass += arr[Ran1][Ran2]
        }
        return pass
    }
}

let disp = document.getElementById("disp")
let radio = document.getElementsByClassName("radio");
let btn = document.getElementById("btn");
let copy = document.getElementById("copy");

let a = new Password()

btn.addEventListener("click", () => {
    let b
    if(radio[0].checked) {
        b = a.funnyPassword()
    }
    else if (radio[1].checked) {
        b = a.weakPassword();
    } 
    else if (radio[2].checked) {
        b = a.strongPassword();
    } 
    else if (radio[3].checked) {
        b = a.superStrongPassword();
    }
    disp.value = b
})

copy.addEventListener("click", () => {
    if (disp.value != "") {
        disp.select()
        document.execCommand("copy")
        showToast()
    }
})

function showToast() {
    let toastContainer = document.getElementById("toastContainer")
    toastContainer.style.display = 'block'
    setTimeout(() => {
        toastContainer.style.display = 'none'
    }, 3000);
}

function closeToast() {
    let toastContainer = document.getElementById("toastContainer")
    toastContainer.style.display = 'none'
}