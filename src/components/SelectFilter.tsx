import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {SelectFilterInterfae} from "./interface";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            minWidth: 300,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

function SelectFiller(props: SelectFilterInterfae) {
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.setDuration(event.target.value as string);
    };

  return (
    <div>
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Продолжительность</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.filter}
                onChange={handleChange}
            >
                {
                    props.filterValues.list.map((item: any) =>
                        <MenuItem key={item.num} value={item.num}>
                            {item.text}
                        </MenuItem>)
                }
            </Select>
        </FormControl>
    </div>
  );
}

export default SelectFiller;
