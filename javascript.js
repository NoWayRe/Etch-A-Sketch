const container = document.querySelector(".container");


    for (var i = 0; i < 16; i++) {
        var row = document.createElement('div');
        row.className = "row";
        for (var j = 0; j < 16; j++) {
            var cell = document.createElement('div');
            cell.className = "cell";
            row.appendChild(cell);
        }                
        container.appendChild(row);
    }

