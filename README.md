# 🚀 Lazy-Okteto-CLI 🚀

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

This optional configuration allows for greater flexibility and control over how **Lazy-Okteto-CLI** operates within your projects.

## Features 🌟
- **Recursive Scan**: Finds every `okteto.yml` file, regardless of nesting.
- **CLI Select Interface**: Easy selection of environments.
- **Customizable**: Configure scan depth, Okteto CLI path, and directories to scan.

## Requirements 📋
- Node.js (LTS Version)
- Okteto CLI

## Contribute 🤝
Contributions are welcome! Feel free to fork the repo, make your changes, and submit a pull request.

## License 📄
MIT
