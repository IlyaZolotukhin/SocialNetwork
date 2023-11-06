
export const required = (value: undefined | string) => {
    if (value) return undefined;

    return "Field is required"
}

export const maxLength50 =  (value: undefined | string) => {
    if (value && value.length > 50) return `Max length is 50 symbols`;

    return undefined
}