const voteIcon = '../../assets/icon-vote.png';
const educationIcon = '../../assets/icon-education.png';
const budgetIcon = '../../assets/icon-data.png';

export interface NavCard {
    link: string;
    title: string;
    image: File;
    iconAlt: string;
    text: string;
    button: string;
}

export const navcards = [
    {
        "link": "/info",
        "title": "Information Center",
        "image": educationIcon,
        "iconAlt": "Education Icon",
        "text": "Learn more about governmental departments or your elected officials",
        "button": "Learn More"
    },
    {
        "link": "/voting",
        "title": "Voting",
        "image": voteIcon,
        "iconAlt": "Voting Icon",
        "text": "Ready to decide on your own personal budget?",
        "button": "Go Vote!"
    },
    {
        "link": "/results",
        "title": "Proposed Budget",
        "image": budgetIcon,
        "iconAlt": "Budget Icon",
        "text": "Want to see the budget your fellow citizens have proposed?",
        "button": "View the Budget"
    }
]