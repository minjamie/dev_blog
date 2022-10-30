import { Button } from "Components/Button/Button";
import React, { FC } from "react";
import { SearchContainer, SearchFrom, SearchInput } from "./Search.styles";
import { TfiSearch } from "react-icons/tfi";
import "./Icon.css";

export const Search: FC<any> = ({ expand }: any) => {
    return (
        <SearchContainer expand={expand}>
            <SearchFrom>
                <SearchInput
                    expand={expand}
                    type="text"
                    placeholder="Search..."
                />
                <TfiSearch className="Search-Icon" />
            </SearchFrom>
        </SearchContainer>
    );
};
