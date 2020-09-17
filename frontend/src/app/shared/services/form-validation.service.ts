export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any): any {
        const config = {
            required: 'Required',
            invalidEmailAddress: 'Invalid email address',
            invalidPassword:
                'Invalid password. Password must be at least 6 characters long, and contain a number.',
            minlength: `Minimum length ${validatorValue.requiredLength}`
        };

        // @ts-ignore
        return config[validatorName];
    }

    static emailValidator(control: any): any {
        // RFC 2822 compliant regex
        if (
            control.value?.match(
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
            )
        ) {
            return null;
        } else {
            return { invalidEmailAddress: true };
        }
    }

    static passwordValidator(control: any): any {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { invalidPassword: true };
        }
    }
}