import { Button } from "Components/Button/Button";
import React, { FC } from "react";
import { SearchContainer, SearchFrom, SearchInput } from "./Search.styles";
import { TfiSearch } from "react-icons/tfi";

export const Search: FC<any> = ({ expand }: any) => {
    return (
        <SearchContainer expand={expand}>
            <SearchFrom>
                <SearchInput
                    expand={expand}
                    type="search"
                    placeholder="Search..."
                />
                <TfiSearch />
            </SearchFrom>
        </SearchContainer>
    );
};
