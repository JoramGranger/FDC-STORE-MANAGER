import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize='small'/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar 
                    value={70} 
                    text={"70%"} 
                    strokeWidth={2} />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">UGX 1,100,000</p>
                <p className="description">Previous transactions processing</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlinedIcon  fontSize='small'/>
                            <div className="resultAmount">UGX 12000</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon  fontSize='small'/>
                            <div className="resultAmount">UGX 12000</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon  fontSize='small'/>
                            <div className="resultAmount">UGX 12000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;