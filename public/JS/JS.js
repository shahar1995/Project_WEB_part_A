function  blessing() {
console.log("blessing");
    var d = new Date;
    var t = d.getUTCHours();
    if (5 <t < 11) {
        document.getElementById("demo").innerHTML = "Good Morning";
    } else if (t < 18) {
        document.getElementById("demo").innerHTML = "Good Afternoon";
    } else {
        document.getElementById("demo").innerHTML = "Good Evening"
    };
}