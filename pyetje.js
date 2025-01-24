function dergoPyetje() {
    var emri = document.getElementById("emri").value;
    var Mbiemri = document.getElementById("Mbiemri").value;
    var pyetja = document.getElementById("pyetja").value;
    
    if (emri === "" || Mbiemri === "" || pyetja === "") {
        alert("Ju lutem plotesoni te gjitha fushat!");
        return false;
    }
    
    alert("Pyetja juaj u dergua me sukses!\nEmri: " + emri + "\nMbiemri: " + Mbiemri + "\nPyetja: " + pyetja);
    return false; // Nuk do të refresh faqen
}
