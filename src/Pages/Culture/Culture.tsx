import "App.css";
import cultures from "Assets/dummy/Culture";
import Aside from "Components/Aside/Aside";
import CultureCard from "Components/Card/CultureCard/CultureCard";
import CategoryBar from "Components/CategoryBar/CategoryBar";
import PaginationComponent from "Components/Pagination/Pagination";
import CultureSkeletonCard from "Components/SkeletonCard/CultureCard/CultureSkeletonCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    CultureContainer,
    CultureList,
    CulturePage,
    CultureSide,
    CultureSideBottomHr,
    CultureSideTopHr,
    CultureWrapper,
} from "./Culture.styles";

export default function Culture(props: any) {
    const [data, setData] = useState(cultures);
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setLoading(0);
        }, 500);
    });
    return (
        <CulturePage>
            <CultureContainer>
                <CultureWrapper>
                    <CultureList>
                        {cultures.map((a: any, index: any) => {
                            return loading ? (
                                <CultureSkeletonCard
                                    key={index}
                                    sectionCategory={props.sectionCategory}
                                    cardIndex={index}
                                />
                            ) : (
                                <Link
                                    style={{ textDecoration: "none" }}
                                    key={index}
                                    to={`/Culture/${index}`}
                                >
                                    <CultureCard data={data[index]} />
                                </Link>
                            );
                        })}
                        <PaginationComponent />
                    </CultureList>
                    <CultureSide>
                        <CultureSideTopHr />
                        <Aside data={data} />
                        <CultureSideBottomHr />
                        <CategoryBar />
                    </CultureSide>
                </CultureWrapper>
            </CultureContainer>
        </CulturePage>
    );
}
