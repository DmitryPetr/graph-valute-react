import React  from 'react';
import _ from 'lodash'
import moment from 'moment'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {SelectFilterColour, ValuteDayInterface, OneDayData} from "./interface";

function createItem(dayValute: ValuteDayInterface, isPrevious: boolean, stateForValute: SelectFilterColour[]) {
    const currentObj: any = {}
    for (const item of stateForValute) {
        const elem = dayValute[item.shortName]
        const value = currentObj[item.shortName] = isPrevious ? elem.Previous : elem.Value
        currentObj[item.shortName] = (value/elem.Nominal)
    }
    return currentObj
}

function createData(arrayData: OneDayData[], duration: number, stateForValute: SelectFilterColour[]) {
    const newData: any[] = []
    const chechedValute = stateForValute.filter((item) => item.valuteChecked)
    const getObj = createItem(arrayData[0].Valute, true, chechedValute)
    if (!_.isEmpty(getObj)) {
        newData.push({...getObj, name: moment(arrayData[0].PreviousDate).format('DD.MM.YYYY')})
    }
    for (let i = 0; i < duration-1; i++) {
        if (i+1 > arrayData.length)
            break
        const getObj = createItem(arrayData[i].Valute, false, chechedValute)
        if (!_.isEmpty(getObj)) {
            newData.push({...getObj, name: moment(arrayData[i].Date).format('DD.MM.YYYY')})
        }
    }
    return newData
}

function LackOfData(props: {isLackOfData: boolean; duration: number}) {
    return props.isLackOfData ? (
        <div>
            Нет данных для отображения более чем {props.duration} дней
        </div>
    ) : (
        <div></div>
    )
}

function GraphView(props: any) {
    const data: any = createData(props.allValute, props.duration, props.stateForValute)
    const isLackOfData = data.length < props.duration
    if (!_.isEmpty(data)) {
        return (
            <div>
                <LackOfData
                    isLackOfData={isLackOfData}
                    duration={data.length}
                />
                <LineChart width={1000} height={550} data={data}>
                    {
                        props.stateForValute.map((item: any) => {
                            if (item.valuteChecked) {
                                return (
                                    <Line type="monotone" dataKey={item.shortName} key={item.shortName}
                                          stroke={item.colour !== '' ? item.colour : '#8884d8'}
                                    />
                                )
                            }
                        })
                    }
                    <CartesianGrid stroke="#ccc"/>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>
        );
    }
    return (
        <div></div>
    );
}

export default GraphView;
