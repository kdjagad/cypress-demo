import React from 'react'
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const AddUser = () => {
    const AddUserSchema = Yup.object().shape({
        name: Yup.string()
            .required('Required'),
        email: Yup.string()
            .email("Correct email address")
            .required('Required'),
    });
    return (
        <Paper elevation={4} style={{ marginTop: 25, padding: 20 }}>
            <Formik
                initialValues={{ name: '', email: '', gender: 'female' }}
                validationSchema={AddUserSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
                validateOnChange={false}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: 20 }}>
                            <TextField id="name" name="name" onChange={handleChange} error={errors["name"]} helperText={errors["name"]} label="Full Name" variant="outlined" />
                        </div>
                        <div style={{ marginBottom: 20 }}>
                            <TextField id="email" name="email" onChange={handleChange} error={errors["email"]} helperText={errors["email"]} label="Email" variant="outlined" />
                        </div>
                        <div>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="gender"
                                    value={values['gender']}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div style={{ marginBottom: 20 }}>
                            <Button type='submit' variant='contained'>Save</Button>
                        </div>
                    </form>
                )
                }
            </Formik>
        </Paper>
    )
}

export default AddUser