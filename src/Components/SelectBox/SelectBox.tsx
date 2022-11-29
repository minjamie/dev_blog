import { MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
const teams = [
    "플랫폼 개발팀",
    "제품 개발팀",
    "전략 대응팀",
    "경쟁대응팀",
    "구조개선TF팀",
    "차세대EMR팀",
];
export default function MultipleSelect() {
    const [team, setTeam] = useState("");
    const handleChange = (event: SelectChangeEvent<string>): any => {
        setTeam(event.target.value);
    };
    return (
        <FormControl fullWidth={true}>
            <InputLabel
                variant="standard"
                htmlFor="uncontrolled-native"
                sx={{
                    left: "0.6rem",
                    top: "-0.6rem",
                    fontSize: "0.85rem",
                }}
                color="warning"
            >
                {team === "" ? "소속팀을 선택하세요" : ""}
            </InputLabel>

            <Select
                onChange={handleChange}
                sx={{
                    minHeight: 10,
                    height: "2.4rem",
                    borderRadius: "0.5rem",
                }}
                value={team}
                color="warning"
            >
                {teams.map((a, index) => {
                    return (
                        <MenuItem key={index} value={teams[index]}>
                            {teams[index]}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
}
