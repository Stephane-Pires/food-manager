import { Form, Formik } from 'formik'
import { useEffect, useRef } from 'react'
import * as Yup from 'yup'

import { useMutation } from '@apollo/client'

import { CREATE_RECIPE } from '@graphql/client-queries/recipe'

import { EnumKey } from '@utils/enums'

import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { useToast } from '@chakra-ui/react'

import CheckboxField from './field/checkbox-field'
import OptionField from './field/option-field'
import TextInputField from './field/text-input-field'
import TextareaField from './field/textarea-field'

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

                    <CheckboxField
                        name="diets"
                        enumKey={EnumKey.DIET}
                        label="Diets"
                    />

                    <TextareaField
                        label="Description"
                        name="description"
                        placeholder="Description of the Recipe"
                    />

                    <Button type="submit">Submit</Button>
                </VStack>
            </Form>
        </Formik>
    )
}

export default AddRecipeForm
