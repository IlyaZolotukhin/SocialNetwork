import Preloader from "../components/common/Preloader/Preloader";
import React from "react";

export const withSuspense = (Component:any) => {

    return () => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component />
        </React.Suspense>

    }
}