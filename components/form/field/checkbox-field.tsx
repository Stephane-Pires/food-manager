import { useField } from 'formik'
import { useMemo } from 'react'

import { getEnumFromEnumKey } from '@utils/enums'

import {
    Checkbox,
    CheckboxGroup,
    FormControl,
    FormLabel,
    HStack,
} from '@chakra-ui/react'

function CheckboxField({ name, label, enumKey }) {
    // const [field, meta] = useField({ name })
    // console.log('field', field)
    // console.log('meta', meta)
    const [{ value, onChange }] = useField({
        name,
    })

    const selectedEnum = getEnumFromEnumKey(enumKey)

    const checkboxItems = useMemo(
        () =>
            Object.keys(selectedEnum).map((selectedEnumKey) => (
                <Checkbox
                    onChange={onChange}
                    name={name}
                    key={selectedEnumKey}
                    value={selectedEnumKey}
                >
                    {selectedEnumKey}
                </Checkbox>
            )),
        [onChange, name, selectedEnum]
    )

    return (
        <FormControl id={name}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <CheckboxGroup value={value}>
                <HStack>{checkboxItems}</HStack>
            </CheckboxGroup>
        </FormControl>
    )
}

export default CheckboxField
