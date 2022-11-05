import {
    CultureAside,
    CultureAsideContainer,
    CultureAsideImage,
    CultureAsideName,
    CultureAsideNumber,
    CultureAsideTitle,
    CultureAsideWrapper,
} from "./Aside.styles";

export default function Aside(props: any) {
    return (
        <CultureAside>
            <CultureAsideTitle>TOP3 UB People</CultureAsideTitle>
            <CultureAsideWrapper>
                {props.data.slice(0, 3).map((a: any, index: any) => {
                    return (
                        <CultureAsideContainer key={index}>
                            <CultureAsideNumber>
                                0{index + 1}
                            </CultureAsideNumber>
                            <CultureAsideImage src={a.img} />
                            <CultureAsideName>{a.title}</CultureAsideName>
                        </CultureAsideContainer>
                    );
                })}
            </CultureAsideWrapper>
        </CultureAside>
    );
}
