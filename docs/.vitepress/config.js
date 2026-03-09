module.exports = {
    title: "The Cloud Projects",
    description: "Master Cloud Engineering Through Hands-On Projects",

    themeConfig: {
        logo: '/logo.svg',

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Projects', link: '/cloud/' },
            {
                text: 'Resources',
                items: [
                    { text: 'Use Case Projects', link: '/use-cases/' },
                    { text: 'Sample Architectures', link: '/architectures/' },
                    { text: 'Terraform & Terragrunt', link: '/terraform/' }
                ]
            },
            { text: 'About Me', link: '/about' }
        ],

        sidebar: {
            '/cloud/aws/': [
                {
                    text: 'AWS Projects',
                    items: [
                        { text: 'Overview', link: '/cloud/aws/' },
                        { text: 'App Runner', link: '/cloud/aws/apprunner/' },
                        { text: 'Lambda', link: '/cloud/aws/lambda/' },
                        { text: 'ECS EC2', link: '/cloud/aws/ecs/ec2/' },
                        { text: 'ECS Fargate', link: '/cloud/aws/ecs/fargate/' },
                        { text: 'EKS', link: '/cloud/aws/eks/' },
                        { text: 'Elastic Beanstalk', link: '/cloud/aws/elasticbeanstalk/' }
                    ]
                }
            ],
            '/cloud/azure/': [
                {
                    text: 'Azure Projects',
                    items: [
                        { text: 'Overview', link: '/cloud/azure/' },
                        { text: 'Container Apps', link: '/cloud/azure/containerapp/' },
                        { text: 'Functions', link: '/cloud/azure/functions/' },
                        { text: 'Container Instances', link: '/cloud/azure/containerinstance/' },
                        { text: 'AKS', link: '/cloud/azure/aks/' },
                        { text: 'Logic Apps', link: '/cloud/azure/logicapp/' },
                        { text: 'Virtual Machines', link: '/cloud/azure/vm/' },
                        { text: 'VM Scale Sets', link: '/cloud/azure/vmss/' },
                        { text: 'Web Apps', link: '/cloud/azure/webapp/' }
                    ]
                }
            ],
            '/cloud/gcp/': [
                {
                    text: 'GCP Projects',
                    items: [
                        { text: 'Overview', link: '/cloud/gcp/' },
                        { text: 'Cloud Run', link: '/cloud/gcp/cloudrun/' },
                        { text: 'Cloud Functions', link: '/cloud/gcp/functions/' },
                        { text: 'GKE', link: '/cloud/gcp/gke/' },
                        { text: 'Compute Engine', link: '/cloud/gcp/compute_engine/' },
                        { text: 'App Engine', link: '/cloud/gcp/app_engine/' },
                        { text: 'Workflows', link: '/cloud/gcp/workflow/' }
                    ]
                }
            ],
            '/cloud/': [
                {
                    text: 'Cloud Providers',
                    items: [
                        { text: 'Overview', link: '/cloud/' },
                        { text: 'AWS', link: '/cloud/aws/' },
                        { text: 'Azure', link: '/cloud/azure/' },
                        { text: 'GCP', link: '/cloud/gcp/' }
                    ]
                }
            ],
            '/use-cases/': [
                {
                    text: 'Use Case Projects',
                    items: [
                        { text: 'Overview', link: '/use-cases/' },
                        { text: 'AWS', link: '/use-cases/aws/' },
                        { text: 'Azure', link: '/use-cases/azure/' },
                        { text: 'GCP', link: '/use-cases/gcp/' }
                    ]
                }
            ],
            '/architectures/': [
                {
                    text: 'Sample Architectures',
                    items: [
                        { text: 'Overview', link: '/architectures/' },
                        { text: 'AWS', link: '/architectures/aws/' },
                        { text: 'Azure', link: '/architectures/azure/' },
                        { text: 'GCP', link: '/architectures/gcp/' }
                    ]
                }
            ],
            '/terraform/': [
                {
                    text: 'Terraform & Terragrunt',
                    items: [
                        { text: 'Overview', link: '/terraform/' },
                        { text: 'AWS', link: '/terraform/aws/' },
                        { text: 'Azure', link: '/terraform/azure/' },
                        { text: 'GCP', link: '/terraform/gcp/' }
                    ]
                }
            ]
        },

        docFooter: {
            prev: 'Previous',
            next: 'Next'
        },

        socialLinks: [
            { icon: 'discord', link: 'https://discord.gg/jPm36QEA' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/groups/17599042/' },
            { icon: 'github', link: 'https://github.com/thecloudprojects' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025 Bright Debrah Owusu'
        },

        search: {
            provider: 'local'
        }
    }
}