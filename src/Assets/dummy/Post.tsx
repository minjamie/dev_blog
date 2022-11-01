const posts = [
    {
        id: 0,
        category: "Category",
        title: "React BootStrap",
        content: `Used by 605,000+ projects on GitHub, React-Bootstrap is one of the oldest React UI component libraries out there. In a nutshell, it’s the popular frontend framework Bootstrap completely rebuilt in React. The library consists of ready-made components that are fully responsive and accessible. All the design elements are also highly customizable.

React-Bootstrap can be used for UI foundations, websites, and designing applications. The library is built on 59.4% JavaScript, 38.3% TypeScript, and 2.3% SCSS, and the latest release is compatible with the most recent Bootstrap version, 5.1.

One important upside to using React-Bootstrap is the fact that it’s compatible with the thousands of Bootstrap themes out there. Also, creating custom themes is easy when you keep in mind the classes and variants defined in Bootstrap. On top of that, with React-Bootstrap, you can import only the individual components you’re using, which can help minimize the total amount of code. It’s also a beginner-friendly library, thanks to its proper documentation.

However, as a downside, if you’re familiar with Bootstrap and decide to choose React-Bootstrap for your development project, you’ll have to learn a new API. Moreover, when compared to some other libraries, like MUI or Ant Design, React-Bootstrap has a somewhat smaller set of components.

In the end, React-Bootstrap’s popularity is a clear sign that it’s a great choice for a wide variety of development projects. And if you’re already familiar with Bootstrap, it can feel natural to use React-Bootstrap, too.`,
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAADbCAMAAABOUB36AAAAV1BMVEX///9B4P1L4f0v3v1x5v3T9v5Y4/3y/P+g7f4p3v3p+/+z8f74/v/8//9l5f2P6/7B8/7d+f/J9f7r+/+K6v6q7/7L9f6y8f556P2b7f7Z+P+L6v6A6f7T1jhTAAAN1UlEQVR4nN1d24LqKgzdFq2inVrH0VHH///OY73WsAIB0qpnPe5tO6wCIeT6718+5s1meRzX9fi432zXCi98Q3zvRtaY0QXGGDvaLeavHpQyqs3oxrADY4v94dVDU8QCkbwz/Z/M6bTmSF6ZjievHqICDj6OF9iyefUoc/FtwzRPUzr6ffVAs7AVsTwT/eAZXUlZtkTLT92jlZxkC7v7TKVhHEfzNKObVw85AYuIJXvjWX7cMfrlPS9ZorNXjzsS+ySapwldvXrkMajSWLZEF68eewRmkObpchKmb8bVq0cvBhi+Lf42i9/ZT2kDXE3xKQu3cYiY+jH2ybLwM7UfsnCdM9Mcn3+wWnqJ2p/XjDsOU4dC6f6oKTxETT0dftixcNashef+d+mb0fffoEc6N0vmh9+eGTXbQcecAGcyea38l9+j7y6InBvY2PPjaskqv/a9Vb8FmSDjvzSv2C1q3lrgLinNkFoz4ybU+NbBq1GTwdbBJ+YemVvkoDzb+Re92PkLMiWSLcZOqALOqvR4pmz9npIRm2/JUwJbZy5Z+6PJ9EC3pswmUI2TL29i2ELPEPNNaX4JH+xz4d4HYzZK97xfOiviJ7f9z6eeUZjaR8KC9o55gYemTFTlXvBH3noMP3JH5XctqRFVmFCiuLN6O8bPABtURY8kd+pYo+RmEJ75eiRRgqKN6a6FpReeuXpkSd4X69ZLNPFG89zp0oy8Ng6zaEfRQkOXZjMUy5McypK3WTSpptgrTM7FJWdvrodkGaW5OMiQtF+DaEGdsWUs24xzc4BLCkE6zXQtaKCjpDu49IvZD3mVWN8YUMg+eEpviQ6oxUuqbqwGn8tRjjuV+jaB/wQBRp6Uvcsk4ehcUDOtcJtTe2ALMy/Bv6rCpvpq0owkf2DJntQUZjZLEYpR2D1u9ok0k0xeKL6mHQGmKb5drCeLY4BpkUjTMWAKzIZzFFncksmk2eKr8ToYTeKqpbJEomogNgX3H5E0T2h8NFPjP6lSG1aDjmgyz3q1Dk2vETj13kkjD4LvQRvTXkIylWielBaeZ/zLzqD6QehoghvzqoWp0fy343jaRHMmtUeHThRwNt4jT/RocmdTsvefGs8DJzCd/Bb3BaBIkwvWTlXf5/RE8YpaGBB/X0eKNKGeNcqwCdFFC99TzbeL2bFG2px9nLSaNKl6lvc297M9y6DpoZkdS2PYQMXuKtKkiSIJW6TqQU7wwY3g5PenbtPF/Dk4XaeLKk16E74hkSa1m5/0qel2thMo0s7HVaXJ2PNN+EkIKoNO18ZQdGnnjz5p+qo0nXFd/2KiY/dLyAjBPkcqqNJkNmeyuZYR3QLQ658uTTwuYXCECxwDLgE1EOvSxDIokebXNjrV5v4XqX6pS5MJwU+gWTVHNjE1CNd5o0vTMVOl0ayasc0wQwJ1SZcmPlEiaU5CZpcQgDqiSxOrezGSdjpLX6tXoJuMLk0ceCQ/N1e5EzliTIm6NCeYpvDpba3h/YBGhiFoynTaplRx8eDL9xCLVuLM9aaTRICx/w0gaQXX6q3X0ov5tMU6XDB2sQHOzaCRZBUZYddexOrl4lC5uiVnLxpACwqENVeR4XXFz2JyOaHcj8ouHF2aNA/oDE+WzD9vogzG4/uABzkbpy5N6Eb02Ujm0RGhD3OoawDnA5FUaX7B5ecJhE2JOLvFIICyD7xIV6UJj03eLR+oG3N52t1/16fdlePxvanShJEqrEa7DXO09e+U0rlKNJCp6zm4VGnCl3ErKZRgYGy5aW/HG8rn7BlDdiKPj0WTZtSaRb7I7mNmf12Cjh3tbBpwjy6v70GTJrRpYH9Y5Xdw27pz1jqrdoHykf0qpSJNXPEGytmpL07HmOXTPdxZtTU6oHFCcg80oVkPal9TH8liQ/aY4561a/eLBgJW9Gg6H519U8XPpRmBreys2g3YHn4frxrNCVyyFkW5sCFXpoDyChvSnv9OIMxEiyYTEIh2JqcUsDXHgLyhCF1plWiumJEDMYuc5y3snl13uxDLoO1QKS4IDx3l4jPRrt1iIw44//D94WDAnAbN6Y4ZOngNswADV28/S4FNLZ/mmluFowKsQqhCBKtv+cO6BXFkOTS/qvl2VrNuALRhYLSJDRqLGMfp7XOGh5oVNuwtw2RRZT90lkhiDn2eTkkAdm/R0RYFPSFZAo9WCm/6nuD5vmgaWKURTabIj+Txz4tyXfqiCQd/AFtM6EZi5ZwsmL4XmqbGziHXmS32CbJCSFb1oQ+arIB3fgk3MAYnhGSZEfo0zY4LLHWuTzHh/kwxAyjPh6DJf17nphEV5YZHKswp7GHRmvECK+FL+sOoQFt4nxVOZk8iyOzRwqXbKy5ksUJCSJog2tOBYpCfkRYAikzEAWeKSLXokWZ7SXbWE/2F6Ch4AITsi68YPabCORo5pRkbA+/oUPIP1WfGn6m/fH8rNufxTWezvUc+SSIqgiJtFG+5Ny8ouloftSH7/bsU7yhp7+gqC9TvEZfSgM9N4XT2TbMbWO/cNqNSWPH7X6cFESoPQSOqN8uBMx6+Sqel6LhxnVtGxLLt5YZixQhnSzzWlVNsTV5VlW0wkXPfrKupDOv5oZkFYnwfVgwgLKVVaHqxHsRa3Sc/3jm9/w4kecp4eurYZ9iC4l1F0z1vSn2oOyiTVLRuvU6xAWl6I5keNy6Usxu2Rnt8hSNZ4qRm7AE7oZ3dCaMwGAvZA4EON+Hoa9WAGbZ5yUPYMqsvoMzwAuj8mcIXV92YPeyYf4p/wCk0gfKDPpIjSfa2Lk0u2qfzvTnPX45/M1wfU5kmp250zD44SKH1VrMvDSZRBZVjbZpMHnl3HFzYJVvxlVYnARgo9uABHCfwZAFjBQqzcl0d0YENqHzqNBnZ//S5+Xg9uwNE3bggN8grYAxVp8lcJeyTWYiteHH64ZgSBVFeruMooCPo02Sy/p7vhb74y6e4xH8g2LKGAeDeQ0WfJj4x6Nf+84kVU3TrbDtrtoF/xFuARp8ms2rpKPxh7sYeb2vX9aO1n8BVRLxOxB5oYlXIkRGhrprX4Gh3zR6ZgfukUA80mbQ/R7+eh9LCjK2byhnh1VjvHtA+1bYHmvg0R4oKEx3WHbpx7UfXh13VyOPh74Gm03znMga0dVLKWN9up+CKPlAeyhXwDow9JtNxbMLN42RylSk+qq0PmlDf4wqrNZE5Yg9BA2KF2JyXPmhS5/sFnCmkOkZNaLH5vm1BsOS5gfdBE8dL8nfCQ1SS6jV7s01udKUQZyfsgyauZeF7ZxNbBaDNxTUluIeieOyeaGL9wGs2/prllK3oAut8b0LztEX3+SUPWuBlOxzNYHhMNVMhCpftcCJIEgW0iM+Ylw2+lwMlo8jDNqu2zBnIW9EHTZhILq7Ptt7nFl8BN+zBlL2Y0LXvzCl1ddvBVPe4CL3pb5khj1zD0GAXsejK5/NNujxyrmSDXatTumlg5VgC+k0HM5JE9QG7IqPOHunQ0ANNxuMRX989vaN8z1UTPYNLKMbrdOKR1fi8/ra/GphncPU+I6Nn/4HmuJPJ5ujP2Oqgv4qmZzBrVlJkn4CmrVyMXdWq2Y+LMNmntEp1mmvOrRdf1pSqGd1RVYdmdq3Fy/HtmmXUaXKleBNKDtMS2ciatF41v/u2dDQKUXnsE22abG+Z+Fr99FX+3Y0cjg8xpE2TO+oSBC2VZf46FfC4vi8hZZpcKEmKBHLeFajSjyxDNyK6NPl2SDb+ZfQ+F9IWUZeim19Flaan1kjCG+n6D3bYQjEqVzGkSdPTeTelARXN5wjvbrRlLmJIs+eC57xOqJJNg28lahRUTdotrUbTXxUw4RbmdJYQxP/DJmLt31aiOfUbH1NaGtLFwdjTnwFPz6UOzXmzC9huUlrgOa0IRE/BRj5cH7FiJsR+/1eDWnjge0aDyhOhtggDk7mucEaMAMPL21LK9Kc2W0eM+u/x17L8S2CZ3JjSVyisV4iEhwPi85bn7nKRrH2zTGu8Tnvjyt/y+xKeia0pMzodo7aNfSO1M2VO7u7wPYATl6ybiR2jYQzd0TmjdXUOzcHFbZHYwCeT5tCNgNPbrdO9GakWcz3qekFq+558mpKSkm/A0jlQoi/mA4khUvUgFlQ9iDQNOjWne4JN8PR1QSwBkYVa5sOQFGcTs0juKd+CcSWrk6zTRewVqT3lW7AZlqpgs71i4Jjp5I8uh2AJSyLFwzGSSA0tVXQfhzSSyYrPE+j2kpbkOwzA0ZYJdmcM6igV6geh4v8KHIt94qULgYayi06UtUZsI8/QmNHuV5FjC39rXAhWwZOb8DCstaPyOPvOPj9cOK1xQ0oV33jENJMsrOY68gbBEbWBbc8n7SY4V4eD2xrX9+uVZ1cq7yZl0NF6rEprXzJLDxtKE074MafvTT1VLkzZ37bSgRMvhitarZceR5XJvCcNADf6D1SKP3h7WQaKgLwH3Jw6YiecLvxtHhMCBV8A4OYvHgNfbepAV/k3F7F3oLGb3X6zmf3VJhT2b8YJzuOXAEdTydyqNj6u7FVI7ypvig9ZsGewwXGhqUwJA3ghkoytphBWzn4bpLieP20qW/irlaGpLD9pV94RZz03KdGB74AoV6VZvruizgJVlMSwuxzf1Ksh9Ie4daM+DOtwi/JOgaEPRqC3tTH7NzcRCLHlJ9SY+kOlK8ICETXG1ossb/H7YfJT2MfdpDUSl8vmYw8QH+bNZjmu67LeLTfN6i0p/geq4alV/ZwzLQAAAABJRU5ErkJggg==",
        githubStars: "20.9k",
        githubFolks: "3.4k",
        count: 0,
    },
    {
        id: 1,
        category: "Category",
        title: "Semantic UI React",
        content: `Used by more than 132,000 projects on GitHub, Semantic UI React is a frontend component library for ready-made, mobile-responsive solutions. As the name suggests, it’s the official React integration of the Semantic UI development framework, known for its responsive, human-friendly HTML code. Semantic UI React is built on 99.9% JavaScript and 0.1% TypeScript.

            In the Semantic UI React library, there are multiple variations of each component, so you’ll most likely be able to find an existing component that’s suitable for your use case and avoid spending too much time on customizing components. Still, you can make sure each component fits your design by modifying the SCSS stylesheets. You can use the Semantic UI React library for your whole project or only install individual elements.
            
            As Semantic UI — the framework that Semantic UI React is based on — was created for web development, its React equivalent is also more suited for web development projects than mobile apps.
            
            However, if you choose Semantic UI React for your project, you should keep in mind that you’ll have to do some extra work, as not all the components are fully accessible by default. In addition to that, the original Semantic UI framework is no longer maintained.
            
            Nevertheless, Semantic UI React is going strong and, on the whole, it’s a good choice for beginners looking to build responsive web apps. It has human-friendly code, great documentation with plenty of examples, and a code sandbox for trying out each component.
            
            The image below shows an example of label components in Semantic UI React.`,
        img: "https://react.semantic-ui.com/logo.png",
        githubStars: "12k",
        githubFolks: "3.5k",
        count: 0,
    },
    {
        id: 2,
        category: "Category",
        title: "Material-UI",
        content: `Used by more than 745,000 projects on GitHub, MUI is a straightforward and customizable React components library based on Google’s Material Design. So, MUI is not simply a component library, but an entire design system. It features a wholesome system of guidelines, design principles, and best practices of UI design. MUI is built on 63.9% JavaScript and 36.1% TypeScript.

You can use MUI with its large set of components to easily create a user interface in React applications. Either use the existing Material Design components, customize them, or create your own design system. Thanks to MUI’s ready-made components and in-depth documentation, you can create clean and beautiful mobile or web apps fast — even with little previous design experience.

As the Material-UI design system that MUI is based on was created by Google, it’s also used on Google’s own platform. Therefore, MUI components can have a distinctly Google-like look and feel. On the one hand, this means MUI can be an especially great choice for building Android apps, as the app’s visuals will fit well with the operating system.

But on the other hand, any website or app created with this library — if not customized enough — could be easily associated with Google.

Still, seeing how much MUI is used and how many GitHub stars it has, it’s one of the best React UI component libraries out there. It offers a large number of React components, suitable for a wide variety of general-purpose development projects. MUI is used by medium.com, Scale AI, and UNIQLO, among others..`,
        img: "https://mui.com/static/logo.png",
        githubStars: "79.9k",
        githubFolks: "27.5k",
        count: 0,
    },
    {
        id: 3,
        category: "Category",
        title: "Ant Design",
        content: `Used by over 255,000 projects on GitHub, Ant Design describes itself as a React UI library and design system for enterprise-level users, meaning that the elements are designed for business use. It was created by Alibaba, the Chinese tech giant.

        Ant Design offers a large set of high-quality components that are great for building entire UI frameworks quickly — or you can just use individual components. The library is built on 43.7% TypeScript, 31.1% JavaScript, 24.9% Less, and 0.3% unspecified code.
        
        Ant Design is a great React component library, in part thanks to its great documentation that includes plenty of guidelines, examples, and variants. In addition to that, it’s also a robust platform when it comes to customizing the existing components and themes in detail.
        
        Furthermore, what’s great about Ant Design is its compatibility with lots of third-party React libraries and several of their own products, like AntV Data Visualization, Ant Design Charts, and Ant Design Mobile. These help expand the number of use cases that you can cover with their libraries.
        
        One of the downsides to Ant Design is its huge bundle size (1.2 MB), when compared to other React libraries, which are usually around several hundred kilobytes. And if you’re not working on a development project with considerable business needs, then this library might be a bit of overkill.
        
        In addition to Alibaba, Ant Design is also used by the likes of Lenovo and Toyota, so it’s a great choice for high-level business projects. And the thorough resources can still make it a great option for beginners. On top of that, it has even more stars on GitHub than MUI does, which is more evidence of its greatness.`,
        img: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
        githubStars: "81.1k",
        githubFolks: "34.9k",
        count: 0,
    },
    {
        id: 4,
        category: "Category",
        title: "Chakra UI",
        content: `Used by over 20,000 projects on GitHub, Chakra UI offers straightforward, modular, and customizable React components to support application and web development. All elements are also optimized for dark mode, and unlike some other UI component libraries, Chakra UI is fully compatible with the WAI-ARIA accessibility standard. Chakra UI is built on 97.5% TypeScript, 1.9% JavaScript, and 0.6% unspecified code.

            You can use Chakra UI to easily create your own design system, or you can install only some of its components. Customizing the components and themes is quite easy thanks to the use of style props.
            
            Simplicity is really one of the keywords to use when describing Chakra UI. Its library focuses a lot on the process of development, too, with a promise that you’ll spend less time writing code and more time building a great user experience. The decent documentation will definitely help with that.
            
            However, as Chakra UI is relatively new when compared to the more popular React UI component libraries, and it’s still lacking some functionality and components. Therefore, it’s best used for small to medium-level development projects that don’t require a lot of components or advanced features.`,
        img: "data:image/png;base64,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",
        githubStars: "13.8k",
        githubFolks: "1k",
        count: 0,
    },
    {
        id: 5,
        category: "Category",
        title: "Rebass",
        content: `Used by 10,000+ projects on GitHub, Rebass features primitive React UI components with a straightforward system for further designing. The components are responsive, minimalistic, and flexible. On top of that, it’s a really lightweight library, with only a 43kB bundle size. Rebass is 100% built on JavaScript.

        You can use Rebass for creating a minimalistic design style and for customizing the base components as you wish. The use of Styled System at its core reduces the need to write custom CSS in your application, which means you can build your project faster.
        
        Rebass supports theming, and although it doesn’t come with prebuilt themes, it offers enough flexibility and customization for creating your own theme. The Rebass library is also fully compatible with Theme UI so you can combine these two if you like.
        
        Rebass is a great choice if you’re not interested in finalized components or themes, but prefer to create your own design system without having to do it from scratch. With the available primitive components, you can create a highly customized design quickly.
        
        But keep in mind that Rebass is also a newer library and the community is still relatively small — as evidenced by the smaller number of projects on GitHub. The documentation is there and even includes some guides, but in general, it’s not very thorough. Also, with Rebass, you should keep in mind that while some accessibility features are supported by default, the library doesn’t officially adhere to any standards.`,
        img: "https://avatars.githubusercontent.com/u/41265750?s=280&v=4",
        githubStars: "7.4k",
        githubFolks: "608",
        count: 0,
    },
    {
        id: 6,
        category: "Category",
        title: "React Admin",
        content: `This React UI component framework is suitable for building business-to-business (B2B) admin applications on top of REST/GraphQL APIs and is customizable by design. It’s built with a number of well known projects in addition to React: Material UI, React Router, Redux, and React Final Form. The latter is a popular form state management solution.

        In addition to the free version and its components, there’s also an enterprise solution. The enterprise solution includes pro support from Marmelab (the creators) and access to private modules.
        
        React Admin boasts has thousands of stars on GitHub, and is actively maintained.`,
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA5FBMVEX///8AAjsiJFijpLkAACzx8fQAAC5RU30AADgAACTHx9IAAEsnJ0zf3+ULD0+gobKen7UAAB+pqr4AADUeIFUAACnT1NsAADGcnKpOUHsAACfw8PRTVX5AQnMAACMQE1BHSXcYG1O7vMsmKFsvMWF9fpre3uWTlKwUF1JoaH9BQ3BPUHaHiKKvsMIAAB2Ojp9QUG10dZM3OWZgYYONjqd5epcAAEE7PXDBwcqlpa8MDUGwsLpfYYcAAABDQ2MjJE5bW3GBgZQAABYXF0KHh5dxcoU4OV1JSWVYWHIREkIyM1gAAER30rvsAAAPt0lEQVR4nO2d/XuaSBDHfQdN6aGiFjGKxkRr82ZMGhNzSXttcund////HLvA7rLswqKL0nv4/tSnQeTjMjvDsDNbKGRJ1sWhr0BIjcaWH6xOdH3bz+5Vg+Olts3nGrpeLutV2ZcjXy1bMY9niS/0rOzwOZqkcU1SVT1WHNl2MouyLlw+ZxC3Gv996txUoOynrviHJj6fo1Z61yZFZ84Q2qXFQHFu1TtL7DNd3QNswUFM8MscQitTGZwYxokNGXWBT2gtn2+2mMF/pH6Ru6ixUJSFUSqVjKnpMNpm3MRRnaDxW43GX8AoZttjmI4VlqAMYwHMcfF0FnV8A/Et5+NS6eMtvE8z7DHKtjK4MUoe44lrjufcC+6WfcDz6Rx+5KaVbY9hOdOM6QOiW9U8ZlsWYYBfRt6n5stWpj3GqTPNTAlCMCgKMMdB2LRIA5zjz4wz7TG6wFMEAKE5wmGkAznfAMutO2NMHD9etTLsMZ6ApyjRAp5j4DDeEuZ4hgzw9mYePHwOPYaIm9m/JgtlsDBChMhzoEAOhWgtHRkgPtj1GJmcbGzF9xRhRs8c4c2HQ7TVfBw+dnQOEQXjoX1KB56CQ+jIC+Q0HKKdnjD4wIhDj5G9Z2GN8hShC3fM0TSXM2yAoRvUk+cxIiOFQ+gOeAo+IGR8mrX4Bog11rMYnrI8BXXdJ6c+nxui8Y98ymJ46ngKJewpiKuer9ADoBei8TWaZS88vbA5nsKVMfqi+wM4W0TcoN7hi8x5jCrwFPzrnt/cIgNcxfKBQTwtZ8xjzMhnClpj487nay2NKAPEg3hSzpbHiPIUhmOALVEDxL/KKlseY8n1FI4BinmIEGKmPMZkatvTI6ZOTsu6q9ngK/sQjhbwgxnxGF1HDbY0JM4BXK3djx2aLVeuXLly5cKqZlMSCR/7lQzqUiLiB7WYQVX+94S1nDAnzAkPrpwwJ8wJD6+cMCfMCQ+vnDAnzAkPr5wwJ8wJD6+cMCfMCQ+vnHBXwn4zRsNhv1+ptdP7cXYn7KL15AzCftxqnqqldRubq3e130sJcldC60KPIqwLLwQ5uyp2UmFEhN1tqhdAOYQkQkebYi1VwvskpYCu3IpVaYSFwuswTUJbvBTQlVcOIZOw8FBPkxCskp8JXwuuWJVJWNg0UyNsjBWhUkD/cH81fWv1h0zCwlUnNcIjtxRQqDIXl0OcT4/kEhae26kRlvyqVX4poCuyYnVkfBQk7DKlhUz/TPJ9ShLiUsAoz4EL5tzV2IKEZ3/2GaoPK7+ur4J3jeRBDBJGlQL6xyED9FZjixLyZkm1XWu+kYybSqqEJb/2iN3T4YyuWN2dEKjd/IS/w5I71zAIfXO8DZkILpjDFatSCItFElHuMwqDkGeOgZJxvNpcDmHxL3zPvPZSJywZjjkCz6EQ5thAHuKuRJZDSCLsvaJv+iQ1PGUT4iJy3xw1bIBUxaokQrWICNf9fRAic7yHlbkTfsWqJMLiUPxQSYSBytwzj3A1CtXryCLsr5HBS/X5UYReTwcb1KRcwBGkS6plElYe0G0q9RkqktBhNBVzAP5swUE8H6VH2PuOCItcd6Gq7Xa71+vVgHq9thrvWKIJQSOAY3c+hZbY+hIuKpNGiCfTl/CJ2r1Kp95v//jw/P7t9fvPK6Cfr9dvP9r1Ti0SM5rwZKCYS+8A93E3PIjSCD8jwmfqROqw8vf3h7VmMR4Jqtr66q1Z4UNG26HzVHzvX2MXDuIqtZmmfY2u+joYe6vPcbkH69MjN5iNJJwOFBs/9bv1cyd07Zw0wmf0Td+ChAQ7X1dDzjBGegvHWdj4xtDgfXpK36eyCNU39E2ftyAsdDl3ahThjQNIlqB6HiMlj6/+g75omzF0ENmhUBShE9E8kaeowkG8HaVD2MZjuB1hYcP0oxFRm+Ptj4NP3w2Wx0h/phElpD9HEXZpQtJT+HI9RkqE2Fu8BU/kEVqWpnUb68nmAWozadBJHuZ3IELLDF448BTH9CzteozlOA1CwuM/Bk+kPm9+vv9q1zr1er/f7/jFMJ1+vdN+viKvkZXiQYTaLGBfBvAU4R4+DI8hi7B2hb6FTmOolR7v9Vu7NiSyA6wUDyYsB5y5E5AqdgjQ9RitQHgqLfLe+IcmfLYgEiAWY67BhDo5NIbjKRas9PcEegyyuYW0p6eu8KGULnEC5Ff4EkhCwpmf0J4C/b5wsiHvaFmEHRRbrBMm29rv6PLew4ZIEuKhgZ6C/fq2QYenkgiJoC1xnga/5r0KJ7FIQuzMnWnGPGUCFgpwrtGl59o6+AGYMRDR6qOE2UN4qgkQtgZjNM2EPAW6VNdjzOUSqir+BoYxRQunBxhJrACh58zBNGPz22m44elUckYYR09a4kQUTg8wviVI6A2NqZgKF9BNaGCPIYNQHa7x+ZOnS/HDsxYxhmvYFLTsDA1IXSyi2oV4CQ1DEqHaq7+Q8S8jhxGj9jf060cQNmBTUDA0ICBdRQB6HsNPaIgS/lULC4Rewx+va/Ls3eSZNjwPV8OOBhN+hX36nCcHm+spfAU8hiCh9YmlzbpLz2jfkr8+JB4towiP3M6uM8OZZs4jAT2PUS4ZCQhF1dgiWaq+oI9HeIvGkdunr7U0lUXcQinXY9zN5RNWBTKgYcJfYoReZ9eyYscvjyISGlIJqy/bvOJWH0UJYeus1ukg/kosnNCQSdgtbvUOX5jQ79Mn0ljKfcYACQ2JhNyMIEJRYU6/3W6rnhISun36hNpIex5jLo9Qu+pFLlFoV+qVX/9cfwb6+/mfDy8vLz8eQba/Pmz2RAkTdHZtLeEgrubSCGsRmXmwluH6IeRYCqCfigUkTGhM3fegsZdTtU3dS2iIEsb1VrmKCtbq74I/VRyh39k1duHXuW3CI52nZkFCjRXT1CqX6JQRAbc63BQEFUso2KcP7N4wvXUTGoLr2jS2J8dvfiPWQtXEOyMKEA5EOruunAdIb1qa/btT5I2DZtbTq6vmuiCseMLSR4HOrpNj0NDZbR/a+rLbswVukFPlxGtEIlUKoTc0kU1BTXNgGn770NluhB1sYpyYuxOcQqtaeIUjvuUECP3OrhFzF+jJDdp0ujFQGZ1+K8L23+i87HU0RLa/UNi8q5fD8BLHP9GNIEJolGI8hoUaOs/1svA6b+4T8BAPETPq7mAr1Ioddu67mWgMYzceOEWt/+F+KLsSEqtMvrMWtDXxlPCVN9smJHSHhrvxQPcYN3Qene9OSCRKWY/3RMz5wM0UJyWM3qrmycSt/8F+KLsSEsu9mMtMvqG/8h1mUsLSKGKrmkmgobMTA+1MWMNvVhiRG7GQiL+gb5iU0NuqhukxTKqh8+5jqH5AJ2dEbthMGZlC9DMkJSzN73hb1czsYEPn8UqwoiQiX1rHQVn4RsQv3TgrEYrieRriuksGx2NY995eVEgfZzsTEu9Gw684O+hpdcKdaIiXT8KEPI9xZ9I7jBiLnQnVH+j84XwnDs35a/iJuE6Y0E9oUIDAU9DraY7Qj7x1Vn+If8nPtEsUISRcqjghe6uagRnuGy/hvQUxX4YiNxzSbLh3aR3/QuKEzIQG2L1hmgIhsca7QBfLYkL+q+E2/ngCQsZWNWD3hvAOIzLePeFXnKHITWAuJYKCJISMrWpubdZeVDIIiamCjtwE/GGdeEJOQhhKaIDdGxg7jEh5Q1rB10idhbBRTqqKiFyTEq6C4eky5CnkERLpGuoFKXELhuZZV4EkRyJCKqHRYHgKaYTEEmjrMvAX9Su+iZgriYZ4kBMTBreqGcDURUqExR4O86nIrYmn80+X9DeovSYOiJITlkan2GO0bM4OI3IIiXQN5fcqRK500+sgb6KChH7xFV7cBjnEhIRjNzwFHgNuUWyHFnlLIyTWkFYpQ8RBp/O3zetbpTkc1ofNr9evG//sL2iySERojLx9aYHH6NpgK6PBopSKP3RENBanZpQ+/YgDemkE/m/9JxrnJITj6bm3u40OPYZ+78ylAyU02UgiJG5GKnLrkck2ph7xgipxwvEI7Q+mT9xjrLtjwGhScZv8dW0FKqEWl/N+7+E0gSghsT+YfoHnsu4T41aVtTaxjr+HitzUXuSLp88d4glTjNDA+4Pp5eBLkQtojk5oI33lXrGC0zVd6li1wx9F7a1CBj5i+dKSvz8YI99WndG3qujbtQT1FuEz1T+z39pq3/vAe2JTFSAc4/3BfAOkTrqEjMhzRBL2u+47WqvKz7KEjrWq4WWiveb1hoK01j9fhu6B6rP/BiNifalLSOwPpl/w7v7GgDTHSMJir+YurK8J1GfXvGMrzHK7dqfz9fr7p83a0R9XP98fO0TjJdV/g8E4a4BwfnPOMcCgLo6hOd4YcV0j5MoJY2qVjiPnBxPunRVYTzNe8g0wqOotMsc9Em4lctVXjAEGdbZauOYY+Q44A8LrS6fIAFti6x48c5z+LoSaf3+WxRtilcGtigv4sk6oCxlgUNb5sfl7EYoYYFBnq/vfiFDUAIOa/D6E8SuhYpR1wt13Ds44oQTlhIdRTpgT5oSHV06YE+aEh1dOmBPmhIdXTpgT5oSHV06YE+aEh1dOmBPmhIfX/5+wIpHwsV/JoC4lEnJ6Chxa8gBz5cqVK1euXaVBNRJqfaZ5sjhHBLpiHFQT3VH5y79HCfSvcaq7Kt/esA+Z2/Y93ZP7UHKXzbHqijjCq7Fb+tNH9gcjO63uW12qs2uMjJG/GBTtf8Y4KLrT6r5FdXaN4UPlEHj/M4aUyE6r+xZ/q5qQ5qhepzWz6e2XiN9hobB7ch9K3K1qKI0NfzV2cP+zkGI7re5buE9flIy5gAG6R8Z3Wt23Qr3AGVc9WsyQAbK2lyIOBT254zqt7lvupYcr/JAIA9RXUyNyVoKeImvPt2fsrWp8jedL7wbV9SVoKMaqO0aAwFNssxF1umJvVeNd8miACuYa4fqqkBRvO7FsyWJuVQP5iII5uNrcq69asCpzS17r/4xEpAHxPMb45DRU7tF4wrVHIU0Zm8RkQ6ytamDBHKvcA5Y7Mm9VOM1ss/A+fTG2qjE+4opV6r7zzDFURA6nGfFNxPcryNIiLpk2wKB8c6TGENTOZ81T+HK3KEAeY2zcxdRbufVVgSJy0Po/sJ1YtuR6DLdLCg7Roso9WrQ5goCUuUlMNuR6jNlHaICoYC7yEaF6fm8qA2SOMCDdtf4lTfnhKVGxehHb5943R8PzFHd7udRt5XoMY4k8hMi0PzHhreqYI9i1MDOpC7agx0AFq8L1VmU3kDu5YW4nli355caxBhiUdQoYgcz0rk2OvHLOYE8KEXWfwA7FynGWUhdsTTwDTP6EDswxy57CF0xoJKvIRdLv77PsKXw19OQVub607GRIo5TQANPWf/jqCa0QRennAAAAAElFTkSuQmCC",
        githubStars: "17.5k",
        githubFolks: "3.8k",
        count: 0,
    },
    {
        id: 7,
        category: "Category",
        title: "React Virtualized",
        content: `Building a frontend that’s data heavy? React Virtualized may be the library you need to dip into. It includes numerous components for efficiently rendering large lists, tables and grids. For example, you’ll find masonry, columns, autosizers, direction sorters, window scrollers and more. Further, you can customize the tables by configuring the row heights and display placeholders in the cells.
            React Virtualized has very few dependencies and supports standard browsers, including recent mobile browsers for iOS and Android. It has thousands of stars on GitHub.`,
        img: "https://reactjs.org/logo-og.png",
        githubStars: "20.7k",
        githubFolks: "2.5kk",
        count: 0,
    },
    {
        id: 8,
        category: "Category",
        title: "Evergreen",
        content: `Evergreen contains a set of React components that’s suitable for enterprise-grade web applications. Since it uses React Primitive, it’s highly flexible. At the same time, it works just as easily right out of the box.

        It includes a wide range of components and tools starting from basic layouts, typography, colors and icons to function-based components such as dropdowns, toggles, file uploads, and feedback indicators. After installing the Evergreen package, you can pick and choose the components you want to import. It has thousands of stars on GitHub.`,
        img: "https://evergreen.segment.com/twitter-og.png",
        githubStars: "10.3k",
        githubFolks: "605",
        count: 0,
    },
    {
        id: 9,
        category: "Category",
        title: "Fluent UI",
        content: `Fluent UI React Components is a set of UI components and utilities resulting from an effort to converge the set of React based component libraries in production today: @fluentui/react and @fluentui/react-northstar.
           Each component is designed to adhere to the following standards:
           Customizable: Fluent-styled components by default, but easy to integrate your own brand and theme
           Performance: Optimized for render performance
           Bundle size: Refactored and slimmed down components that allow you to include the packages and dependencies you need
           Accessibility: WCAG 2.1 compliant and tested by trusted testers
           Design to Code: Stay up to date with Fluent Design Language changes via Design Tokens`,
        img: "https://pbs.twimg.com/profile_images/1268224111676755972/8JgUJYFS_400x400.png",
        githubStars: "10k",
        githubFolks: "1.8k",
        count: 0,
    },
    {
        id: 10,
        category: "Category",
        title: "React Toolbox",
        content: `Another React UI components library that you can use to implement Google’s Material Design principles in your project is React Toolbox. React Toolbox relies on CSS modules for this purpose. Though you can use any module bundler, it integrates neatly with webpack workflow. Thoughtfully, the team at React Toolbox provides visitors with an in-browser editor where you can experiment with the components in real-time.

        While working with React Toolbox, you can choose to import components in bundles or raw components. The difference is, for the former, the components come with all necessary dependencies and themes injected for you. This means that the CSS for each dependency will be available in your final CSS automatically and raw components don’t include any CSS. This means you’ll have to provide a theme via properties to the component to be properly styled. React Toolbox has thousands of stars on GitHub.`,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGmXgb6rAhUxb5kg7qFUmP-7efpHAw9r11E20eiZgdoEEKKjzP6Eb0duUJJc25QI5USc&usqp=CAU",
        githubStars: "8.7k",
        githubFolks: "1k",
        count: 0,
    },
    {
        id: 11,
        category: "Category",
        title: "Onsen UI",
        content: `In case you’re into creating cross platform mobile apps, you’ll be interested in this offering on our list of React UI component libraries. Onsen UI is a mobile app development framework that uses HTML5 and JavaScript and provides integration with Angular, Vue.js, and React. All the components are auto-styled based on the platform, and so it supports both iOS and Android using the same source code.

            Onsen UI is compatible with many popular React frameworks. An interactive tutorial helps you get a good start with this tool. The component library employs pure CSS with no JavaScript behavior. For some extra details, custom elements help out. The star count on GitHub exceeds 8,500.`,
        img: "https://blog.digitalogy.co/wp-content/uploads/2020/12/Onsen-UI-Bes-react-component-library.png",
        githubStars: "8.2kk",
        githubFolks: "930",
        count: 0,
    },
    {
        id: 12,
        category: "Category",
        title: "React Desktop",
        content: `Our next components library, React Desktop uses macOS, Sierra, and Windows 10 components with the aim of bringing a native desktop experience to the web.

        This collection is a JavaScript library built on top of Facebook’s React library and it’s compatible with any JavaScript based project. This tool crosses the 9,000 star rating on GitHub.`,
        img: "https://blog.digitalogy.co/wp-content/uploads/2020/12/React-Desktop.png",
        githubStars: "8.9k",
        githubFolks: "468",
        count: 0,
    },
    {
        id: 13,
        category: "Category",
        title: "Grommet",
        content: `Grommet has a wide library of components in its kit and counts big names like Netflix and Boeing among its users. Whether your app is for phones or for wider screens displays, you’ll be able to design layouts. Accessibility is via keyboard or screen reader.

        Theming tools help with the customization for color, type and layout. This React UI components library has a star count exceeding 6,000 on GitHub.
        
        `,
        img: "https://blog.digitalogy.co/wp-content/uploads/2020/12/Grommet.png",
        githubStars: "5k",
        githubFolks: "966",
        count: 0,
    },

    {
        id: 14,
        category: "Category",
        title: "React Materialize",
        content: `You should use React Materialize if you want to use materialize-css components in your react application.
        This is only a wrapper around materialize-css for ease of use.
        Navigate through these docs to see available components. Click on "Show Info" to view each story source.`,
        img: "https://blog.digitalogy.co/wp-content/uploads/2020/12/react-materialize-best-react-component-library.png",
        githubStars: "1.3k",
        githubFolks: "314",
        count: 0,
    },
];

export default posts;
