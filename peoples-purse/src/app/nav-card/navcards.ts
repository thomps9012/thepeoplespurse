export interface NavCard {
    link: string;
    title: string;
    text: string;
    button: string;
}

export const navcards = [
    {
        "link": "/info",
        "title": "Information Center",
        "text": "Learn more about governmental departments or your elected officials",
        "button": "Learn More"
    },
    {
        "link": "/voting",
        "title": "Voting",
        "text": "Ready to decide on your own personal budget?",
        "button": "Go Vote!"
    },
    {
        "link": "/results",
        "title": "Proposed Budget",
        "text": "Want to see the budget your fellow citizens have proposed?",
        "button": "View the Budget"
    }
]