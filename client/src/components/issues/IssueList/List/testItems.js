export const test_items = [{
        id: 1,
        title: '스프린트1 이슈1',
        content: '내용',
        author: 'sang-gyeong',
        milestone: '스프린트1',
        status: 'opened',
        labels: [{
                name: 'Bug',
                color: 'steelblue',
                desc: 'something isnt working'
            },
            {
                name: 'front-end',
                color: 'purple',
                desc: 'for user interface'
            },
        ],
        assignees: ['a'],
        time: '2020-10-28',
    },
    {
        id: 2,
        title: '스프린트2 이슈2',
        content: '내용2',
        author: 'b',
        milestone: '스프린트2',
        status: 'opened',
        labels: [{
                name: 'Bug',
                color: 'steelblue',
                desc: 'something isnt working'
            },
            {
                name: 'High-priority',
                color: 'gold',
                desc: 'do it, just do it!'
            },
        ],
        assignees: ['sang-gyeong'],
        time: '2020-10-28',
    },
    {
        id: 3,
        title: '라벨 X assignees X',
        content: '내용2',
        author: 'b',
        milestone: '스프린트3',
        status: 'opened',
        labels: [],
        assignees: [],
        time: '2020-10-28',
    },
    {
        id: 4,
        title: '스프린트2 이슈2',
        content: '내용2',
        author: 'a',
        milestone: '스프린트2',
        status: 'closed',
        labels: [{
                name: 'back-end',
                color: 'black',
                desc: 'lets make efficient server structure'
            },
            {
                name: 'feature',
                color: 'tomato',
                desc: 'new feature or request'
            },
        ],
        assignees: ['sang-gyeong', 'a'],
        time: '2020-10-28',
    },
    {
        id: 5,
        title: '마일스톤X, assignees X',
        content: '내용2',
        author: 'sang-gyeong',
        milestone: null,
        status: 'closed',
        labels: [{
                name: 'Bug',
                color: 'steelblue',
                desc: 'something isnt working'
            },
            {
                name: 'front-end',
                color: 'purple',
                desc: 'for user interface'
            },
        ],
        assignees: [],
        time: '2020-10-28',
    },
    {
        id: 6,
        title: '마일스톤 X, 라벨 X',
        content: '내용2',
        author: 'sang-gyeong',
        milestone: null,
        status: 'opened',
        labels: [],
        assignees: ['a', 'sang-gyeong'],
        time: '2020-10-28',
    },
];