# The Cloud Projects

A comprehensive platform for learning cloud engineering through hands-on, real-world projects. Master AWS, Azure, and GCP with step-by-step guides, architecture diagrams, and deployable code.

## What's Inside

- **Multi-cloud coverage** — AWS, Azure, and Google Cloud with projects for each platform’s core services
- **Compute & containers** — Serverless (Lambda, Functions), containers (ECS, Container Apps, Cloud Run), and Kubernetes (EKS, AKS, GKE)
- **Step-by-step guides** — Clear objectives, prerequisites, and instructions for every project
- **Infrastructure as Code** — Terraform, CloudFormation, ARM templates, and related tools

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (18+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Install and run

```bash
# Clone the repository
git clone https://github.com/thecloudprojects/thecloudprojects.git
cd thecloudprojects

# Install dependencies
npm install

# Start the docs site locally
npm run docs:dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other scripts

| Command           | Description                    |
|-------------------|--------------------------------|
| `npm run docs:dev`    | Start VitePress dev server     |
| `npm run docs:build`  | Build docs for production      |
| `npm run docs:serve`  | Serve the built docs locally   |

## Project Structure

```
thecloudprojects/
├── docs/                    # VitePress documentation
│   ├── cloud/               # Cloud provider projects
│   │   ├── aws/             # Lambda, ECS, EKS, App Runner, etc.
│   │   ├── azure/           # Functions, Container Apps, AKS, etc.
│   │   └── gcp/             # Cloud Functions, Cloud Run, GKE, etc.
│   ├── .vitepress/          # Theme and config
│   └── about.md             # About the author
├── package.json
└── README.md
```

## Contributing

Contributions are welcome. To add or improve a project:

1. Fork the repo and create a branch.
2. Add or update content under `docs/` following the existing structure.
3. Update the sidebar in `docs/.vitepress/config.js` if you add new sections.
4. Open a pull request with a clear description of your changes.

## License

ISC © Bright Debrah Owusu
