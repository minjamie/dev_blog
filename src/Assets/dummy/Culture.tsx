const cultures = [
    {
        id: 0,
        title: "김민재",
        content: `개발자로서 성장하기 위해서 혼자 보단 함께를 지향하며 성장하며 배운 과정을 기록화하는 것을 습관화합니다.

        오늘보다 발전한 내일을 위해서 배운 것들을 기술 블로그에 꾸준히 배운 것들을 기록하며 운영하고 있습니다.
        약 2개월간 진행한 Deep Dive JavaScript 스터디에서 매주 발표를 통해 다양한 사람들과 함께 의견을 나누며 효율적인 자바스크립트 코딩에 대해 학습했습니다.

        프로젝트와 기업협업을 통해 배운 것들을 동료와 함께 회고하며 회고록을 작성하며 나아지기 위해 피드백을 주고받고 있습니다.
        협업과 개발문화에 익숙하고, 좋은 컨벤션과 아키텍처에 대해서 공유하는 걸 좋아합니다.

        회의록, 기능/기술 명세서, API 문서 등 document 작성을 습관화합니다.
        prettier, eslint와 code convention 등 개발 환경 개선할 수 있는 사항들을 찾아보고 적용 할 줄 아는 개발자입니다.

        개발의 생산성을 높이기 위해서 재사용 가능한 코드 작성을 위해 무단히 노력하며 코드리뷰 문화를 통해 개선해나가고 있습니다.
        업무 효율성 증진을 위해 새로운 기술과 테크닉을 찾아 배우는 과정을 즐기는 개발자입니다.

        효율적인 API 통신을 위해 RESTful api와 GraphQL 방식의 차이를 알고 적용할 줄 알며 쿼리 튜닝과 같이 성능 최적화를 위해 고민합니다.
        클라우드 컴퓨팅 플랫폼(AWS)와 Docker를 활용한 개발, 배포 경험이 있습니다.
        React를 활용한 프론트 개발 경험을 기반으로 협업에 도움이 되도록 노력합니다.`,
        img: "https://avatars.githubusercontent.com/u/81890292?v=4",
        email: "minjae2246@ubcare.co.kr",
        date: "2022-10-23",
        count: 0,
        tags: [
            "CSS3",
            "HTML5",
            "JavaScript",
            "React",
            "SASS",
            "NodeJS",
            "Express.js",
            "NestJS",
            "MySQL",
        ],
    },
    {
        id: 1,
        title: "Semantic UI React",
        content: `개발자로서 성장하기 위해서 혼자 보단 함께를 지향하며 성장하며 배운 과정을 기록개발자로서 성장하기 위해서 혼자 보단 함께를 지향하며 성장하며 배운 과정을 기록`,
        img: "https://react.semantic-ui.com/logo.png",
        email: "minjae2246@gmail.com",
        date: "2022-10-21",
        count: 0,
        tags: [
            "가",
            "가나",
            "가나다",
            "가나다라",
            "가나다라마바",
            "가나다라마바사아",
            "가나다라마바사아자",
        ],
    },
    {
        id: 2,
        title: "Material-UI",
        content: `Material- UI is an open`,
        img: "https://mui.com/static/logo.png",
        email: "minjae2246@naver.com",
        date: "2022-10-25",
        count: 0,
        tags: ["A", "BB", "CCC", "DDDD", "EEEEE", "DDDDDD", "GGGGGGG"],
    },
    {
        id: 3,
        title: "React BootStrap",
        content: `React- Bootstrap is a component - based library that provides native Bootstrap components as pure React components
            React- Bootstrap is a component - based library that provides native Bootstrap components as pure React components
            React- Bootstrap is a component - based library that provides native Bootstrap components as pure React components
            React- Bootstrap is a component - based library that provides native Bootstrap components as pure React components
            React- Bootstrap is a component - based library that provides native Bootstrap components as pure React components
            React- Bootstrap is a component - based library that provides native Bootstrap components as pure React components
            React- Bootstrap is a component - based library that provides native Bootstrap components as pure React components
            `,
        img: "data:image/png;base64,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",
        email: "minjae2246@ubcare.co.kr",
        date: "2022-10-23",
        count: 0,
        tags: [
            "가a",
            "가aB",
            "가나Cd",
            "가나다Efg",
            "EEEEE",
            "DDDDDD",
            "GGGGGGG",
        ],
    },
    {
        id: 4,
        title: "Semantic UI React",
        content: `Semantic UI React is the official React integration for Semantic UI.
            `,
        img: "https://react.semantic-ui.com/logo.png",
        email: "minjae2246@gmail.com",
        date: "2022-10-21",
        count: 0,
        tags: ["A", "BB", "CCC", "DDDD", "EEEEE", "DDDDDD", "GGGGGGG"],
    },
    {
        id: 5,
        title: "Material-UI",
        content: `Material- UI is an open - source project that features React components that implement Google's Material Design.
            Material- UI is an open - source project that features React components that implement Google's Material Design.
            Material- UI is an open - source project that features React components that implement Google's Material Design.
            Material- UI is an open - source project that features React components that implement Google's Material Design.
            Material- UI is an open - source project that features React components that implement Google's Material Design.
            Material- UI is an open - source project that features React components that implement Google's Material Design.
            Material- UI is an open - source project that features React components that implement Google's Material Design.
            Material- UI is an open - source project that features React components that implement Google's Material Design.
            `,
        img: "https://mui.com/static/logo.png",
        email: "minjae2246@naver.com",
        date: "2022-10-25",
        count: 0,
        tags: ["a", "bb", "ccc", "DDDD", "EEEEE", "DDDDDD", "GGGGGGG"],
    },
];

export default cultures;
