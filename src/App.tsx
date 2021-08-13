import React from 'react';
import './style/App.css';
import './style/filterStyle.css';
import FileterUser from './config/filtter';
import SelectFilter from "./components/SelectFilter";
import FilterValute from "./components/FilterValute";
import {ValuteDayInterface, SelectFilterColour} from "./components/interface";
import Data from "./static/data.json"
import GraphView from "./components/GraphView";
import { OneDayData } from './components/interface';
import _ from "lodash";


function AddNewValute(name: string, shortName: string) {
    const [colour, setColour] = React.useState('');
    const [valuteChecked, setCheckedValute] = React.useState(false);
    return {
        name,
        shortName,
        colour,
        setColour,
        valuteChecked,
        setCheckedValute
    }
}

function App() {
    const [duration, setDuration] = React.useState('');
    const stateForValute: SelectFilterColour[] = []
    const dayValute: ValuteDayInterface = Data.list[0].Valute
    for (const item in dayValute) {
        stateForValute.push(AddNewValute(dayValute[item].Name, item))
    }
    const allValute: OneDayData[] = _.cloneDeep(Data.list);
    return (
        <div className="App">
            <h1>Курсы валют</h1>
            <div className="filterItemValuteStyle">
                <div>
                    <SelectFilter
                        filter={duration}
                        setDuration={setDuration}
                        filterValues={FileterUser.filterDuration}
                    />
                    <div className="AppFilterCheckbox">
                        {
                            stateForValute.map((item: any) =>
                                <div>
                                    <div>
                                        <FilterValute
                                            shortName={item.shortName}
                                            name={item.name}
                                            colour={item.colour}
                                            setColour={item.setColour}
                                            valuteChecked={item.valuteChecked}
                                            setCheckedValute={item.setCheckedValute}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="AppGraph">
                    <GraphView
                        duration={duration}
                        allValute={allValute}
                        stateForValute={stateForValute}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
