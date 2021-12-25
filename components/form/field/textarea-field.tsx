import { useField } from 'formik'

import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Textarea,
} from '@chakra-ui/react'

function TextareaField({ label, name, placeholder }) {
    // const [field, meta] = useField({ name })
    // console.log('field', field)
    // console.log('meta', meta)
    const [{ value, onBlur, onChange }, { error, touched }] = useField({
        name,
    })

    return (
        <FormControl id={name} isInvalid={error && touched} isRequired>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Textarea
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                resize="vertical"
            />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextareaField
