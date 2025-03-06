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