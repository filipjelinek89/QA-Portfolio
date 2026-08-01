import { RegistrationData } from '../models/RegistrationData';

export const validUser: RegistrationData = {

    firstName: 'Filip',

    lastName: 'Jelinek',

    address: {
        street: 'Main Street 15',
        city: 'Prague',
        state: 'Prague',
        zipCode: '11000'
    },

    phone: '123456789',

    ssn: '987654321',

    username: 'filip123',

    password: 'Password123',

    confirmPassword: 'Password123'
};