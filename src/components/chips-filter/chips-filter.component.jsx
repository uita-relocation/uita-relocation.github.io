import React, {useState} from "react";
import data from "../../mocks/data.json"
import ChipItem from "../chip-item/chip-item.component";

import "./chips-filter.styles.scss"

function ChipsFilter({ chipHandleClick }) {
    const [selectedIdx, setSelectedIdx] = useState(null)

    const handleClick = ( index ) => {
      setSelectedIdx(index);
      chipHandleClick(index);
    };

    return (
        <div className="filter">
            <div className="subtitle">
                Калькулятор податків для ФОП по країнах
            </div>
            <div className="chips">
                {data.map((chip, index) => {
                        return (
                            <ChipItem key={index}
                                      label={chip.country_name}
                                      onClick={() => handleClick(index)}
                                      selectedIdx={index}
                                      clicked={index === selectedIdx}/>
                        )
                    }
                )}
            </div>
        </div>
    );
}

export default ChipsFilter;
