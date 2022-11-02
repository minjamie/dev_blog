import * as React from "react";
import { makeStyles, useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem, OutlinedInput } from "@mui/material";

export default function MultipleSelect() {
    const teams = [
        "플랫폼 개발팀",
        "제품 개발팀",
        "전략 대응팀",
        "경쟁대응팀",
        "구조개선TF팀",
        "차세대EMR팀",
    ];

    return (
        <FormControl
            fullWidth
            variant="standard"
            defaultValue={"소속 팀"}
            sx={{
                width: 370,
                height: 40,
            }}
        >
            <InputLabel
                id="demo-simple-select-standard-label"
                style={{ color: "#7a7b85", margin: "0 auto" }}
                variant="standard"
                htmlFor="uncontrolled-native"
            >
                소속팀을 선택하세요.
            </InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
                sx={{
                    width: 370,
                    height: 40,
                }}
            >
                {teams.map((a, index) => {
                    return (
                        <MenuItem key={index} value={index}>
                            {teams[index]}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
}
