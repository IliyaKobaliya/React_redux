import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import {API_HOST} from "../../Config/URL";
import NativeSelect from '@material-ui/core/NativeSelect';
import TermsConditions from './terms_conditions'
import {regFetchData} from '../../Redux/Actions/Registration';
import {connect} from "react-redux";
import {withSnackbar} from 'notistack';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
});

class SignUpApp extends React.Component {
    state = {
        userData: {
            email: ``,
            password: ``,
            firstName: ``,
            lastName: ``,
            position: `Front-end`,
            level: `Junior`,
            salary: `0`
        },
        showPassword: false,
        showRepeatPassword: false,
        repeatPassword: ``   // test password
    };


    inputChange = event => {
        this.setState({
            userData: {
                ...this.state.userData,
                [event.target.name]: event.target.value
            }
        });
    };


    handleClickShowPassword = () => {
        this.setState(state => ({showPassword: !state.showPassword}));
    };
    handleClickShowRepeatPassword = () => {
        this.setState(state => ({showRepeatPassword: !state.showRepeatPassword}));
    };
    getForm = e => {
        e.preventDefault();
        let validationLogin = /^\w+@\w+\.\w{2,4}$/i,
            email = this.state.userData.email,
            password = this.state.userData.password,
            repeatPassword = this.state.repeatPassword,
            firstName = this.state.userData.firstName,
            lastName = this.state.userData.lastName;

        if (firstName.length === 0 || lastName.length === 0) {
            (firstName.length === 0 && lastName.length === 0) ?
                alert(`Введите имя и фамилию`) : alert((firstName.length === 0) ?
                `Введите имя` : `Введите фамилию`)
        }
        else if (firstName.search(/\d/) !== -1) {
            alert(`Имя введено некорректно!`)
        }
        else if (lastName.search(/\d/) !== -1) {
            alert(`Фамилия введена некорректно!`)
        }
        else if (email.length === 0 || password.length === 0) {
            (email.length === 0 && password.length === 0) ?
                alert(`Введите логин и пароль`) : alert((email.length === 0) ?
                `Email не введен` : `Пароль не введен`)
        }
        else if (!validationLogin.test(email)) {
            alert(`Введен некорректный email!`)
        }
        else if (password !== repeatPassword) {
            alert(`Пароли не совпадают`)
        }
        else if (password.length < 6) {
            alert(`Пароль слишком легкий`)
        }
        else {
            this.props.checkIN(`${API_HOST}SignUp`, this.state.userData);
            if (this.props.hasErrored) {
                this.props.enqueueSnackbar('Ошибка регистрации!', {variant: `error`});
            } else {
                this.props.history.push(`/SignIn`)
            }
        }
    };

    render() {
        const {classes} = this.props,
            position = [`Front-end`, `Back-end`, `Full-stack`, `Designer`],
            level = [`Junior`, `Middle`, `Senior`, `Mentor`, `Team-lead`];
        return (
            <div className={`signContainer`}>
                <Grid item xs={8} sm={8} md={6} lg={5}>
                    <Card style={{marginTop: `-5vh`}} className={classes.card}>
                        <Grid container style={{height: `70vh`, padding: `25px`}}
                              direction="column"
                              justify="space-between"
                              alignItems="center"
                        >

                            <Typography variant="h5" component="h2">Создание учетной записи</Typography>
                            <FormControl style={{width: `90%`}}>
                                <InputLabel htmlFor="adornment-firstName">Имя</InputLabel>
                                <Input
                                    name='firstName'
                                    color={`inherit`}
                                    id="adornment-firstName"
                                    onChange={this.inputChange}
                                />
                            </FormControl>
                            <FormControl style={{width: `90%`}}>
                                <InputLabel htmlFor="adornment-lastName">Фамилия</InputLabel>
                                <Input
                                    name='lastName'
                                    color={`inherit`}
                                    id="adornment-lastName"
                                    onChange={this.inputChange}
                                />
                                <FormControl style={{marginTop: `25px`}} className={classes.formControl}>
                                    <NativeSelect onChange={this.inputChange} defaultValue={`Front-end`}
                                                  name={`position`}>
                                        {position.map((item, index) =>
                                            <option key={index} value={`${item}`}>{item}</option>
                                        )}
                                    </NativeSelect>
                                </FormControl>
                                <FormControl style={{marginTop: `25px`}} className={classes.formControl}>
                                    <NativeSelect onChange={this.inputChange} defaultValue={`Junior`}
                                                  name={`level`}>
                                        {level.map((item, index) =>
                                            <option key={index} value={`${item}`}>{item}</option>
                                        )}
                                    </NativeSelect>
                                </FormControl>
                            </FormControl>
                            <FormControl style={{width: `90%`}}>
                                <InputLabel htmlFor="adornment-email">Email</InputLabel>
                                <Input
                                    name='email'
                                    color={`inherit`}
                                    id="adornment-email"
                                    onChange={this.inputChange}
                                />
                            </FormControl>
                            <FormControl style={{width: `90%`}}>
                                <InputLabel htmlFor="adornment-password">Пароль</InputLabel>
                                <Input
                                    name='password'
                                    color={`inherit`}
                                    id="adornment-password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    onChange={this.inputChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                            >
                                                {this.state.showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                            <FormControl style={{width: `90%`}}>
                                <InputLabel htmlFor="adornment-repeatPassword">Повторите пароль</InputLabel>
                                <Input
                                    name='repeatPassword'
                                    color={`inherit`}
                                    id="adornment-repeatPassword"
                                    type={this.state.showRepeatPassword ? 'text' : 'password'}
                                    onChange={(event) => {
                                        this.setState({
                                            repeatPassword: event.target.value
                                        })
                                    }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle repeatPassword visibility"
                                                onClick={this.handleClickShowRepeatPassword}
                                            >
                                                {this.state.showRepeatPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl style={{width: `90%`, textAlign: `Center`}}><TermsConditions/></FormControl>

                            <Button variant="outlined" color="inherit" className={classes.button}
                                    onClick={this.getForm}>
                                <Typography variant="button">
                                    Создать
                                </Typography>
                            </Button>
                            <Typography variant="body2" gutterBottom> Уже есть учетная запись ? <Link
                                to="/SignIn">Войти</Link></Typography>
                        </Grid>
                    </Card>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        CheckIn: state.CheckIN,
        hasErrored: state.CheckINHasErrored,
        isLoading: state.CheckINLoading
    };
};

const mapDispatchToProps = dispatch => ({
    checkIN: (url, userData) => dispatch(regFetchData(url, userData))
});

const SignUp = withSnackbar(connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpApp));

export default withStyles(styles)(SignUp);