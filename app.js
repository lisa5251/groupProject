document.getElementById('searchBar').addEventListener('keyup', function () {
    let searchText = this.value.toLowerCase();
    let cars = document.querySelectorAll('.car-card');

    cars.forEach(function (car) {
        let title = car.querySelector('.car-title').textContent.toLowerCase();
        if (title.includes(searchText)) {
            car.style.display = "block"; // Show matching cars
        } else {
            car.style.display = "none"; // Hide non-matching cars
        }
    });
});
function validation(){
    var name = document.getElementById('name').value;
    var age= document.getElementById('age').value;
    var valid_name= /^[A-Za-z]+$/;
    var valid_age= /^[0-9]+$/;

    if(name.match(valid_name) && age.match(valid_age)){
        return true;
}else if(!(name.match(valid_name))){
    document.getElementById('name_error').style.visibility='visible';
    document.getElementById('name').style.borderColor = 'red';
    return false;
}else if(!(age.match(valid_age))){
    document.getElementById('age_error').style.visibility='visible';
    document.getElementById('age').style.borderColor = 'red';
    return false;
}
}