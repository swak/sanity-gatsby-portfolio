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
                  buildHookId: '5dae0025afdde6018ac2cbe9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qk3q7qjw',
                  apiId: '623c7913-c7de-4c0d-b6f1-3caacde7cb21'
                },
                {
                  buildHookId: '5dae0025ac1dd8019b45d850',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1ikwdmsh',
                  apiId: 'b65cedd1-437a-4128-89ea-60b0652bbd95'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/swak/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1ikwdmsh.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
