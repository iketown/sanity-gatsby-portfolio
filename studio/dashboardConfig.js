export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1853615df0fe30950b9a7b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g8z8k3zv',
                  apiId: '88049829-f18e-4e11-af67-0f0312fa8afa'
                },
                {
                  buildHookId: '5e185361ac7affa0eaad0d60',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-f7m1c3r2',
                  apiId: '68d4af64-2c69-4974-993e-869c71c23c37'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iketown/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-f7m1c3r2.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
