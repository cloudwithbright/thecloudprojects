# Terraform & Terragrunt Modules

Example Terraform and Terragrunt modules for provisioning infrastructure on AWS, Azure, and GCP. Reusable, documented, and aligned with common best practices.

## What You'll Find

- **Terraform modules** — Reusable modules for networks, compute, storage, and app services
- **Terragrunt** — DRY configurations, remote state, and environment-specific values
- **Examples** — Full stacks you can copy and adapt (dev/staging/prod)
- **Patterns** — Module structure, naming, and state layout

## By Cloud Provider

| Provider | Description |
|--------|-------------|
| [AWS](/terraform/aws/) | Terraform and Terragrunt modules for AWS (VPC, ECS, Lambda, RDS, etc.) |
| [Azure](/terraform/azure/) | Modules for Azure (VNet, Container Apps, Functions, etc.) |
| [GCP](/terraform/gcp/) | Modules for GCP (VPC, Cloud Run, GKE, etc.) |

## What's Included

- **README** — Purpose, inputs, outputs, and usage
- **Examples** — Minimal and full examples per module
- **Terragrunt** — `terragrunt.hcl` examples and folder layout
- **State** — Remote backend (e.g. S3, Azure Storage, GCS) and locking

---

Pick a cloud provider above to explore Terraform and Terragrunt modules.
