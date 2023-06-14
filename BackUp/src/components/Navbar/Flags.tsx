import { useState } from "react";
import { Box } from "@mui/system";
import ReactFlagsSelect from "react-flags-select";

const Flags = () => {

    const [select, setSelect] = useState<string>("US");

    const onSelect = (code: string) => setSelect(code);

    return (
        <Box>
            <ReactFlagsSelect
                selected={select}
                onSelect={onSelect}
                countries={["US", "GB", "RU", "NL", "SA", "CN", "AU"]}
                showSelectedLabel={false}
            />
        </Box>
    )
};

export default Flags;