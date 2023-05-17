var stat = 1

function dropHandler(event) {
    event.preventDefault();

    let text = "";
    if (event.dataTransfer.items) {
        console.log("Items(s) dropped");
        // Use DataTransferItemList interface to access the file(s)
        [...event.dataTransfer.items].forEach((item, i) => {
            // If dropped items aren't files, reject them
            if (item.kind === "file") {
                const file = item.getAsFile();
                console.log(`file[${i}].name = ${file.name}`);
                text += " "+file.name
            }
        });
    } else {
        console.log("File(s) dropped");
        // Use DataTransfer interface to access the file(s)
        [...event.dataTransfer.files].forEach((file, i) => {
            console.log(`file[${i}].name = ${file.name}`);
            text += " "+file.name
        });
    }

    dropArea.classList.remove('highlight');
    dropArea.innerHTML = text
    stat = 2;

}

function dragOverHandler(event) {
    // Prevent default behavior (Prevent file from being opened)
    event.preventDefault();
}

function dragEnterHandler() {
    dropArea.classList.add('highlight');
}

// Quitar clase 'highlight' cuando el elemento se sale del área de soltar
function dragLeaveHandler() {
    dropArea.classList.remove('highlight');
}

function clic() {
    if (stat === 2) {
        stat = 3;
        dropArea.innerHTML += "<br/>sucessfully uploaded"
    }
}
