let a = document.getElementById("btn_search")
let b = document.getElementById("search_bar")
let c = document.getElementById("x")
let d = document.getElementById("y")
let e = document.getElementById("z")
console.log(b)
a.addEventListener("keyup", function(e) {
    e.preventDefault()
    c.textContent = b.value
})

d.addEventListener("click", function(f){
    f.preventDefault()
    c.style.color = e.value
})

// bai khac //
for (let m=1;m<10;m++){
    let s = "";
    for (let n=1;n<=m;n++){
        s += m;
    }
    console.log(s);
}