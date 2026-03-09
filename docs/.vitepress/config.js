module.exports = {
    title: "The Cloud Projects",
    description: "Master Cloud Engineering Through Hands-On Projects",

    themeConfig: {
        logo: '/logo.svg',

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Cloud', link: '/cloud/' },
            { text: 'MLOps', link: '/mlops/' },
            { text: 'LLMOps', link: '/llmops/' },
            {
                text: 'Providers',
                items: [
                    { text: 'AWS', link: '/cloud/aws/' },
                    { text: 'Azure', link: '/cloud/azure/' },
                    { text: 'GCP', link: '/cloud/gcp/' }
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
                        { text: 'Lambda', link: '/cloud/aws/lambda/' },
                        { text: 'ECS', link: '/cloud/aws/ecs/' },
                        { text: 'EKS', link: '/cloud/aws/eks/' },
                        { text: 'App Runner', link: '/cloud/aws/apprunner/' }
                    ]
                }
            ],
            '/cloud/azure/': [
                {
                    text: 'Azure Projects',
                    items: [
                        { text: 'Overview', link: '/cloud/azure/' },
                        { text: 'Functions', link: '/cloud/azure/functions/' },
                        { text: 'Container Apps', link: '/cloud/azure/containerapp/' },
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
                        { text: 'Cloud Functions', link: '/cloud/gcp/functions/' },
                        { text: 'Cloud Run', link: '/cloud/gcp/cloudrun/' },
                        { text: 'Compute Engine', link: '/cloud/gcp/compute_engine/' },
                        { text: 'App Engine', link: '/cloud/gcp/app_engine/' },
                        { text: 'Workflows', link: '/cloud/gcp/workflow/' }
                    ]
                }
            ],
            '/mlops/': [
                {
                    text: 'MLOps Projects',
                    items: [
                        { text: 'Overview', link: '/mlops/' }
                    ]
                }
            ],
            '/llmops/': [
                {
                    text: 'LLMOps Projects',
                    items: [
                        { text: 'Overview', link: '/llmops/' }
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
                },
                {
                    text: 'Other Topics',
                    items: [
                        { text: 'MLOps', link: '/mlops/' },
                        { text: 'LLMOps', link: '/llmops/' }
                    ]
                }
            ]
        },

        docFooter: {
            prev: 'Previous',
            next: 'Next'
        },

        socialLinks: [
            { icon: 'discord', link: 'https://discord.gg/your-invite-code' },
            { icon: 'linkedin', link: 'https://linkedin.com/in/yourprofile' },
            { icon: 'github', link: 'https://github.com/yourusername/thecloudprojects' }
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