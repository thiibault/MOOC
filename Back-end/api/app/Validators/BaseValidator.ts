export default class BaseValidator {
    public messages = {
    minLength: '{{ field }} must be at least {{ options.minlength }} characters long',
    maxLength: '{{ field }} cannot be longer than {{ options.maxLength }} characters long',
    }
}