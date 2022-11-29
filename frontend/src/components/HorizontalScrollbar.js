import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

// import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
// import RightArrowIcon from '../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../assets/icons/left-arrow.png';


const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }) => {
    return (
        <div>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
                </Box>
            )
            )}
        </div>
    )
}

export default HorizontalScrollbar