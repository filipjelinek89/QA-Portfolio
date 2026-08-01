import { RegistrationData } from '../models/RegistrationData';
import { TestDataGenerator } from '../generators/TestDataGenerator';

export class RegistrationDataFactory {

    // ==========================================
    // Valid Test Data
    // ==========================================

    public static createValidUser(): RegistrationData {

        const randomNumber = Date.now();

        return {

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

            username: `filip${randomNumber}`,

            password: 'Password123',

            confirmPassword: 'Password123'

        };

    }

    public static createUserWithRequiredFieldsOnly(): RegistrationData {

        return this.createValidUser();

    }

    // ==========================================
    // Negative Test Data
    // ==========================================

    public static createUserWithoutFirstName(): RegistrationData {

        const user = this.createValidUser();

        user.firstName = '';

        return user;

    }

    public static createUserWithoutLastName(): RegistrationData {

        const user = this.createValidUser();

        user.lastName = '';

        return user;

    }

    public static createUserWithoutStreet(): RegistrationData {

        const user = this.createValidUser();

        user.address.street = '';

        return user;

    }

    public static createUserWithoutCity(): RegistrationData {

        const user = this.createValidUser();

        user.address.city = '';

        return user;

    }

    public static createUserWithoutState(): RegistrationData {

        const user = this.createValidUser();

        user.address.state = '';

        return user;

    }

    public static createUserWithoutZipCode(): RegistrationData {

        const user = this.createValidUser();

        user.address.zipCode = '';

        return user;

    }

    public static createUserWithoutPhone(): RegistrationData {

        const user = this.createValidUser();

        user.phone = '';

        return user;

    }

    public static createUserWithoutSSN(): RegistrationData {

        const user = this.createValidUser();

        user.ssn = '';

        return user;

    }

    public static createUserWithoutUsername(): RegistrationData {

        const user = this.createValidUser();

        user.username = '';

        return user;

    }

    public static createUserWithoutPassword(): RegistrationData {

        const user = this.createValidUser();

        user.password = '';

        return user;

    }

    public static createUserWithoutConfirmPassword(): RegistrationData {

        const user = this.createValidUser();

        user.confirmPassword = '';

        return user;

    }

    public static createUserWithDifferentPasswords(): RegistrationData {

        const user = this.createValidUser();

        user.confirmPassword = 'Password321';

        return user;

    }

    public static createUserWithAlphabeticZipCode(): RegistrationData {

        const user = this.createValidUser();

        user.address.zipCode = 'ABC';

        return user;

    }

    // ==========================================
    // Boundary Test Data
    // ==========================================

    public static createUserWithBoundaryLength(
        length: number
    ): RegistrationData {

        const user = this.createValidUser();

        user.firstName =
            TestDataGenerator.generateString(length, 'F');

        user.lastName =
            TestDataGenerator.generateString(length, 'L');

        user.address.street =
            TestDataGenerator.generateString(length, 'S');

        user.address.city =
            TestDataGenerator.generateString(length, 'C');

        user.address.state =
            TestDataGenerator.generateString(length, 'T');

        user.username =
            TestDataGenerator.generateUniqueString(length);

        return user;

    }

    // ==========================================
    // Robustness Test Data
    // ==========================================

    public static createUserWithLargeInputData(): RegistrationData {

        const user = this.createValidUser();

        user.firstName =
            TestDataGenerator.generateString(255, 'F');

        user.lastName =
            TestDataGenerator.generateString(255, 'L');

        user.address.street =
            TestDataGenerator.generateString(255, 'S');

        user.address.city =
            TestDataGenerator.generateString(255, 'C');

        user.address.state =
            TestDataGenerator.generateString(255, 'T');

        user.phone =
            TestDataGenerator.generateNumberString(50);

        user.ssn =
            TestDataGenerator.generateNumberString(50, '9');

        user.username =
            TestDataGenerator.generateUniqueString(100);

        user.password =
            TestDataGenerator.generateString(100, 'P');

        user.confirmPassword =
            user.password;

        return user;

    }

    // ==========================================
    // Validation Test Data
    // ==========================================

    public static createUserWithSpecialCharacters(): RegistrationData {

        const user = this.createValidUser();

        user.firstName = 'Anne-Marie';

        user.lastName = "O'Brien";

        user.address.street = 'Main Street #15';

        user.address.city = "St. John's";

        user.address.state = 'Česká republika';

        user.phone = '+420123456789';

        user.username =
            TestDataGenerator.generateUniqueString(20, 'john.doe');

        user.password = 'P@ssword123!';

        user.confirmPassword = user.password;

        return user;

    }

}