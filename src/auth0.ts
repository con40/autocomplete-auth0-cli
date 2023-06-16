const completionSpec: Fig.Spec = {
  name: "auth0",
  description: "Auth0 CLI for Development https://github.com/auth0/auth0-cli",
  subcommands: [
    {
      name: "actions",
      description: "Actions are secure, tenant-specific, versioned functions",
      subcommands: [
        {
          name: "create",
          description: "Create a new action",

          options: [
            {
              name: "-c",
              description: "Code content for the action",
              args: {
                name: "ActionCode",
              },
            },
            {
              name: "-d",
              description:
                "Third party npm module, and its version, that the action depends on",
              args: {
                name: "Modules[]",
              },
            },
            {
              name: "-json",
              description: "Output in json format",
            },
            {
              name: "-n",
              description: "Name of action",
              args: {
                name: "ActionName",
              },
            },
            {
              name: "-s",
              description: "Secrets to be used in the action",
              args: {
                name: "ActionName",
              },
            },
          ],
        },
      ],
    },
  ],
};
export default completionSpec;
