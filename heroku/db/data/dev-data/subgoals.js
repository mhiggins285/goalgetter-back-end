"use strict";
exports.__esModule = true;
var subgoalData = [
    {
        goal_id: 1,
        objective: "Run 30km",
        start_date: new Date(2022, 1, 7),
        end_date: new Date(2022, 1, 13),
        type: "progress",
        status: "completed",
        owner: "jeff",
        target_value: 30,
        unit: "km",
        progress: [
            [new Date(2022, 1, 8), 10],
            [new Date(2022, 1, 8), 20],
            [new Date(2022, 1, 10), 30],
        ],
        finish_date: new Date(2022, 1, 10)
    },
    {
        goal_id: 1,
        objective: "Run 30km",
        start_date: new Date(2022, 1, 14),
        end_date: new Date(2022, 1, 20),
        type: "progress",
        status: "active",
        owner: "jeff",
        target_value: 30,
        unit: "km",
        progress: [
            [new Date(2022, 1, 15), 10],
            [new Date(2022, 1, 17), 20],
        ]
    },
    {
        goal_id: 1,
        objective: "Run 30km",
        start_date: new Date(2022, 1, 21),
        end_date: new Date(2022, 1, 27),
        type: "progress",
        status: "active",
        owner: "jeff",
        target_value: 30,
        unit: "km",
        progress: []
    },
    {
        goal_id: 1,
        objective: "Run 30km",
        start_date: new Date(2022, 1, 28),
        end_date: new Date(2022, 2, 6),
        type: "progress",
        status: "active",
        owner: "jeff",
        target_value: 30,
        unit: "km",
        progress: []
    },
    {
        goal_id: 2,
        objective: "Finish Act 1 of novella",
        end_date: new Date(2022, 1, 11),
        type: "boolean",
        status: "completed",
        owner: "jeff",
        finish_date: new Date(2022, 1, 10)
    },
    {
        goal_id: 2,
        objective: "Finish Act 2 of novella",
        end_date: new Date(2022, 1, 21),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 2,
        objective: "Finish Act 3 of novella",
        end_date: new Date(2022, 2, 1),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 2,
        objective: "Proof-read novella",
        end_date: new Date(2022, 2, 4),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 3,
        objective: "Save ??200",
        start_date: new Date(2022, 0, 7),
        end_date: new Date(2022, 1, 6),
        type: "progress",
        status: "completed",
        owner: "mary",
        target_value: 200,
        unit: "??",
        progress: [[new Date(2022, 0, 29), 200]],
        finish_date: new Date(2022, 0, 29)
    },
    {
        goal_id: 3,
        objective: "Save ??200",
        start_date: new Date(2022, 1, 7),
        end_date: new Date(2022, 2, 6),
        type: "progress",
        status: "active",
        owner: "mary",
        target_value: 200,
        unit: "??",
        progress: []
    },
    {
        goal_id: 3,
        objective: "Save ??200",
        start_date: new Date(2022, 2, 7),
        end_date: new Date(2022, 3, 6),
        type: "progress",
        status: "active",
        owner: "mary",
        target_value: 200,
        unit: "??",
        progress: []
    },
    {
        goal_id: 3,
        objective: "Save ??200",
        start_date: new Date(2022, 3, 7),
        end_date: new Date(2022, 4, 6),
        type: "progress",
        status: "active",
        owner: "mary",
        target_value: 200,
        unit: "??",
        progress: []
    },
    {
        goal_id: 4,
        objective: "Paint bedroom walls",
        end_date: new Date(2022, 1, 28),
        type: "boolean",
        status: "active",
        owner: "mahmood"
    },
    {
        goal_id: 2,
        objective: "Write novella",
        end_date: new Date(2022, 2, 4),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 4,
        objective: "Redecorate bedroom",
        end_date: new Date(2022, 2, 14),
        type: "boolean",
        status: "active",
        owner: "mahmood"
    },
    {
        goal_id: 5,
        objective: "Achieve 100m freestyle PB",
        end_date: new Date(2022, 5, 30),
        type: "boolean",
        status: "completed",
        owner: "stuart",
        finish_date: new Date(2022, 1, 27)
    },
    {
        goal_id: 6,
        objective: "Complete triathlon",
        end_date: new Date(2022, 11, 31),
        type: "boolean",
        status: "active",
        owner: "betty"
    },
    {
        goal_id: 7,
        objective: 'Learn to play "Smells Like Teen Spirit" on guitar',
        end_date: new Date(2022, 1, 28),
        type: "boolean",
        status: "completed",
        owner: "dmitri",
        finish_date: new Date(2022, 1, 14)
    },
    {
        goal_id: 8,
        objective: 'Learn to play "Come As You Are" on guitar',
        end_date: new Date(2022, 2, 28),
        type: "boolean",
        status: "active",
        owner: "dmitri"
    },
    {
        goal_id: 9,
        objective: 'Learn to play "Lithium" on guitar',
        end_date: new Date(2022, 3, 28),
        type: "boolean",
        status: "active",
        owner: "dmitri"
    },
    {
        goal_id: 10,
        objective: 'Learn to play "In Bloom" on guitar',
        end_date: new Date(2022, 4, 28),
        type: "boolean",
        status: "active",
        owner: "dmitri"
    },
    {
        goal_id: 11,
        objective: 'Learn to play "You Know You\'re Right" on guitar',
        end_date: new Date(2022, 5, 28),
        type: "boolean",
        status: "active",
        owner: "dmitri"
    },
    {
        goal_id: 12,
        objective: 'Learn to play "Heart-Shaped Box" on guitar',
        end_date: new Date(2022, 6, 28),
        type: "boolean",
        status: "active",
        owner: "dmitri"
    },
    {
        goal_id: 13,
        objective: 'Learn to play "Pennyroyal Tea" on guitar',
        end_date: new Date(2022, 0, 28),
        type: "boolean",
        status: "completed",
        owner: "dmitri",
        finish_date: new Date(2022, 0, 21)
    },
    {
        goal_id: 2,
        objective: "Write synopsis",
        end_date: new Date(2022, 1, 28),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 14,
        objective: "Finish cool coding project",
        end_date: new Date(2022, 1, 28),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 15,
        objective: "Finish awesome coding project",
        end_date: new Date(2022, 2, 1),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 16,
        objective: "Write 1000 lines of code",
        start_date: new Date(2022, 1, 28),
        end_date: new Date(2022, 1, 28),
        type: "progress",
        status: "active",
        owner: "jeff",
        target_value: 1000,
        unit: "lines",
        progress: []
    },
    {
        goal_id: 17,
        objective: "Write 2000 lines of code",
        start_date: new Date(2022, 2, 1),
        end_date: new Date(2022, 2, 1),
        type: "progress",
        status: "active",
        owner: "jeff",
        target_value: 2000,
        unit: "lines",
        progress: []
    },
    {
        goal_id: 18,
        objective: "Finish mindbending coding project",
        end_date: new Date(2022, 2, 1),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 19,
        objective: "Finish radical coding project",
        end_date: new Date(2022, 2, 1),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 19,
        objective: "Finish gnarly coding project",
        end_date: new Date(2022, 1, 1),
        type: "boolean",
        status: "completed",
        owner: "jeff",
        finish_date: new Date(2022, 0, 20)
    },
    {
        goal_id: 20,
        objective: "Play a round of golf at Northenden Golf Course",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Play a round of golf at Withington Golf Course",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Play a round of golf at Didsbury Golf Course",
        end_date: new Date(2022, 2, 3),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Play a round of golf at Heaton Park Golf Course",
        end_date: new Date(2022, 2, 3),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Play a round of golf at Chorlton Golf Course",
        end_date: new Date(2022, 2, 4),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Play a round of golf at Ashton-on-Mersey Golf Course",
        end_date: new Date(2022, 2, 4),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Finish Hole 1",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Finish Hole 2",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Finish Hole 3",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Finish Hole 4",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Finish Hole 5",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Finish Hole 6",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Finish Hole 7",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Finish Hole 8",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Finish Hole 9",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Finish Hole 10",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Finish Hole 11",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Finish Hole 1",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
    {
        goal_id: 20,
        objective: "Finish Hole 12",
        end_date: new Date(2022, 2, 2),
        type: "boolean",
        status: "active",
        owner: "jeff"
    },
];
exports.subgoalData = subgoalData;
