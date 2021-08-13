interface BasicInterface {
    callBack?: any
}

export interface SelectFilterInterfae extends BasicInterface{
    filter: string
    setDuration: React.Dispatch<React.SetStateAction<string>>
    filterValues: any
}

export interface SelectFilterColour extends BasicInterface{
    name: string
    shortName: string
    colour: string
    setColour: React.Dispatch<React.SetStateAction<string>>
    valuteChecked: boolean
    setCheckedValute: React.Dispatch<React.SetStateAction<boolean>>
}

interface ValuteInterface extends BasicInterface {
    ID: string
    NumCode: string
    CharCode: string
    Nominal: number
    Name: string
    Value: number
    Previous: number
}

export interface ValuteDayInterface extends BasicInterface {
    [key: string]: ValuteInterface
}

export interface OneDayData {
    Date: string
    PreviousDate: string
    PreviousURL: string
    Timestamp: string
    Valute: ValuteDayInterface
}