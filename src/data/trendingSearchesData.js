import FaceBookLike from '../assets/images/facebook_likes.png'
import InstagramFollowers from '../assets/images/instagram_followers.png'
import YoutubeSubscriber from '../assets/images/youtube_subscriber.png'
import InstagramComment from '../assets/images/instagram_comment.png'
import InstagramLike from '../assets/images/instagram_links.png'

export const trendingCards = [
    {
        img: FaceBookLike,
        label: 'Facebook Likes'
    },
    {
        img: InstagramFollowers,
        label: 'Instagram Followers'
    },
    {
        img: YoutubeSubscriber,
        label: 'Youtube Subscribers'
    },
    {
        img: InstagramComment,
        label: 'Instagram Comments'
    },
    {
        img: InstagramLike,
        label: 'Instagram Linkes'
    }
];

export const filterOptions = {
    providers: ['Provider 1', 'Provider 2'],
    price: ['10-100', '100-1000'],
    quantity: ['1-10', '11-100'],
    options: ['Drip-Feed', 'Refill Button'],
    dateRange: ['2024-01-01 to 2025-01-01', '2023-01-01 to 2024-01-01'],
};

export const initialTableData = [
    {
        id: 1234,
        provider: 'smmgold.ru',
        activated: true,
        favourite: false,
        level: 1,
        name: 'Instagram Followers | 100K/Day | Instant | 365 Days Refill⚡️🔥',
        price: 1.031,
        min: 10,
        max: 1000,
        features: ['D', 'R', 'X'],
        status: {
            stopped: { label: 'Stopped', type: 'stopped', time: '1h 12m' },
            pending: { label: 'Pending', type: 'pending', time: '19m' },
            completed: { label: 'Completed', type: 'completed', time: '10m' }
        }
    },
    {
        id: 1235,
        provider: 'smmgold.ru',
        activated: false,
        favourite: true,
        level: 2,
        name: 'Instagram Followers | 100K/Day | Instant | 365 Days Refill⚡️🔥',
        price: 1.031,
        min: 10,
        max: 1000,
        features: ['D', 'R', 'X'],
        status: {
            stopped: { label: 'Stopped', type: 'stopped', time: '2h 5m' },
            completed: { label: 'Completed', type: 'completed', time: '8m' },
            undefined: { label: '--', type: 'undefined', time: '--' }
        }
    },
    {
        id: 1236,
        provider: 'smmgold.ru',
        activated: false,
        favourite: false,
        level: 3,
        name: 'Instagram - Followers - Real - R30 ♻️ - [50K/D] - Max: 500K',
        price: 1.031,
        min: 10,
        max: 1000,
        features: ['D', 'R', 'X'],
        status: {
            pending: { label: 'Pending', type: 'pending', time: '55m' },
            completed: { label: 'Completed', type: 'completed', time: '12m' },
            undefined: { label: '--', type: 'undefined', time: '--' }
        }
    },
    {
        id: 1237,
        provider: 'smmgold.ru',
        activated: false,
        favourite: true,
        level: 1,
        name: '1-Month Backlink [Dofollow] [In Website&#039;s Entire Pages] [Instagram-Telegram-YouTube-Facebook-Twitter]',
        price: 1.031,
        min: 10,
        max: 1000,
        features: ['D', 'R', 'X'],
        status: {
            stopped: { label: 'Stopped', type: 'stopped', time: '1h 30m' },
            pending: { label: 'Pending', type: 'pending', time: '22m' },
            undefined: { label: '--', type: 'undefined', time: '--' }
        }
    },
    {
        id: 1238,
        provider: 'smmgold.ru',
        activated: true,
        favourite: false,
        level: 2,
        name: 'Instagram Followers [Fast] [30K Package] [Non Drop] R60 ⛔♻️',
        price: 1.031,
        min: 10,
        max: 1000,
        features: ['D', 'R', 'X'],
        status: {
            stopped: { label: 'Stopped', type: 'stopped', time: '2h 10m' },
            pending: { label: 'Pending', type: 'pending', time: '15m' },
            completed: { label: 'Completed', type: 'completed', time: '9m' }
        }
    },
    {
        id: 1239,
        provider: 'smmgold.ru',
        activated: false,
        favourite: false,
        level: 2,
        name: "1-Month Backlink [Dofollow] [In Website's Entire Pages] [Instagram-Telegram-YouTube-Facebook-Twitter] [Speed 2-7 Days] - Level 1",
        price: 1.031,
        min: 10,
        max: 1000,
        features: ['D', 'R', 'X'],
        status: {
            pending: { label: 'Pending', type: 'pending', time: '1h 2m' },
            completed: { label: 'Completed', type: 'completed', time: '7m' },
            undefined: { label: '--', type: 'undefined', time: '--' }
        }
    },
    {
        id: 1240,
        provider: 'smmgold.ru',
        activated: true,
        favourite: true,
        level: 3,
        name: '🌙 Instagram free 20 Followers',
        price: 1.031,
        min: 10,
        max: 1000,
        features: ['D', 'R', 'X'],
        status: {
            stopped: { label: 'Stopped', type: 'stopped', time: '1h 50m' },
            completed: { label: 'Completed', type: 'completed', time: '11m' },
            undefined: { label: '--', type: 'undefined', time: '--' }
        }
    },
    {
        id: 1241,
        provider: 'smmgold.ru',
        activated: true,
        favourite: false,
        level: 2,
        name: '✅ Instagram Custom Comment | 1 Comment + Like | Account 15K Followers | Cheapest Service In The Market',
        price: 1.031,
        min: 10,
        max: 1000,
        features: ['D', 'R', 'X'],
        status: {
            stopped: { label: 'Stopped', type: 'stopped', time: '2h 20m' },
            pending: { label: 'Pending', type: 'pending', time: '18m' },
            completed: { label: 'Completed', type: 'completed', time: '13m' }
        }
    },
    {
        id: 1242,
        provider: 'smmgold.ru',
        activated: false,
        favourite: true,
        level: 1,
        name: '🔹Instagram Followers [From Verified / Blue Tick Profile] [1 Follower] [Egypt]',
        price: 1.031,
        min: 10,
        max: 1000,
        features: ['D', 'R', 'X'],
        status: {
            stopped: { label: 'Stopped', type: 'stopped', time: '1h 5m' },
            completed: { label: 'Completed', type: 'completed', time: '6m' },
            undefined: { label: '--', type: 'undefined', time: '--' }
        }
    },
    {
        id: 1243,
        provider: 'smmgold.ru',
        activated: true,
        favourite: false,
        level: 2,
        name: 'Instagram Bot Followers - Instant- Speed : 📍12K/15Min - High Drop - NoRefill - Stable price ⛔',
        price: 1.031,
        min: 10,
        max: 1000,
        features: ['D', 'R', 'X'],
        status: {
            pending: { label: 'Pending', type: 'pending', time: '1h 8m' },
            completed: { label: 'Completed', type: 'completed', time: '5m' },
            undefined: { label: '--', type: 'undefined', time: '--' }
        }
    }
];

export const initialFilters = {
    id: '',
    provider: 'all',
    name: '',
    price: '',
    min: '1',
    max: '100',
    features: '',
    inProgress: 'all',
    complete: 'all',
    status: 'all'
};

export const pageSizeOptions = [5, 10, 15]; 