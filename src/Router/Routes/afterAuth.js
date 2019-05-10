import People from "../../Components/People";
import Friends from "../../Components/Friends";


const AppRoutesAfter = [
    {
        component: People,
        path: `/People`,
        key: 1
    },
    {
        component: Friends,
        path: `/Friends`,
        key: 2
    }
];

export default AppRoutesAfter;