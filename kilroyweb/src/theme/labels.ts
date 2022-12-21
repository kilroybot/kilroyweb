const labels = {
  description: "kilroy web ui",
  toasts: {
    titles: {
      error: "Error",
      warning: "Warning",
      success: "Success",
    },
  },
  pages: {
    index: {
      title: "kilroyweb",
      metadata: {
        face: "Face",
        module: "Module",
      },
    },
    training: {
      title: "kilroyweb · training",
      buttons: {
        startOffline: "Start offline",
        startOnline: "Start online",
        stop: "Stop",
      },
    },
    controller: {
      title: "kilroyweb · controller",
      config: {
        title: "Configuration",
        buttons: {
          submit: "Submit",
        },
      },
      dangerZone: {
        title: "Danger Zone",
        buttons: {
          save: "Save state",
          reset: "Reset state",
        },
      },
    },
    face: {
      title: "kilroyweb · face",
      config: {
        title: "Configuration",
        buttons: {
          submit: "Submit",
        },
      },
      dangerZone: {
        title: "Danger Zone",
        buttons: {
          save: "Save state",
          reset: "Reset state",
        },
      },
    },
    module: {
      title: "kilroyweb · module",
      config: {
        title: "Configuration",
        buttons: {
          submit: "Submit",
        },
      },
      dangerZone: {
        title: "Danger Zone",
        buttons: {
          save: "Save state",
          reset: "Reset state",
        },
      },
    },
    feed: {
      title: "kilroyweb · feed",
      empty: "No posts yet",
    },
    playground: {
      title: "kilroyweb · playground",
      buttons: {
        generate: "Generate",
      },
    },
  },
};

export type Labels = typeof labels;

export default labels;
