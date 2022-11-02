import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PaginationComponent() {
    return (
        <Stack spacing={2}>
            <Pagination
                count={10}
                defaultPage={1}
                siblingCount={0}
                boundaryCount={2}
                size="large"
                variant="outlined"
                hidePrevButton
            />
        </Stack>
    );
}

export default PaginationComponent;
