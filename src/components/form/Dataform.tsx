import React from 'react'
import { Container, Row } from 'react-bootstrap'


interface DataFormType {
    onChangeKey: (e: any) => void;
    keyValue?: string;
    onChangeData: (e: any) => void;
    dataValue?: string;

}

export const DataForm: React.FC<DataFormType> = ({ onChangeKey, keyValue="", onChangeData, dataValue="" }) => {

    return (
        <Row>
         <Container >
            <label> Keys </label>
            <input
                id="key"
                name="key"
                placeholder="Enter key"
                className="form-control"
                value={keyValue}
                onChange={onChangeKey}
            />
        </Container>

        <Container >
            <label>Value</label>
            <input
                id="value"
                name="value"
                placeholder="Enter value"
                className="form-control"
                value={dataValue}
                onChange={onChangeData}
            />
        </Container>
        </Row>
        )
}
