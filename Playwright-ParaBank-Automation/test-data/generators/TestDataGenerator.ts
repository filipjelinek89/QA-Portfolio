export class TestDataGenerator {

    // ==========================================
    // Text Generators
    // ==========================================

    /**
     * Generates a string with the specified length.
     *
     * Example:
     * generateString(5)
     * Result:
     * AAAAA
     */
    public static generateString(
        length: number,
        character: string = 'A'
    ): string {

        return character.repeat(length);

    }

    /**
     * Generates a unique string with the specified length.
     *
     * Example:
     * generateUniqueString(20)
     * Result:
     * U1754123456789012345
     */
    public static generateUniqueString(
        length: number,
        prefix: string = 'U'
    ): string {

        const uniquePart = Date.now().toString();

        return (prefix + uniquePart).substring(0, length);

    }

    

    // ==========================================
    // Number Generators
    // ==========================================

    /**
     * Generates a numeric string.
     *
     * Example:
     * generateNumberString(5)
     * Result:
     * 11111
     */
    public static generateNumberString(
        length: number,
        digit: string = '1'
    ): string {

        return digit.repeat(length);

    }


    
}