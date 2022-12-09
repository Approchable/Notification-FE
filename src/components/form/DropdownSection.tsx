import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';


interface DropDownTpyes {
    dropDownItems: { label: string, value: string }[];
    setItem: any;
    selectedDropdown: string;
    placeHolder: string;
}
export const DropDownSection: React.FC<DropDownTpyes> =
    ({ dropDownItems, setItem, selectedDropdown, placeHolder }) => {
        const [displayed, setDisplayed] = useState("")        
        const [open, setOpen] = useState(false)
        const handleClick = (item: {value: string, label: string}) => {
            setOpen(false)
            setItem(item.value)
            setDisplayed(item.label)
        }
        return (
            <Container>
                <button
                    onClick={() => setOpen(!open)}
                    className="dropdown-button dropdown-toggle px-4 "
                >
                    {displayed !== "" ? displayed : placeHolder}
                </button>
                {
                    open ?
                        <div
                            className='dropdown-background'
                        >
                            {
                                dropDownItems.map((item, id) => (
                                    <DropDownMenu
                                        onClick={() => handleClick(item)}
                                        label={item.label}
                                        key={id.toString()}
                                    />
                                ))

                            }
                        </div>
                        :
                        null
                }
            </Container>
        );
    }



const DropDownMenu = ({ onClick, label }: { onClick: any, label: string }) => {
    return (
        <Container
        >
            <button
                className="dropdown-menu-item"
                onClick={onClick}
            >
                {label}
            </button>
        </Container>
    )
}