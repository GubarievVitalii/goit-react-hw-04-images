import s from './Loader.module.css';
import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className={s.loader}>
            <ThreeCircles
                height="100"
                width="100"
                color="grey"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    );
};

export default Loader;
