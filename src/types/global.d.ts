interface Window {
  chatwootSettings: {
    hideMessageBubble: boolean;
    position: "left" | "right";
    locale: string;
    type: "standard" | "expanded_bubble";
    launcherTitle: string;
  };
  chatwootSDK: {
    run: (config: {
      websiteToken: string;
      baseUrl: string;
    }) => void;
  };
}