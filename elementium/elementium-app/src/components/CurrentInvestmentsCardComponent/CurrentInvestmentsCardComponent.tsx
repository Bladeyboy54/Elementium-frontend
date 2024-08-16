import React from "react";
import styles from "./CurrentInvestmentsCardComponent-styles.module.scss";

const CurrentInvestmentsCardComponent = (props: any) => {
    const {name, price, exchange} = props;

    return(
        <div className={styles.main}>
            <p>{name}</p>
            <p>{price}</p>
            <p>{exchange}</p>
        </div>
    );
}

export default CurrentInvestmentsCardComponent;