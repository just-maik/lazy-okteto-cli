# 🚀 Lazy-Okteto-CLI 🚀

## 🛠️ Work in progress 🛠️

Hey, I started this little cli project because I needed it dealing with nested projects folder's.
I was using multiple batch or sh files to start my containers.

The project is heavily under construction and will be ready to use when the first npm package releases.


## What is Lazy-Okteto-CLI? 🤔
**Lazy-Okteto-CLI** is a tool that scans for `okteto.yml` files in your projects and lets you select which one to activate with `okteto up` via a CLI interface. It streamlines working with multiple Okteto environments, saving time and effort.

## Usecase 🎯
Ideal for developers juggling multiple projects or Kubernetes namespaces, **Lazy-Okteto-CLI** simplifies the process of starting your Okteto environments, eliminating the need to manually search for `okteto.yml` files.

## How to Use 🛠️

### Starting Up 🚀

Simply use `npx` to run **Lazy-Okteto-CLI** without needing a global installation:

```bash
npx lazy-okteto-cli
```

This command scans your projects, finds `okteto.yml` files, and displays a CLI select menu for you to choose which environment to launch.

### Configuration (Optional) 🛠️

Create a `lazy-okteto.config.(ts|json|yml|js)` file in the directory where you run the CLI to configure:

- **depth**: How deep the scan should go.
- **oktetoPath**: Custom path to your Okteto CLI.
- **directory**: Specific directory to scan.

These are the defaults used if no config is present

```ts
{
  oktetoExecutablePath: "$USER/AppData/Local/Programs/okteto.exe",
  includedFoldersDepth: 3,
  directory: "./",
}
```

This optional configuration allows for greater flexibility and control over how **Lazy-Okteto-CLI** operates within your projects.

## Features 🌟
#### Current:
- **Recursive Scan**: Finds every `okteto.yml` file, regardless of nesting.
- **CLI Select Interface**: Easy selection of environments.
- **Customizable**: Configure scan depth, Okteto CLI path, and directories to scan.
#### Planned:
- support for excluding directories.
- handling the different okteto commands (up,down, etc.).
- adjust config naming

## Requirements 📋
- Node.js (LTS Version)
- Okteto CLI

## Contribute 🤝
Contributions are welcome! Feel free to fork the repo, make your changes, and submit a pull request.

## License 📄
MIT
