import { MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

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
        <FormControl fullWidth={true}>
            <InputLabel
                id="demo-simple-select-standard-label"
                variant="standard"
                htmlFor="uncontrolled-native"
            >
                소속팀을 선택하세요.
            </InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
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
