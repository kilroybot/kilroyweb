const labels = {
  description: "kilroy web ui",
  toasts: {
    titles: {
      error: "Error",
      warning: "Warning",
      success: "Success",
    },
  },
  index: {
    title: "kilroyweb",
    metadata: {
      face: "Face",
      module: "Module",
    },
  },
  training: {
    title: "Training",
  },
  controller: {
    title: "Controller",
    config: {
      title: "Configuration",
    },
    dangerZone: {
      title: "Danger Zone",
      buttons: {
        reset: "Reset state",
      },
    },
  },
  face: {
    title: "Face",
    config: {
      title: "Configuration",
    },
    dangerZone: {
      title: "Danger Zone",
      buttons: {
        reset: "Reset state",
      },
    },
  },
  module: {
    title: "Module",
    config: {
      title: "Configuration",
    },
    dangerZone: {
      title: "Danger Zone",
      buttons: {
        reset: "Reset state",
      },
    },
  },
  feed: {
    title: "Feed",
    empty: "No posts yet",
  },
  playground: {
    title: "Playground",
    buttons: {
      generate: "Generate",
    },
  },
};

export type Labels = typeof labels;

export default labels;
