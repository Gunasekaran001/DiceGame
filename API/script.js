async function fetchDataAndPopulateTable() {
    try {    
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    console.log(data);
    let tabledata = "";
    data.forEach((country) => {
    tabledata +=`<tr>
    <td>${country.name.common}</td>
    <td>${country.region}</td>
    <td>${country.subregion}</td>
    <td>{img src="${country.flags.png}" alt="${country.name.common} Flag" class="flag-img"></td>
    <td>${country.population}</td>
    </tr>`;
    });
    document.getElementById("table-body").innerHTML = tabledata;
} catch (error) {
    console.error("Error fetching data:", error);
}
}
document.addEventlistener("DOMContentLoaded", fetchDataAndPopulateTable);