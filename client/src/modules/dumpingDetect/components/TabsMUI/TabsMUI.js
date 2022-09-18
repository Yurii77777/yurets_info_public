import { useState } from "react";

import PT from "prop-types";

import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box className="module-article__content-container">
                    {children}
                </Box>
            )}
        </div>
    );
};

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
        }}
    />
))({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
        maxWidth: 50,
        width: "100%",
        backgroundColor: "#b4f299",
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: "none",
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(20),
        marginRight: theme.spacing(1),
        color: "rgba(255, 255, 255, 0.7)",
        "&.Mui-selected": {
            color: "#fff",
        },
        "&.Mui-focusVisible": {
            backgroundColor: "rgba(100, 95, 228, 0.32)",
        },
    })
);

export default function CustomizedTabs({ tab1Value, tab2Value }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs"
                >
                    <StyledTab label="Загальна інфо" />
                    <StyledTab label="Детальна інфо" />
                </StyledTabs>
                <Box sx={{ p: 3 }} />
            </Box>
            <TabPanel value={value} index={0}>
                {tab1Value}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {tab2Value}
            </TabPanel>
        </Box>
    );
}

TabPanel.propTypes = {
    children: PT.node,
    index: PT.number.isRequired,
    value: PT.number.isRequired,
};
