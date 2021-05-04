import React, {useState} from 'react';
import './App.css';
import Row from "./components/Row";
import Title from "./components/Title";

export default function App() {

    const [rows, setRows] = useState<any[]>([])
    const [total, setTotal] = useState<number>()

    const handleAddRow = () => {
        setRows([...rows, {
            value: 0,
            operator: 'plus',
            enabled: true
        }])
    }

    const handleDelete = (row: any) => {
        const index = rows.indexOf(row);
        if (index > -1) {
            rows.splice(index, 1)
            setRows([...rows])
            calculateTotal()
        }
    }

    const onChangeValue = (row: any, value: number, operator: string, enabled: boolean) => {
        row.value = value
        row.operator = operator
        row.enabled = enabled
        calculateTotal()
    }

    const calculateTotal = () => {
        let totalTmp: number = 0;
        rows.forEach((row) => {
            if (row.enabled)
                if (row.operator === 'plus') {
                    totalTmp = totalTmp + parseInt(row.value)
                } else {
                    totalTmp = totalTmp - parseInt(row.value)
                }
        })
        setTotal(totalTmp)
    }

    return (
        <div className="App">
            <div className="page-wrap">
                <Title title={'React calculator'}/>

                <div>
                    <button onClick={() => handleAddRow()}> add new ROW</button>
                </div>

                <ul>
                    {rows.map((row, index) =>
                        <li key={'li-' + index}>
                            <Row
                                value={row.value}
                                operator={row.operator}
                                enabled={row.enabled}
                                key={'row-' + index}
                                onDelete={() => handleDelete(row)}
                                onChange={(value, operator, enabled) => onChangeValue(row, value, operator, enabled)}
                            />
                        </li>
                    )}
                </ul>

                <div>Totale : {total}</div>
            </div>
        </div>
    );
};
