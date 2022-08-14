import { Box } from "@mui/system";
import React from "react";
interface WelcomeMessageProps {
    position: string;
    country?: string;
}
const WelcomeMessage = ({
    position,
    country = "VietNam",
}: WelcomeMessageProps) => {
    return (
        <div>
            <Box mb={1}>
                Welcome {position} from {country}
            </Box>
        </div>
    );
};

export default WelcomeMessage;
