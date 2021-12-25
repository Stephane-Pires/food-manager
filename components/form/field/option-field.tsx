import { useField } from 'formik'
import { useMemo } from 'react'

import { getEnumFromEnumKey } from '@utils/enums'

import { FormControl, FormLabel, Select } from '@chakra-ui/react'

function OptionField({ name, enumKey, label }) {
    // const [field, meta] = useField({ name })
    // console.log('field', field)
    // console.log('meta', meta)
    const [{ value, onChange, onBlur }, { error, touched }] = useField({
        name,
    })

    const selectedEnum = getEnumFromEnumKey(enumKey)

    const serviceItems = useMemo(
        () =>
            (Object.keys(selectedEnum) as Array<keyof typeof selectedEnum>).map(
                (selectedEnumKey) => (
                    <option
                        key={selectedEnumKey}
                        label={selectedEnumKey}
                        value={selectedEnumKey}
                    />
                )
            ),
        [selectedEnum]
    )

    return (
        <FormControl id={name} isInvalid={error && touched} isRequired>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Select
                placeholder="Select Services"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            >
                {serviceItems}
            </Select>
        </FormControl>
    )
}

export default OptionField
