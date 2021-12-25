import { Form, Formik, useField } from 'formik'
import { useEffect, useMemo, useRef } from 'react'
import * as Yup from 'yup'

import { useMutation } from '@apollo/client'

import { CREATE_RECIPE } from '@graphql/client-queries/recipe'

import { EnumKey, getEnumFromEnumKey } from '@utils/enums'

import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import {
    Checkbox,
    CheckboxGroup,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    Select,
    useToast,
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

function AddRecipeForm() {
    const [createRecipe, { data, error }] = useMutation(CREATE_RECIPE)

    const toast = useToast()

    const formikRef = useRef(null)

    useEffect(() => {
        if (error) {
            toast({
                title: `An unknown error happened while trying to mutate the graphql state`,
                status: 'error',
                variant: 'left-accent',
                isClosable: true,
            })
        }

        if (data) {
            const { success, message } = data.createRecipe
            if (success) {
                toast({
                    title: `The recipe was added succesfully`,
                    status: 'success',
                    variant: 'left-accent',
                    isClosable: true,
                })
                formikRef.current!.resetForm()
            } else {
                toast({
                    title: message,
                    status: 'error',
                    variant: 'left-accent',
                    isClosable: true,
                })
            }
        }
    }, [error, toast, data])

    return (
        <Formik
            initialValues={{
                name: 'Nina',
                id: 'Mirena',
                service: 'MAIN',
                diets: [],
                description: 'some random description',
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(3, 'Must be 3 characters or more')
                    .required('Required'),
                id: Yup.string()
                    .min(3, 'Must be 3 characters or more')
                    .required('Required'),
                service: Yup.string().required('Required'),
                description: Yup.string().required('Required'),
            })}
            innerRef={formikRef}
            onSubmit={(
                { id, name, service, diets, description },
                { setSubmitting }
            ) => {
                createRecipe({
                    variables: {
                        recipeId: id,
                        name,
                        service,
                        diets,
                        description,
                    },
                })
                setSubmitting(false)
            }}
        >
            <Form>
                <VStack>
                    <TextInputField
                        label="Name"
                        name="name"
                        type="text"
                        placeholder="Pasta al salmon"
                    />
                    <TextInputField
                        label="ID"
                        name="id"
                        type="text"
                        placeholder="pasta_al_salmon"
                    />

                    <OptionField
                        name="service"
                        enumKey={EnumKey.SERVICE}
                        label="Services"
                    />

                    <CheckboxField name="diets" enumKey={EnumKey.DIET} />

                    <TextInputField
                        label="Description"
                        name="description"
                        type="text"
                        placeholder="Description of the Recipe"
                    />

                    <Button type="submit">Submit</Button>
                </VStack>
            </Form>
        </Formik>
    )
}

export default AddRecipeForm
