export class Users{
    
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;

  constructor() {
    this.email = '';
    this.username = '';
    this.password = '';
    this.name = { firstname: '', lastname: '' };
    this.address = { city: '', street: '', number: 0, zipcode: '', geolocation: { lat: '', long: '' } };
    this.phone = '';
  }

}