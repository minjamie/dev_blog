import validator from "validator";
export const validate = (values: any) => {
    let errors = "";

    if (validator.isEmail(values)) {
        errors = "Wrong email";
    }

    return errors;
};
