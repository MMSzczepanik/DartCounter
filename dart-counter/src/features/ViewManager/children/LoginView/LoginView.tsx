import { Button, Grid, TextField } from "@mui/material";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { setCridentials } from "../../../../reducers/cridentialsReducer";
import { store } from "../../../../store";
import { changeView } from "../../../../reducers/viewMenagerReducer";
import { VIEW_TYPE } from "../../../../types/viewType";

interface LoginForm {
    username: string,
    password: string;
}

const LoginView: FunctionComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
    const onSubmit = (data: LoginForm) => {
    store.dispatch(setCridentials(data))
    store.dispatch(changeView({view: VIEW_TYPE.TOURNAMENTS}))
    }
    
    return (
        <Grid className="h-screen flex items-center justify-center min-w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container direction='column' className='bg-slate-200 p-8 border-[2px] border-slate-700 rounded-lg'>
                    <TextField className="!pb-4" error={!!errors.username} id="outlined-basic" label="Username" variant="outlined" placeholder='username' {...register('username', { required: true })}/>
                    <TextField error={!!errors.password} id="outlined-basic" label="Password" variant="outlined" type='password' placeholder='password' {...register('password', { required: true })}/>
                    <Button variant="text" type='submit'>SEND</Button>
                </Grid>
            </form>
        </Grid>
    )
}

export default LoginView;