import React from "react";
import data from "../../mocks/data.json"
import ChipItem from "../chip-item/chip-item.component";

import "./chips-filter.styles.scss"

function ChipsFilter({selectedCountryId, setSelectedCountryId}) {
    const handleClick = ({country_id}) => {
        setSelectedCountryId(country_id);
    }

    return (
        <div className="filter">
            <h3 className="subtitle">
                Калькулятор податків для ФОП по країнах
            </h3>
            <div className="chips">
                {data.map((chip) => {
                    const {country_id, country_name} = chip;
                    return (
                        <ChipItem key={country_id}
                                  label={country_name}
                                  onClick={() => handleClick(chip)}
                                  clicked={country_id === selectedCountryId}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default ChipsFilter;
