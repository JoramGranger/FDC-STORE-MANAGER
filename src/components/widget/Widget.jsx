import './widget.scss';

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {

    let data;

    // temp

    const amount = 100;
    const diff =20;

    switch(type) {
        /*  user widget */
        case "user": 
        data={
            title:"USERS",
            isMoney: false,
            link: "See all users",
            icon:  (<PersonOutlineOutlinedIcon 
                className='icon'
                style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
                />),
        };
        break;
        /* order widget */
        case "order": 
        data={
            title:"ORDERS",
            isMoney: false,
            link: "See all orders",
            icon:  (<ShoppingCartOutlinedIcon 
                className='icon'
                style={{
                    color: "goldenrod",
                    backgroundColor: "rgba(218, 128, 23, 0.2)",
                }}
                />),
        };
        break;
        /* earnings widget */
        case "earning": 
        data={
            title:"EARNING",
            isMoney: true,
            link: "View net earnings",
            icon:  (<MonetizationOnOutlinedIcon 
                className='icon'
                style={{
                    color: "green",
                    backgroundColor: "rgba(0, 128, 0, 0.2)",
                }}
                />),
        };
        break;
        /* balance widget */
        case "balance": 
        data={
            title:"USERS",
            isMoney: true,
            link: "See details",
            icon:  (<AccountBalanceWalletOutlinedIcon
                className='icon'
                style={{
                    color: "purple",
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                }}
                />),
        };
        break;
        default:
            break;
    }
    return(
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "UGX"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>

            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;