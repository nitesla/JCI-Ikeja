import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import BoardPage from '@/components/pages/BoardPage';
import GalleryPage from '@/components/pages/GalleryPage';
import EventsPage from '@/components/pages/EventsPage';
import NewsletterPage from '@/components/pages/NewsletterPage';
import JoinPage from '@/components/pages/JoinPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "board",
        element: <BoardPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
      },
      {
        path: "join",
        element: <JoinPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
