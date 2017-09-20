var global_count = 0;
var row_id;
var rowIndex;
var student_array = [];
var id;

function student(name, address, country, email, gender, skills, age, bday) {
    this.name = name,
        this.address = address,
        this.country = country,
        this.email = email,
        this.gender = gender,
        this.skills = skills,
        this.age = age,
        this.bday = bday
}

function multiSelectValue() {
    var str = "";
    $('#select_country').each(function() {
        str += $(this).val() + ",";
    });
    var result = str.substring(0, str.length - 1);
    return result;
}

function getSkillsValue() {
    var str = "";
    $.each($("input[class='skills']:checked"), function() {
        str += $(this).val() + ",";
    });
    var result = str.substring(0, str.length - 1);
    return result;
}

function displayStudentData() {
    $("table").show();
    //var arrindex = student_array.length - 1;
    //var j = arrindex + 1;
    $.ajax({
        url: '../DisplayServlet',
        type: 'post',
        data: {},
        dataType: 'json',
        success: function(data) {
            $.each(data, function(key, value) {
                var row = $("<tr></tr>").appendTo("#myTable");
                $("<td></td>").html(++global_count).appendTo(row);
                $("<td></td>").text(value.name).appendTo(row);
                $("<td></td>").text(value.address).appendTo(row);
                $("<td></td>").text(value.country).appendTo(row);
                $("<td></td>").text(value.email).appendTo(row);
                $("<td></td>").text(value.gender).appendTo(row);
                $("<td></td>").text(value.skills).appendTo(row);
                $("<td></td>").text(value.age).appendTo(row);
                $("<td></td>").text(value.birthDate).appendTo(row);
                // var edit = $("<td></td>").text(student_array[arrindex]).appendTo(edit);
                //var delete_col = $("<td></td>").text(student_array[arrindex]).appendTo(delete_col);
                $("<td></td>").html("<button type='button' class='edit_button' value='"+value.Rollno+"'>Edit</button>").appendTo(row);
                $("<td></td>").html("<button value='"+value.Rollno+"' class='deleteRow'>Delete</button>").appendTo(row);
                clearForm();
            });
        }
    });
}

function validateForm() {
    var flag = true;
    var name = $("#name").val();
    var address = $("#address").val();
    var email = $("#email").val();
    if (name == null || name == "") {
        alert("Name Can not be blank");
        flag = false;
    } else if (address == null || address == "") {
        alert("Address can not be blank");
        flag = false;
    } else if (email == null || email == "") {
        alert("Email can not be blank");
        flag = false;
    }
    return flag;
}

function populateSkillsData(data_string) {
    var skills_array = data_string.split(",");
    var j = 0;
    $('.skills').each(function() {
        if ($(this).val() == skills_array[j]) {
            $(this).prop('checked', true);
            j++;
        }
    });
}

function selectedCountriesData(country) {
    var country_array = country.split(",");
    var j = 0;
    var c = $('.country');
    $(".country").each(function() {
        if ($(this).val() == country_array[j]) {
            $(this).prop('selected', true);
            j++;
        }
    });
}

function populateGenderValue() {
    $("#gender").each(function() {
        $(this).prop('checked', true);
    });
}

function modifyRowCount() {
    var table = $("#myTable");
    var rowcountAfterDelete = $("#tableData tr").length;
    for (var i = 1; i < rowcountAfterDelete; i++) {
        table.find('tr').eq(i).find('td').eq(0).html(i);
    }
}

function clearForm() {
    $("#myForm")[0].reset();
}
$(document).ready(function() {
    $(".add").click(function() {
        var flag = validateForm();
        if (flag) {
            var name = $("#name").val();
            var address = $("#address").val();
            var country = multiSelectValue();
            var data_string = multiSelectValue();
            var array_length = multiSelectValue();
            var email = $("#email").val();
            var gender = $("#gender").val();
            var skills = getSkillsValue();
            var age = $("#age").val();
            var bday = $("#bday1").val();
            student_array.push(new student(name, address, country, email, gender, skills, age, bday));
            $.ajax({
                type: 'POST',
                url: '../AddServelt',
                data: {
                    name: name,
                    address: address,
                    country: country,
                    email: email,
                    gender: gender,
                    skills: skills,
                    age: age,
                    BirthDate: bday
                },
                success: function(result) {
                    displayStudentData();
                }
            });
            //displayStudentData();
        }
    });
    $(document).on("click", '.edit_button', function() {
        row_id = $(this).closest('tr');
        var srNo = row_id.find('td').eq(0).text();
        var name = row_id.find('td').eq(1).text();
        var address = row_id.find('td').eq(2).text();
        var country = row_id.find('td').eq(3).text();
        var email = row_id.find('td').eq(4).text();
        var gender = row_id.find('td').eq(5).text();
        var skills = row_id.find('td').eq(6).text();
        var age = row_id.find('td').eq(7).text();
        var bday1 = row_id.find('td').eq(8).text();
        $("#name").val(name);
        $("#address").val(address);
        selectedCountriesData(country);
        $("#email").val(email);
        populateGenderValue(gender);
        populateSkillsData(skills);
        $("#age").val(age);
        $("#bday1").val(bday1);
    });
    $('body').on("click", "#save_button", function(event) {

        var srNo = $("#id").val();
        var name = $("#name").val();
        var address = $("#address").val();
        var country = multiSelectValue();
        alert(country);
        var email = $("#email").val();
        var gender = $("#gender").val();
        var skills = $("#skills").val();
        var age = $("#age").val();
        var bday1 = $("#bday1").val();

        $.ajax({
            type: 'post',
            url: '../save_servlet',
            data: {

                srNo: srNo,
                name: name,
                address: address,
                ccc: country,
                email: email,
                gender: gender,
                skills: skills,
                age: age,
                BirthDate: bday1

            },
            success: function(result) {

            }
        });
        row_id.find('td').eq(0).text(id);
        row_id.find('td').eq(1).text(name);
        row_id.find('td').eq(2).text(address);
        row_id.find('td').eq(3).text(country);
        row_id.find('td').eq(4).text(email);
        row_id.find('td').eq(5).text(gender);
        row_id.find('td').eq(6).text(skills);
        row_id.find('td').eq(7).text(age);
        row_id.find('td').eq(8).text(bday1);
        clearForm();
        event.preventDefault();
    });
    $('body').on("click", '.deleteRow', function() {
        var index = $(this).val();
        $(this).closest('tr').remove();
        $.ajax({
            type: 'post',
            url: '../deleteServlet',
            data: {
                index: index
            },
            success: function(result) {}
        });
        student_array.splice(index, 1);
        modifyRowCount();
    });
    $("#clearForm").click(function() {
        clearForm();
    });
});