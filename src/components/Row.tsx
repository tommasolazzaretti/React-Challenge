import {useEffect, useState} from "react";

export interface RowProps {
    value: any,
    operator: any,
    enabled: any,
    onDelete?: () => void
    onChange?: (value: number, operator: string, enabled: boolean) => void
}

export default function Row({
    value,
    operator,
    enabled,
    onDelete,
    onChange
}: RowProps) {

    const [selectedValue, setSelectedValue] = useState<any>(value)
    const [selectedOperator, setSelectedOperator] = useState<string>(operator)
    const [selectedEnabled, setSelectedEnabled] = useState<boolean>(enabled)

    useEffect(() => {
        if (onChange)
            onChange(selectedValue, selectedOperator, selectedEnabled)
    }, [selectedValue, selectedOperator, selectedEnabled])

    return (
        <div>

            <select onChange={(value) => setSelectedOperator(value.target.value)}>
                <option value={'plus'}>+</option>
                <option value={'minus'}>-</option>
            </select>

            <input
                value={value}
                onChange={(value) => setSelectedValue(value.target.value)}
                type="number"
            />

            <button onClick={() => setSelectedEnabled(!selectedEnabled)}>
                {selectedEnabled ? 'Enabled' : 'Disabled'}
            </button>

            <button onClick={onDelete}>Delete</button>

        </div>
    )
}
