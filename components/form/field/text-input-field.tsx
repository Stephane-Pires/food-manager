import { useField } from 'formik'

import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from '@chakra-ui/react'

function TextInputField({ label, name, type, placeholder }) {
    // const [field, meta] = useField({ name })
    // console.log('field', field)
    // console.log('meta', meta)
    const [{ value, onBlur, onChange }, { error, touched }] = useField({
        name,
    })

    return (
        <FormControl id={name} isInvalid={error && touched} isRequired>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input
                id={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextInputField
