// ==========================================
// Registration Data Model
// ==========================================

export interface RegistrationData {

    firstName: string;

    lastName: string;

    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
    };

    phone: string;

    ssn: string;

    username: string;

    password: string;

    confirmPassword: string;
}