import React from 'react';
import HomepageHeader from './HomepageHeader';
import HomepageFeatures from './HomepageFeatures';
import Youtube from './youtube';
import Jellyfin from './jellyfin';

export default function Homepage(): JSX.Element {
    return (
        <>
            <HomepageHeader />
            <main className="bg-base-100">
                <HomepageFeatures />
                <div id="apps" className="py-8">
                    <Jellyfin />
                    <Youtube />
                </div>
            </main>
        </>
    );
} 