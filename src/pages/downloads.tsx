import React from 'react';
import Layout from '@theme/Layout';
import { Button } from 'flowbite-react';

export default function DownloadPage(): JSX.Element {
  return (
    <Layout title="Download Jellyfin Apps" description="Download Jellyfin for your devices.">
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">Download Jellyfin Apps</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
          Choose your platform and get started with Jellyfin.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Button color="primary" href="https://jellyfin.org/client-windows" gradientMonochrome="info">
            Windows
          </Button>
          <Button color="primary" href="https://jellyfin.org/client-android" gradientMonochrome="info">
            Android
          </Button>
          <Button color="primary" href="https://jellyfin.org/client-ios" gradientMonochrome="info">
            iOS
          </Button>
        </div>
      </div>
    </Layout>
  );
}
