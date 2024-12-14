interface Window {
  chatwootSDK: {
    run: (config: {
      websiteToken: string;
      baseUrl: string;
      locale: string;
    }) => void;
  };
} 