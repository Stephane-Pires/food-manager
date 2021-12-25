import { useField } from 'formik'
import { useMemo } from 'react'

import { getEnumFromEnumKey } from '@utils/enums'

import { Checkbox, CheckboxGroup, HStack } from '@chakra-ui/react'

function CheckboxField({ name, enumKey }) {
    // const [field, meta] = useField({ name })
    // console.log('field', field)
    // console.log('meta', meta)
    const [{ value, onChange }] = useField({
        name,
    })

    const selectedEnum = getEnumFromEnumKey(enumKey)

    const checkboxItems = useMemo(
        () =>
            (Object.keys(selectedEnum) as Array<keyof typeof selectedEnum>).map(
                (selectedEnumKey) => (
                    <Checkbox
                        onChange={onChange}
                        name={name}
                        key={selectedEnumKey}
                        value={selectedEnumKey}
                    >
                        {selectedEnumKey}
                    </Checkbox>
                )
            ),
        [onChange, name, selectedEnum]
    )

    return (
        <CheckboxGroup defaultValue={value}>
            <HStack>{checkboxItems}</HStack>
        </CheckboxGroup>
    )
}

export default CheckboxField
