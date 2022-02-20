import { Fragment } from "react/cjs/react.production.min";
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealsSummary";


function Meals() {
    return <Fragment>
        <MealSummary />
        <AvailableMeals />
    </Fragment>
};

export default Meals;
