import {OneDayData, SelectFilterColour, ValuteDayInterface} from "./interface";
import Data from "../static/data.json";
import {useEffect, useState} from "react";
import _ from "lodash";
import moment from "moment";
import axios, { AxiosInstance } from 'axios'

export const baseURL = 'https://'

export const http: AxiosInstance = axios.create({
    baseURL,
    withCredentials: true
})

const startRequest = async function () {
    let isLoaded = false;
    let error: any = null;
    let items: any = null;
    let allValute: OneDayData[] = _.cloneDeep(Data.list)
    const request = await http.get(`www.cbr-xml-daily.ru/daily_json.js`)
    console.log('test request', request)
    /*console.log('test request', request)
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
        .then(res => res.json())
        .then(
            (result) => {
                console.log('result request', result)
                isLoaded  = true;
                items = result;
                console.log('here 22')
            },
            (er) => {
                isLoaded  = true;
                error = er
            }
        )
    console.log('here end')
    if (isLoaded && _.isNil(error)) {
        if (moment(items?.Date).isAfter(allValute[allValute.length-1].Date)) {
            if (allValute.length > 6) {
                allValute = allValute.slice(allValute.length-6, allValute.length)
            }
            allValute.push(items)
        }
    }*/
    console.log('here return', allValute)
    return allValute;
};

export default startRequest;