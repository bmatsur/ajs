// import { ReactNode } from "react";
import { ICard } from "../../types";


export const Card = ({icon, title, description}: ICard) => (
    <div>
        {icon}
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
);

