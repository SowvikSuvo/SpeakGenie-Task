import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import Detailspage from "../Components/Detailspage/Detailspage";
import QuizPage from "../Components/Quizpage/Quizpage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/quiz',
                element: <QuizPage></QuizPage>
            },
            {
                path: 'story/:id',
                element: <Detailspage></Detailspage>
            }
        ]
    },
]);