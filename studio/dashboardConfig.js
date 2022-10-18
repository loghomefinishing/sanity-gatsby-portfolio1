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
                  buildHookId: '634e0a8ffc207a6bfb16e9d8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-1-studio-f1bv8cpz',
                  apiId: 'aa491125-c816-4aa0-8841-01fb7d77a34d'
                },
                {
                  buildHookId: '634e0a90fc207a6bfb16e9d9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-1-web-wi5mvne8',
                  apiId: '2edce68e-6831-4fe9-b5c6-f022f00155f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/loghomefinishing/sanity-gatsby-portfolio1',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-1-web-wi5mvne8.netlify.app',
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
