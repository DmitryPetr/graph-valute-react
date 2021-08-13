import React from 'react';
import '../style/filterStyle.css';
import {SelectFilterColour} from "./interface";
import ColorPicker from "material-ui-color-picker";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function FilterValute(props: SelectFilterColour) {
    const isColor = (strColor: string) => {
        const s = new Option().style;
        s.color = strColor;
        return s.color !== '';
    }

    const handleChangeColour = ((event: string) => {
            if (isColor(event)) {
                props.setColour(event);
            } else {
                console.error('Invalid Color');
                props.setColour('#000000');
            }
        }
    );

    const handleChangeValute = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setCheckedValute(event.target.checked);
    };

    return (
        <div>
            <FormControlLabel
                control={<Checkbox
                    checked={props.valuteChecked}
                    onChange={handleChangeValute}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />}
                label={props.name}
            />
            <p>Цвет:</p>
            <div>
                <ColorPicker
                    name='color'
                    value={isColor(props.colour)? props.colour : '#000000'}
                    defaultValue='#000000'
                    onChange={handleChangeColour}
                />
            </div>
            <hr/>
        </div>
    );
}

export default FilterValute;
