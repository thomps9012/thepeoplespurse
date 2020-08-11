$(document).ready(function () {
    function axiosCalls(agencyCode) {

        //Below is the call that will be made after user makes their selection
        $.ajax({
            url: "https://api.usaspending.gov/api/v2/agency/" + agencyCode + "/",
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    };
    var agencyCode = "";
    var deptName = "";
    $("#019").on("click", function () {
        agencyCode = "019";
        deptName = "Dept of State";
        axiosCalls(agencyCode);
    })
    $("#097").on("click", function () {
        agencyCode = "097";
        deptName = "Dept of Defense";
        axiosCalls(agencyCode);
    })
    $("#089").on("click", function () {
        agencyCode = "089";
        deptName = "Dept of Energy";
        axiosCalls(agencyCode);
    })
    $("#1601").on("click", function () {
        agencyCode = "1601";
        deptName = "Dept of Labor";
        axiosCalls(agencyCode);
    })
    $("#012").on("click", function () {
        agencyCode = "012";
        deptName = "Dept of Agriculture";
        axiosCalls(agencyCode);
    })
    $("#070").on("click", function () {
        agencyCode = "070";
        deptName = "Dept of Homeland Security";
        axiosCalls(agencyCode);
    })
    $("#069").on("click", function () {
        agencyCode = "069";
        deptName = "Dept if Transportation";
        axiosCalls(agencyCode);
    })
    $("#013").on("click", function () {
        agencyCode = "013";
        deptName = "Dept of Commerce";
        axiosCalls(agencyCode);
    })
    $("#091").on("click", function () {
        agencyCode = "091";
        deptName = "Dept of Education";
        axiosCalls(agencyCode);
    })
    $("#075").on("click", function () {
        agencyCode = "075";
        deptName = "Dept of Health & Human Services";
        axiosCalls(agencyCode);
    })
    $("#086").on("click", function () {
        agencyCode = "086";
        deptName = "Dept of Housing & Urban Development";
        axiosCalls(agencyCode);
    })
    $("#015").on("click", function () {
        agencyCode = "015";
        deptName = "Dept of Justice";
        axiosCalls(agencyCode);
    })
    $("#014").on("click", function () {
        agencyCode = "014";
        deptName = "Dept of the Interior";
        axiosCalls(agencyCode);
    })
    $("#020").on("click", function () {
        agencyCode = "020";
        deptName = "Dept of the Treasury";
        axiosCalls(agencyCode);
    })
    $("#068").on("click", function () {
        agencyCode = "068";
        deptName = "Enviromental Protection Agency";
        axiosCalls(agencyCode);
    })
    $("#027").on("click", function () {
        agencyCode = "027";
        deptName = "Federal Communication Comission";
        axiosCalls(agencyCode);
    })
    $("#360").on("click", function () {
        agencyCode = "360";
        deptName = "Federal Election Commision";
        axiosCalls(agencyCode);
    })
    $("#029").on("click", function () {
        agencyCode = "029";
        deptName = "Federal Trade Comission";
        axiosCalls(agencyCode);
    })
    $("#045").on("click", function () {
        agencyCode = "045";
        deptName = "Equal Employment Oppertunity Commision";
        axiosCalls(agencyCode);
    })
});

