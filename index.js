let main_table = document.getElementById("main_table");
let content_inp = document.getElementById("content_inp");
let submit_btn = document.getElementById("submit_btn");

submit_btn.addEventListener("click", (e) => {
    let oldLines = main_table.getElementsByTagName("tr");
    while (oldLines.length) main_table.removeChild(oldLines[0]);

    let lines = content_inp.value.split("\n");
    let sum = 0;
    lines.forEach(line => {
        main_table.innerHTML += "<tr><td></td><td><span></span></td></tr>";
        let row = main_table.lastElementChild;
        row.lastElementChild.firstElementChild.innerText = line;
        row.firstElementChild.innerText = row.lastElementChild.firstElementChild.offsetWidth;
        sum += row.lastElementChild.firstElementChild.offsetWidth;
    });
    main_table.parentElement.firstElementChild.firstElementChild.firstElementChild.innerText = sum;
});