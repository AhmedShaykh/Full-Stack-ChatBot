export class CarService {
    public async getCars() {
        const response = await fetch('https://car-rentals.herokuapp.com/api/get-vehicles/63d2344d383aec4d08acea79');
        const data = await response.json();
        return data;
    }
};