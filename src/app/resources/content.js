import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Rohit',
    lastName: 'Sampannavar',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Software Engineer',
    avatar: '/images/avatar.png',
    location: 'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Kannada', 'Hindi']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/imrohitsampannavar45',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/rohitvs1/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/RohitSampanna12',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:imrohitsampannavar@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Rohit Sampannavar</>,
    subline: <>Software engineer at <InlineCode>Accenture</InlineCode>, where I craft intuitive<br /> user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Rohit is a Bengaluru-based Software engineer with a passion for transforming complex challenges into simple, elegant design solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'accenture',
                timeframe: 'Aug 2024 - Present',
                role: 'Packaged App Development Associate',
                achievements: [
                    <>Developing Scalable Applications: Spearheaded the design and implementation of scalable web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Focused on building robust, high-performance solutions tailored to business requirements.</>,
                    <>End-to-End Development: Managed full-stack development lifecycle, including requirement gathering, architecture design, coding, testing, and deployment. Ensured seamless integration between front-end and back-end systems.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images

                ]
            },
            {
                company: 'Skylux Telelink Pvt Ltd',
                timeframe: 'Nov 2023 - Jul 2024',
                role: 'Software Engineer',
                achievements: [
                    <>Front-End Expertise: Created dynamic, responsive, and user-friendly interfaces using React.js. Leveraged modern JavaScript frameworks and libraries to enhance user experience and maintainability.</>,
                    <>Genesys Development: Developed and maintained contact center solutions using Genesys, optimizing customer interaction management. Designed and implemented IVR (Interactive Voice Response) systems to improve customer service efficiency.</>,
                    <>Genesys Integration: Integrated Genesys with various third-party applications and services, enhancing system capabilities and performance. Ensured seamless communication and data exchange across platforms.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Biluru Gurubasava Mahaswamiji Institute of Technology            [2019-2023]',
                description: <>Studied Computer Science and Engineering. [7.63 CGPA]</>,


            },
            {
                name: 'BHS Arts TGP Science PU College Jamkhandi        [2017-2019]',
                description: <>Studied Class XII And Appeared in KSEEB Board Examination </>,
            },
            {
                name: 'Adarsha Vidyalaya Jamkhandi       [2014-2017]',
                description: <>Studied Class X And Appeared in KSEEB Board Examination </>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'React',
                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'Nodejs',

                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'MongoDB',

                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'AWS',

                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'SQL',

                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'MicroService  With Nodejs',

                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'PostgreSQL',

                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'Jenkins',

                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'Docker',

                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'Genesys Cloud',

                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'HTML, CSS',

                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'TypeScript',

                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'Web3',

                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'GEN AI',

                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'Nodejs',

                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };