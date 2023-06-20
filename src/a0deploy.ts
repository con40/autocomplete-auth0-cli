const completionSpec: Fig.Spec = {
  name: "a0deploy",
  description: "",
  subcommands: [
    {
      name: "export",
      description: "Fetching configurations from Auth0 tenant to local machine",
      subcommands: [
        {
          name: "--output_folder",
          description:
            "Path. Specifies the target directory for configuration files to be written to",
        },
        {
          name: "--config_file",
          description:
            "Path. Specifies the user-defined configuration file (config.json). Refer to the list of all configurable properties",
        },
        {
          name: "--format",
          description:
            "Options: yaml or directory. Determines the file format of the exported resource configuration files. See: Available Resource Config Formats",
        },
        {
          name: "--export_ids",
          description:
            "Boolean. When enabled, will export the identifier fields for each resource. Default: false",
        },
        {
          name: "--env",
          description:
            "Boolean. Indicates if the tool should ingest environment variables or not. Default: true",
        },
        {
          name: "--debug",
          description:
            "Boolean. Enables more verbose error logging; useful during troubleshooting. Default: false",
        },
        {
          name: "--proxy_url",
          description:
            "A url for proxying requests. Only set this if you are behind a proxy",
        },
      ],
    },
    {
      name: "import",
      description: "Applying configurations from local machine to Auth0 tenant",
      subcommands: [
        {
          name: "--input_file",
          description:
            "Path. Specifies the location of the resource configuration files. For YAML formats, this will point to the tenant.yaml file, for directory formats, this will point to the resource configuration directory",
        },
        {
          name: "--config_file",
          description:
            "Path. Specifies the user-defined configuration file (config.json). Refer to the list of all configurable properties",
        },
        {
          name: "--env",
          description:
            "Boolean. Indicates if the tool should ingest environment variables or not. Default: true",
        },
        {
          name: "--proxy_url",
          description:
            "A url for proxying requests. Only set this if you are behind a proxy",
        },
        {
          name: "--debug",
          description:
            "Boolean. Enables more verbose error logging; useful during troubleshooting. Default: false",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for a0deploy",
    },
  ],
  // Only uncomment if a0deploy takes an argument
  // args: {}
};
export default completionSpec;
