import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles({
    card: {
        margin: "40px auto",
        width: "550px",
        padding: "0 30px 30px 45px",
    },
    flexing: {
        justifyContent: "space-between",
        margin: "24px 0px 0px",
    },
    formControl: {
        width: "500px",
    },
    textField: {
        width: "250px",
        textAlign: "left",
        color: "plum",
    },
    btn: {
        backgroundColor: "plum",
        color: "#fff",
        float: "right",
        right: "30px",
    },
    outlined: {
        border: "1px solid #939393",
        padding: "0px 2px 15px"
    },
    formLabel: {
        color: "plum",
        position: "relative",
        top: "-8px",
        maxWidth: "fit-content",
        margin: "0px 15px",
        backgroundColor: "white",
        padding: "0px 5px"
    },
    input: {
            color: "plum",
    },
});
const days = [
    {
        val: "1",
        label: "MON"
    },
    {
        val: "2",
        label: "TUE"
    },
    {
        val: "3",
        label: "WED"
    },
    {
        val: "4",
        label: "THU"
    },
    {
        val: "5",
        label: "FRI"
    },
    {
        val: "6",
        label: "SAT"
    },
    {
        val: "0",
        label: "SUN"
    },
];


export default function App() {
    const classes = useStyles();
    const [repeat, setRepeat] = React.useState("");
    const [shift, setShift] = React.useState("");

    const handleRepeatChange = (event) => {
        setRepeat(event.target.value);
    };

    const handleShiftChange = (event) => {
        setShift(event.target.value);
    };


    const inputField = [
        {
            label: "Select Start Date",
            control: <TextField id="date"
                type="date"
                defaultValue="04-05-2021"
                className={classes.textField}
                InputProps={{
                    className: classes.input,
                }}
            />
        },
        {
            label: "Select Repeat Type",
            control: <Select
                className={classes.textField}
                value={repeat}
                onChange={handleRepeatChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                >
                <MenuItem value="" disabled>Repeats</MenuItem>
                <MenuItem value="None">None</MenuItem>
                <MenuItem value="Daily">Daily</MenuItem>
                <MenuItem value="Weekly">Weekly</MenuItem>
            </Select>,
        },
        {
            label: "Select Shift",
            control: <Select
                className={classes.textField}
                value={shift}
                onChange={handleShiftChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
            >
                <MenuItem value="" disabled>
                    Shifts
                                </MenuItem>
                <MenuItem value="Morning Shift - 5am to 9am">
                    Morning Shift - 5am to 9am
                                </MenuItem>
            </Select>,
        },
        {
            label: "Select Start Time",
            control: <TextField
                id="time"
                type="time"
                defaultValue="00:00"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300,
                    className: classes.input,
                }}
            />,
        },
        {
            label: "Select End Time",
            control: <TextField
                id="time"
                type="time"
                defaultValue="00:00"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300,
                    className: classes.input,
                }}
            />,
        }
    ];

    return (
        <Card className={classes.card}>
            <CardContent style={{ marginBottom: "30px", }}>
                {
                    inputField.map((field) => {
                        return (
                            <FormControl required className={classes.formControl} component="fieldset">
                                <FormControlLabel
                                    className={classes.flexing}
                                    label={field.label}
                                    control={field.control}
                                    labelPlacement="start"
                                />
                            </FormControl>
                            )
                        })
                }
                              
            </CardContent>

            <CardContent>
                <FormControl className={classes.outlined} variant="outlined" component="fieldset">
                    <FormLabel focused={false} className={classes.formLabel} id="radio-outlined"  >Please select the day of the week</FormLabel>
                    <RadioGroup labelId="radio-outlined" row aria-label="position" name="position" defaultValue="top">
                        {
                            days.map((day) => {
                                return(
                                    <FormControlLabel
                                        className={classes.input}
                                        value={day.val}
                                        control={<Radio size="small" color="primary" />}
                                        label={day.label}
                                        labelPlacement="bottom"
                                    />)
                            })
                        }
                        
                    </RadioGroup>
                </FormControl>
            </CardContent>

            <CardContent>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                        <FormControlLabel
                            value="WeekDays"
                            control={<Radio size="small" color="primary" />}
                            label="Weekdays Only"
                            labelPlacement="end"
                        />
                    </RadioGroup>
                </FormControl>
            </CardContent>

            <Fab color="primary" className={classes.btn} aria-label="add">
                <h1>+</h1>
            </Fab>
        </Card>
    );
}