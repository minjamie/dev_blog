import "App.css";
import { CultureList, CulturePage } from "./Culture.styles";
import { useState } from "react";
import CultureCard from "Components/Card/CultureCard/CultureCard";
import cultures from "Assets/dummy/Culture";
import { Link } from "react-router-dom";

export default function Culture(props: any) {
    const [data, setData] = useState(cultures);
    return (
        <CulturePage>
            <CultureList>
                {cultures.map((a: any, index: any) => {
                    return (
                        <Link
                            style={{ textDecoration: "none" }}
                            key={index}
                            to={`/Culture/${index}`}
                        >
                            <CultureCard data={data[index]} />;
                        </Link>
                    );
                })}
            </CultureList>
        </CulturePage>
    );
}
