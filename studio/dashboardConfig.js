export default {
  widgets: [
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
                  buildHookId: '6036b4738cb60c15617cbe60',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-2ixm9x1t',
                  apiId: 'e8fba3fe-4ab6-4913-beca-063cc3994b0e'
                },
                {
                  buildHookId: '6036b47302b0dc1736ce435f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-tmy9wsqr',
                  apiId: 'b98c174d-3ebc-4fd9-8b27-8bd210e4d032'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bakoversalto/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-tmy9wsqr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
