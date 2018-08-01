const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '32px',
    container: {
        maxWidth: '1170px',
        fields: '30px'                                                       
    },
    breakPoints: {
        lg: {
            width: "1200px"
        },
        md: {
            width: "992px",
            fields: "15px"
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "300px"
        }
    },
    oldSizeStyle: false
};

smartgrid('./src/css/libs', settings);