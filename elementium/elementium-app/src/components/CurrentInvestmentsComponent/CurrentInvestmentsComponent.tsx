import React from "react";
import styles from "./CurrentInvestmentsComponent-styles.module.scss";
import CurrentInvestmentsCardComponent from "../CurrentInvestmentsCardComponent/CurrentInvestmentsCardComponent";

const CurrentInvestmentsComponent = () => {
    return(
        <div className={styles.main}>

            <h1>Current Investments</h1>


            <div className={styles.content}>
                <div className={styles.columnTitles}>
                    <p>Name</p>
                    <p>Price(ZAR)</p>
                    <p>Exchange</p>
                </div>

                <CurrentInvestmentsCardComponent name="Hydrogen" price="0.004" exchange="3%"/>
                <CurrentInvestmentsCardComponent name="Helium" price="0.004" exchange="3%"/>
                <CurrentInvestmentsCardComponent name="Lithium" price="0.004" exchange="3%"/>
            </div>
        </div>
    );
}

export default CurrentInvestmentsComponent;