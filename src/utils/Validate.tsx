import { FC, useState } from 'react';
import validator from 'validator'

export const Validate: FC<any> = (input) => {

    const [error, setError] = useState({});

const validateEmail = (input) => {

    if (validator.isEmail(input)) {
        setError({ UnauthorizedException: "invalid"});
    } else {
        setError("Enter valid Email!");
    }
};